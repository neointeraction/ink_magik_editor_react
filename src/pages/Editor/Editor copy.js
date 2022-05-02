import React, { useState, useEffect, useRef, useCallback } from "react";
import { fabric } from "fabric";

import Canvas from "../../components/Canvas";
// import ColorPicker from "../../components/ColorPicker";

const Editor = () => {
  const [canvas, setCanvas] = useState([]);

  const [canvasIndex, setCanvasIndex] = useState(0);
  const [canvasCount, setCanvasCount] = useState([]);
  const [canvasId, setCanvasId] = useState();
  // const [colorId, setColorId] = useState("#000");
  const [object, setObject] = useState();

  useEffect(() => {
    setCanvasIndex(1);
    setCanvasCount(["canvas-element-0"]);
  }, []);

  // const handleChangeComplete = (color) => {
  //   setColorId(color.hex);
  // };

  const checkCanvas = (id) => {
    let index = canvas.map((item) => item.id).indexOf(id);
    return index;
  };

  const addRect = (canvas) => {
    const rect = new fabric.Rect({
      height: 280,
      width: 200,
      fill: "#0062B1",
      left: 100,
      top: 100,
    });
    canvas.add(rect);
    canvas.renderAll();
    setObject(canvas);
  };

  const addCircle = (canvas) => {
    const circle = new fabric.Circle({
      radius: 80,
      fill: "black",
      left: 150,
      top: 150,
    });
    canvas.add(circle);
    canvas.renderAll();
    setObject(canvas);
  };

  const addCanvas = () => {
    setCanvasIndex(canvasIndex + 1);
    canvasCount.push(`canvas-element-${canvasIndex}`);
  };

  // console.log(canvasId, "canvasId");
  console.log(canvas, "canvas");

  const changeColor = () => {
    object.getActiveObject().set({ fill: "red" });
    object.renderAll();
  };

  return (
    <div className="editor-container">
      <button onClick={changeColor}>Change color to Red</button>
      <button onClick={addCanvas}>Add Canvas</button>
      {/* <button
        onClick={() => addRect(canvas[canvasId ? checkCanvas(canvasId) : 0])}
      >
        Rectangle
      </button> */}
      <button
        onClick={() => addCircle(canvas[canvasId ? checkCanvas(canvasId) : 0])}
      >
        Circle
      </button>
      {/* <ColorPicker color={colorId} onChangeComplete={handleChangeComplete} /> */}
      {canvasCount.map((item, index) => {
        return (
          <div key={index} className="canvas-box">
            <Canvas
              id={item}
              canvas={canvas}
              setCanvas={setCanvas}
              setCanvasId={setCanvasId}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Editor;
