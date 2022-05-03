import React, { useEffect, useContext } from "react";

import Canvas from "../../components/Canvas";

import { EditorContext } from "../../context/EditorContext";

const Editor = ({ setPanelId }) => {
  const [context] = useContext(EditorContext);

  let canvas = context.canvas[context.checkCanvas(context.canvasId)];

  console.log(context.canvasCount, "EditorContext");

  useEffect(() => {
    context.setCanvasIndex(1);
    context.setCanvasCount(["canvas-element-0"]);
  }, []);

  console.log(context.canvas, "canvas");

  // const changeColor = () => {
  //   context.object.getActiveObject().set({ fill: "red" });
  //   context.object.renderAll();
  // };

  let canvasScale = 1; //global
  let SCALE_FACTOR = 1.5; //global

  const zoomIn = () => {
    canvasScale = canvasScale * SCALE_FACTOR;

    canvas?.setHeight(canvas?.getHeight() * SCALE_FACTOR);
    canvas?.setWidth(canvas?.getWidth() * SCALE_FACTOR);

    var objects = canvas?.getObjects();
    for (var i in objects) {
      var scaleX = objects[i].scaleX;
      var scaleY = objects[i].scaleY;
      var left = objects[i].left;
      var top = objects[i].top;

      var tempScaleX = scaleX * SCALE_FACTOR;
      var tempScaleY = scaleY * SCALE_FACTOR;
      var tempLeft = left * SCALE_FACTOR;
      var tempTop = top * SCALE_FACTOR;

      objects[i].scaleX = tempScaleX;
      objects[i].scaleY = tempScaleY;
      objects[i].left = tempLeft;
      objects[i].top = tempTop;

      objects[i].setCoords();
    }
    console.log(canvasScale, "canvasScale");
    canvasScale >= 2.25 && context.setEditorZoomDisplay(true);
    canvas?.renderAll();
  };

  const zoomOut = () => {
    canvasScale = canvasScale / SCALE_FACTOR;

    canvas?.setHeight(canvas?.getHeight() * (1 / SCALE_FACTOR));
    canvas?.setWidth(canvas?.getWidth() * (1 / SCALE_FACTOR));

    var objects = canvas?.getObjects();
    for (var i in objects) {
      var scaleX = objects[i].scaleX;
      var scaleY = objects[i].scaleY;
      var left = objects[i].left;
      var top = objects[i].top;

      var tempScaleX = scaleX * (1 / SCALE_FACTOR);
      var tempScaleY = scaleY * (1 / SCALE_FACTOR);
      var tempLeft = left * (1 / SCALE_FACTOR);
      var tempTop = top * (1 / SCALE_FACTOR);

      objects[i].scaleX = tempScaleX;
      objects[i].scaleY = tempScaleY;
      objects[i].left = tempLeft;
      objects[i].top = tempTop;

      objects[i].setCoords();
    }
    canvasScale <= 2.25 && context.setEditorZoomDisplay(false);
    canvas?.renderAll();
  };

  return (
    <div className={"editor-container"}>
      {/* <button onClick={changeColor}>Change color to Red</button> */}

      {/* <ColorPicker color={colorId} onChangeComplete={handleChangeComplete} /> */}
      <button onClick={zoomIn}>zoom in</button>
      <button onClick={zoomOut}>zoom out</button>
      {context.canvasCount.map((item, index) => {
        return (
          <div key={index} className="canvas-box">
            <Canvas
              id={item}
              canvas={context.canvas}
              setCanvas={context.setCanvas}
              setCanvasId={context.setCanvasId}
              setPanelId={setPanelId}
              context={context}
              currentCanvas={canvas}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Editor;
