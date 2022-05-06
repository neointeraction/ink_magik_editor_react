import { fabric } from "fabric";

export const keyboardEvents = (canvas) => {
  const STEP = 10;

  var Direction = {
    LEFT: 0,
    UP: 1,
    RIGHT: 2,
    DOWN: 3,
  };
  let movement = fabric.util.addListener(
    document.body,
    "keydown",
    function (options) {
      if (options.repeat) {
        return;
      }
      var key = options.which || options.keyCode; // key detection
      //   console.log(options, "options.keyCode");
      if (key === 37) {
        // handle Left key
        moveSelected(Direction.LEFT);
      } else if (key === 38) {
        // handle Up key
        moveSelected(Direction.UP);
      } else if (key === 39) {
        // handle Right key
        moveSelected(Direction.RIGHT);
      } else if (key === 40) {
        // handle Down key
        moveSelected(Direction.DOWN);
      } else if (key === 46) {
        // handle delete key
        canvas?.getActiveObjects().forEach((obj) => {
          canvas.remove(obj);
        });
        canvas?.discardActiveObject().renderAll();
      } else if (options.ctrlKey && options.key === "z") {
        //   handle undo
        console.log("undo");
      } else if (options.ctrlKey && options.key === "y") {
        //   handle redo
        console.log("redo");
      } else if (options.ctrlKey && options.key === "c") {
        //   handle duplicateobject

        copyObject();
        console.log("copy");
      } else if (options.ctrlKey && options.key === "v") {
        //   handle duplicateobject
        pasteObject();
        console.log("paste");
      }
    }
  );

  var copiedObject;
  var copiedObjects = [];
  var object;

  var activeGroup =
    canvas?.getActiveObject() === null
      ? canvas?.getActiveGroup()
      : canvas?.getActiveObject();

  function copyObject() {
    if (canvas?.getActiveObject()) {
      object = fabric.util.object.clone(canvas?.getActiveObject());
      object.set("top", object.top + 5);
      object.set("left", object.left + 5);
      copiedObject = object;
      //   copiedObjects = new Array();
      console.log(copiedObject, "copiedObject1");
    } else if (activeGroup) {
      for (var i in activeGroup.objects) {
        object = fabric.util.object.clone(activeGroup.objects[i]);
        object.set("top", object.top + 5);
        object.set("left", object.left + 5);
        copiedObjects[i] = object;
      }
    }
  }

  function pasteObject() {
    if (copiedObject) {
      //   object = fabric.util.object.clone(copiedObject);
      //   object.set("top", object.top + 5);
      //   object.set("left", object.left + 5);
      //   copiedObject = object;
      console.log(copiedObject, "copiedObject1");
      canvas?.add(copiedObject);
      canvas?.renderAll();
    } else if (copiedObjects.length > 0) {
      for (var i in copiedObjects) {
        canvas?.add(copiedObjects[i]);
      }
    }
  }

  //   move objects from keyboard function

  function moveSelected(direction) {
    var activeObject = canvas?.getActiveObject();
    var activeGroup =
      canvas?.getActiveObject() == null
        ? canvas?.getActiveGroup()
        : canvas?.getActiveObject();

    if (activeObject) {
      switch (direction) {
        case Direction.LEFT:
          activeObject.set("left", activeObject.left - STEP);
          break;
        case Direction.UP:
          activeObject.set("top", activeObject.top - STEP);
          break;
        case Direction.RIGHT:
          activeObject.set("left", activeObject.left + STEP);
          break;
        case Direction.DOWN:
          activeObject.set("top", activeObject.top + STEP);
          break;
      }
      activeObject.setCoords();
      canvas.renderAll();
      console.log("selected objects was moved");
    } else if (activeGroup) {
      switch (direction) {
        case Direction.LEFT:
          activeObject.set("left", activeObject.left - STEP);
          break;
        case Direction.UP:
          activeObject.set("top", activeObject.top - STEP);
          break;
        case Direction.RIGHT:
          activeObject.set("left", activeObject.left + STEP);
          break;
        case Direction.DOWN:
          activeObject.set("top", activeObject.top + STEP);
          break;
      }
      activeGroup.setCoords();
      canvas.renderAll();
      console.log("selected group was moved");
    } else {
      console.log("no object selected");
    }
  }
  //   move objects from keyboard function end
  return movement;
};
