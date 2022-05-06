import React, { useContext, useEffect } from "react";

import Canvas from "../../components/Canvas";

import { EditorContext } from "../../context/EditorContext";

import { zoomIn, zoomOut } from "../../methods/zoomEvents";

const Editor = ({ setPanelId }) => {
  const [context] = useContext(EditorContext);

  let canvas = context.canvas[context.checkCanvas(context.canvasId)];

  // const changeColor = () => {
  //   context.object.getActiveObject().set({ fill: "red" });
  //   context.object.renderAll();
  // };

  return (
    <div className={"editor-container"}>
      {/* <button onClick={changeColor}>Change color to Red</button> */}
      {/* <ColorPicker color={colorId} onChangeComplete={handleChangeComplete} /> */}
      <button onClick={() => zoomIn(canvas, context)}>zoom in</button>
      <button onClick={() => zoomOut(canvas, context)}>zoom out</button>
      <button onClick={context.saveCanvas}>Save canvas to localstorage</button>
      {context.canvasCount.map((item, index) => {
        return (
          <div key={index} className="canvas-box">
            <Canvas
              id={item}
              canvas={context.canvas}
              setCanvasId={context.setCanvasId}
              currentCanvas={canvas}
              setPanelId={setPanelId}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Editor;
