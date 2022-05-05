import React, { useEffect, useRef } from "react";
import { fabric } from "fabric";

import { gridLines } from "../../methods/gridLines";

const Canvas = ({ id, setCanvasId, canvas, currentCanvas, setPanelId }) => {
  const canvasContainer = useRef();
  const canvasRef = useRef();
  const fabricRef = useRef();

  useEffect(() => {
    if (!canvasRef.current) return;
    if (fabricRef.current) return;
    initCanvas(id);
  }, [id]);

  useEffect(() => {
    gridLines(currentCanvas);
  }, [currentCanvas]);

  const initCanvas = (CanvasId) => {
    canvas.push(
      (fabricRef.current = new fabric.Canvas(CanvasId, {
        height: 400,
        width: 600,
        backgroundColor: "#ffffff",
        id: CanvasId,
        selection: true,
      }))
    );
  };

  const canvasClickEvents = (e) => {
    // getting canvas ID
    setCanvasId(canvasRef?.current?.id);

    // show canvas panel in sidebar
    currentCanvas?.on("mouse:down", (options) => {
      currentCanvas.getActiveObject() === null && setPanelId("");
    });
  };

  return (
    <>
      <div ref={canvasContainer} onClick={canvasClickEvents}>
        <canvas id={id} ref={canvasRef} />
      </div>
    </>
  );
};

export default Canvas;
