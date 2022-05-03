import React, { useEffect, useRef } from "react";
import { fabric } from "fabric";

const Canvas = ({
  setCanvas,
  id,
  setCanvasId,
  canvas,
  setPanelId,
  context,
  currentCanvas,
}) => {
  const canvasContainer = useRef();
  const canvasRef = useRef();
  const fabricRef = useRef();

  useEffect(() => {
    if (!canvasRef.current) return;
    if (fabricRef.current) return;
    setCanvas(initCanvas(id));
  }, []);

  useEffect(() => {
    bindEvents();
  }, [currentCanvas]);

  const initCanvas = (CanvasId) => {
    return [
      ...canvas,
      (fabricRef.current = new fabric.Canvas(CanvasId, {
        height: 400,
        width: 600,
        backgroundColor: "#ffffff",
        id: CanvasId,
        selection: true,
        // preserveObjectStacking: true,
      })),
    ];
  };

  const canvasDetail = (e) => {
    setCanvasId(canvasRef?.current?.id);
  };

  // grid lines

  var events = {
    object: ["added", "moving", "moved", "scaled", "selected", "over"],
    mouse: ["down", "up", "moving", "over", "out"],
  };

  function bindEvents() {
    events.object.forEach((event) => {
      if (event === "added") {
        currentCanvas?.on(`object:${event}`, onObjectAdded);
      } else if (event === "moving") {
        currentCanvas?.on(`object:${event}`, onObjectMoving);
      } else if (event === "moved") {
        currentCanvas?.on(`object:${event}`, onObjectMoved);
      }
    });
  }

  function onObjectAdded(e) {
    // Add the smart guides around the object
    const obj = e.target;

    if (!(obj instanceof fabric.Rect) && !(obj instanceof fabric.Circle))
      return false;

    drawObjectGuides(obj);
  }

  function onObjectMoved(e) {
    // Add the smart guides around the object
    const obj = e.target;
    if (!(obj instanceof fabric.Rect) && !(obj instanceof fabric.Circle))
      return false;
    drawObjectGuides(obj);
  }

  function onObjectMoving(e) {
    // Add the smart guides around the object
    const obj = e.target;

    if (!(obj instanceof fabric.Rect) && !(obj instanceof fabric.Circle))
      return false;

    drawObjectGuides(obj);

    const objects = currentCanvas
      ?.getObjects()
      .filter((o) => o.type !== "line" && o !== obj);
    const matches = new Set();

    for (var i of objects) {
      for (var side in obj.guides) {
        var axis, newPos;

        switch (side) {
          case "right":
            axis = "left";
            newPos = i.guides[side][axis] - obj.getScaledWidth();
            break;
          case "bottom":
            axis = "top";
            newPos = i.guides[side][axis] - obj.getScaledHeight();
            break;
          case "centerX":
            axis = "left";
            newPos = i.guides[side][axis] - obj.getScaledWidth() / 2;
            break;
          case "centerY":
            axis = "top";
            newPos = i.guides[side][axis] - obj.getScaledHeight() / 2;
            break;
          default:
            axis = side;
            newPos = i.guides[side][axis];
            break;
        }

        if (inRange(obj.guides[side][axis], i.guides[side][axis])) {
          matches.add(side);
          snapObject(obj, axis, newPos);
        }

        if (side === "left") {
          if (inRange(obj.guides["left"][axis], i.guides["right"][axis])) {
            matches.add(side);
            snapObject(obj, axis, i.guides["right"][axis]);
          }
        } else if (side === "right") {
          if (inRange(obj.guides["right"][axis], i.guides["left"][axis])) {
            matches.add(side);
            snapObject(
              obj,
              axis,
              i.guides["left"][axis] - obj.getScaledWidth()
            );
          }
        } else if (side === "top") {
          if (inRange(obj.guides["top"][axis], i.guides["bottom"][axis])) {
            matches.add(side);
            snapObject(obj, axis, i.guides["bottom"][axis]);
          }
        } else if (side === "bottom") {
          if (inRange(obj.guides["bottom"][axis], i.guides["top"][axis])) {
            matches.add(side);
            snapObject(
              obj,
              axis,
              i.guides["top"][axis] - obj.getScaledHeight()
            );
          }
        } else if (side === "centerX") {
          if (inRange(obj.guides["centerX"][axis], i.guides["left"][axis])) {
            matches.add(side);
            snapObject(
              obj,
              axis,
              i.guides["left"][axis] - obj.getScaledWidth() / 2
            );
          } else if (
            inRange(obj.guides["centerX"][axis], i.guides["right"][axis])
          ) {
            matches.add(side);
            snapObject(
              obj,
              axis,
              i.guides["right"][axis] - obj.getScaledWidth() / 2
            );
          }
        } else if (side === "centerY") {
          if (inRange(obj.guides["centerY"][axis], i.guides["top"][axis])) {
            matches.add(side);
            snapObject(
              obj,
              axis,
              i.guides["top"][axis] - obj.getScaledHeight() / 2
            );
          } else if (
            inRange(obj.guides["centerY"][axis], i.guides["bottom"][axis])
          ) {
            matches.add(side);
            snapObject(
              obj,
              axis,
              i.guides["bottom"][axis] - obj.getScaledHeight() / 2
            );
          }
        }
      }
    }

    for (var k of matches) {
      obj.guides[k].set("opacity", 1);
    }

    obj.setCoords();
  }

  // If the 2 different coordinates are in range
  function inRange(a, b) {
    return Math.abs(a - b) <= 10;
  }

  function snapObject(obj, side, pos) {
    obj.set(side, pos);
    obj.setCoords();
    drawObjectGuides(obj);
  }

  function drawObjectGuides(obj) {
    const w = obj.getScaledWidth();
    const h = obj.getScaledHeight();
    drawGuide("top", obj.top, obj);
    drawGuide("left", obj.left, obj);
    drawGuide("centerX", obj.left + w / 2, obj);
    drawGuide("centerY", obj.top + h / 2, obj);
    drawGuide("right", obj.left + w, obj);
    drawGuide("bottom", obj.top + h, obj);
    obj.setCoords();
  }

  function drawGuide(side, pos, obj) {
    var ln;
    var color = "#ff408a";
    var lineProps = {
      left: 0,
      top: 0,
      evented: true,
      stroke: color,
      selectable: false,
      opacity: 0,
      width: 0.5,
    };

    switch (side) {
      case "top":
        ln = new fabric.Line(
          [0, 0, currentCanvas?.width, 0],
          Object.assign(lineProps, {
            left: 0,
            top: pos,
          })
        );
        break;
      case "bottom":
        ln = new fabric.Line(
          [0, 0, currentCanvas?.width, 0],
          Object.assign(lineProps, {
            left: 0,
            top: pos,
          })
        );
        break;

      case "centerY":
        ln = new fabric.Line(
          [0, 0, currentCanvas?.width, 0],
          Object.assign(lineProps, {
            left: 0,
            top: pos,
          })
        );
        break;

      case "left":
        ln = new fabric.Line(
          [0, canvas.height, 0, 0],
          Object.assign(lineProps, {
            left: pos,
            top: 0,
          })
        );
        break;
      case "right":
        ln = new fabric.Line(
          [0, currentCanvas?.height, 0, 0],
          Object.assign(lineProps, {
            left: pos,
            top: 0,
          })
        );
        break;
      case "centerX":
        ln = new fabric.Line(
          [0, currentCanvas?.height, 0, 0],
          Object.assign(lineProps, {
            left: pos,
            top: 0,
          })
        );
        break;
      default:
        break;
    }

    if (obj.guides[side]) {
      console.log(obj.guides[side] instanceof fabric.Line, "cc");
      currentCanvas?.remove(obj.guides[side]);
      delete obj.guides[side];
    }

    // remove the line
    currentCanvas?.on("mouse:up", function (e) {
      currentCanvas?.remove(obj.guides[side]);
    });

    obj.guides[side] = ln;
    currentCanvas?.add(ln).renderAll();
    console.log(ln, "ln");
  }

  // bindEvents();

  return (
    <>
      <div ref={canvasContainer} onClick={canvasDetail}>
        <canvas id={id} ref={canvasRef} />
      </div>
    </>
  );
};

export default Canvas;
