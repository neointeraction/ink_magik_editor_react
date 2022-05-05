import React, { createContext, useContext } from "react";
import { fabric } from "fabric";

import { EditorContext } from "./EditorContext";

export const ImageContext = createContext();

export const ImageProvider = (props) => {
  const [context] = useContext(EditorContext);

  // uploadImage

  const uploadImage = (e, canvas) => {
    var fileType = e.target.files[0].type;
    var url = URL.createObjectURL(e.target.files[0]);

    if (fileType === "image/png" || fileType === "image/jpeg") {
      fabric.Image.fromURL(url, function (img) {
        let imgWidth = img.width;
        let imgHeight = img.height;
        let canvasWidth = canvas.getWidth();
        let canvasHeight = canvas.getHeight();

        let imgRatio = imgWidth / imgHeight;
        let canvasRatio = canvasWidth / canvasHeight;

        if (imgRatio <= canvasRatio) {
          if (imgHeight > canvasHeight) {
            img.scaleToHeight(canvasHeight);
          }
        } else {
          if (imgWidth > canvasWidth) {
            img.scaleToWidth(canvasWidth);
          }
        }
        img.set();
        canvas.add(img);
        canvas.centerObject(img);
        canvas.renderAll();
        context.setObject(canvas);
      });
    } else if (fileType === "image/svg+xml") {
      //check if svg
      fabric.loadSVGFromURL(url, function (objects, options) {
        var svg = fabric.util.groupSVGElements(objects, options);
        svg.scaleToWidth(180);
        svg.scaleToHeight(180);
        canvas.add(svg);
        canvas.renderAll();
        context.setObject(canvas);
      });
    }
  };

  return (
    <ImageContext.Provider
      value={[
        {
          uploadImage,
        },
      ]}
    >
      {props.children}
    </ImageContext.Provider>
  );
};
