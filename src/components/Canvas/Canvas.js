import React, { useEffect, useRef } from "react";
import { fabric } from "fabric";

const Canvas = ({
  setCanvas,
  id,
  setCanvasId,
  canvas,
  setPanelId,
  context,
}) => {
  const canvasContainer = useRef();
  const canvasRef = useRef();
  const fabricRef = useRef();

  useEffect(() => {
    if (!canvasRef.current) return;
    if (fabricRef.current) return;
    setCanvas(initCanvas(id));
  }, []);

  const initCanvas = (CanvasId) => {
    return [
      ...canvas,
      (fabricRef.current = new fabric.Canvas(CanvasId, {
        height: 400,
        width: 600,
        backgroundColor: "#ffffff",
        id: CanvasId,
        selection: true,
        preserveObjectStacking: true,
      })),
    ];
  };

  const canvasDetail = (e) => {
    setCanvasId(canvasRef?.current?.id);
    // setPanelId("");
    // context.setShowSettingsPanel(false);
  };

  // console.log(fabricRef, "canvasRef");

  return (
    <>
      <div ref={canvasContainer} onClick={canvasDetail}>
        <canvas id={id} ref={canvasRef} />
      </div>
    </>
  );
};

export default Canvas;
