import React, { useState, useEffect, createContext } from "react";

export const EditorContext = createContext();

export const EditorProvider = (props) => {
  const [canvas, setCanvas] = useState([]); // canvas array
  const [canvasIndex, setCanvasIndex] = useState(0);
  const [canvasCount, setCanvasCount] = useState([]);
  const [canvasId, setCanvasId] = useState();
  const [object, setObject] = useState();
  const [canvasInstance, setCanvasInstance] = useState([...canvas]);
  const [showSettingsPanel, setShowSettingsPanel] = useState();
  const [editorZoomDisplay, setEditorZoomDisplay] = useState(false);
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
          // addRect,
          // addCircle,
          checkCanvas,
          addCanvas,
          canvasInstance,
          setCanvasInstance,
          showSettingsPanel,
          setShowSettingsPanel,
          editorZoomDisplay,
          setEditorZoomDisplay,
        },
      ]}
    >
      {props.children}
    </EditorContext.Provider>
  );
};
