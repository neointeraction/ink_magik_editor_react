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
  const [editorZoomDisplay, setEditorZoomDisplay] = useState(false);
  const [loadIndex, setloadIndex] = useState([]);

  // global styling

  useEffect(() => {
    fabric.Object.prototype.set({
      transparentCorners: false,
      borderColor: "#ff408a",
      borderScaleFactor: 0.5,
      cornerColor: "#1caaf4",
      cornerSize: 6,
    });
  });

  // canvas initalization
  useEffect(() => {
    setCanvasIndex(1);
    setCanvasCount(["canvas-element-0"]);
  }, [canvas]);

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

  // save canvas
  const saveCanvas = () => {
    let json = canvas.map((item) => {
      return item.toJSON();
    });
    localStorage.setItem("canvas", JSON.stringify(json));
  };

  // LOAD CANVAS START

  let canvasToLoad = localStorage.canvas && JSON.parse(localStorage.canvas);

  const loadObjects = (data, index) => {
    // assinging data to canvas
    if (data !== undefined) {
      canvas[index]?.loadFromJSON(
        data,
        function () {
          canvas[index]?.renderAll();
        },
        function (o, object) {
          console.log(o, object);
        }
      );
    }
  };

  const loadCanvas = () => {
    canvasToLoad.forEach((json, index) => {
      loadIndex.push(index);
      let filterloadIndex = [...new Set(loadIndex)];
      setloadIndex(filterloadIndex);
      loadIndex.map((indexItem) => {
        canvasCount.push(`canvas-element-${indexItem}`);
        let filter = [...new Set(canvasCount)];
        return setCanvasCount(filter);
      });
      loadObjects(json, index);
    });
  };

  let condition = loadIndex.length >= canvasToLoad?.length;

  useEffect(() => {
    localStorage.canvas && loadCanvas();
  }, [condition]);

  // LOAD CANVAS END

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
          checkCanvas,
          addCanvas,
          canvasInstance,
          setCanvasInstance,
          showSettingsPanel,
          setShowSettingsPanel,
          editorZoomDisplay,
          setEditorZoomDisplay,
          saveCanvas,
          loadCanvas,
        },
      ]}
    >
      {props.children}
    </EditorContext.Provider>
  );
};
