import React, { useEffect, useContext } from "react";

import Canvas from "../../components/Canvas";

import { EditorContext } from "../../context/EditorContext";

const Editor = ({ setPanelId }) => {
  const [context] = useContext(EditorContext);

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

  return (
    <div className="editor-container">
      {/* <button onClick={changeColor}>Change color to Red</button> */}

      {/* <ColorPicker color={colorId} onChangeComplete={handleChangeComplete} /> */}
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
            />
          </div>
        );
      })}
    </div>
  );
};

export default Editor;
