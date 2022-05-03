import React, { createContext, useContext } from "react";
import { fabric } from "fabric";

import { EditorContext } from "./EditorContext";

export const ObjectContext = createContext();

export const ObjectProvider = (props) => {
  const [context] = useContext(EditorContext);

  // add rectangle
  const addRect = (canvas) => {
    const rect = new fabric.Rect({
      height: 280,
      width: 200,
      fill: "#0062B1",
      left: 100,
      top: 100,
    });
    rect.guides = {};
    canvas.add(rect);
    canvas.renderAll();
    context.setObject(canvas);
  };

  // add circle
  const addCircle = (canvas) => {
    const circle = new fabric.Circle({
      radius: 80,
      fill: "black",
      left: 150,
      top: 150,
    });
    circle.guides = {};
    canvas.add(circle);
    canvas.renderAll();
    context.setObject(canvas);
  };

  return (
    <ObjectContext.Provider
      value={[
        {
          addRect,
          addCircle,
        },
      ]}
    >
      {props.children}
    </ObjectContext.Provider>
  );
};
