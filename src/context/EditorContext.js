import React, { useState, useEffect, createContext } from "react";
import { fabric } from "fabric";

export const EditorContext = createContext();

export const EditorProvider = (props) => {
  const [canvas, setCanvas] = useState([]); // canvas array
  const [canvasIndex, setCanvasIndex] = useState(0);
  const [canvasCount, setCanvasCount] = useState([]);
  const [canvasId, setCanvasId] = useState();
  const [object, setObject] = useState();
  const [canvasInstance, setCanvasInstance] = useState([...canvas]);
  const [showSettingsPanel, setShowSettingsPanel] = useState();
  // canvas initalization
  useEffect(() => {
    setCanvasIndex(1);
    setCanvasCount(["canvas-element-0"]);
  }, []);

  useEffect(() => {
    setCanvasInstance([...canvas]);
  }, [canvas]);

  //add new canvas

  const addCanvas = () => {
    setCanvasIndex(canvasIndex + 1);
    canvasCount.push(`canvas-element-${canvasIndex}`);
  };

  // add rectangle
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

  // add circle
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

  // function to check which canvas is selected
  const checkCanvas = (id) => {
    let index = canvas.map((item) => item.id).indexOf(id);
    return index;
  };

  console.log(canvasInstance, "canvasInstance");

  return (
    <EditorContext.Provider
      value={[
        {
          canvas,
          setCanvas,
          canvasIndex,
          setCanvasIndex,
          canvasCount,
          setCanvasCount,
          canvasId,
          setCanvasId,
          object,
          setObject,
          addRect,
          addCircle,
          checkCanvas,
          addCanvas,
          canvasInstance,
          setCanvasInstance,
          showSettingsPanel,
          setShowSettingsPanel,
        },
      ]}
    >
      {props.children}
    </EditorContext.Provider>
  );
};
