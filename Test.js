import React, { Component } from "react";
import { fabric } from "fabric";
export default class App extends Component {
  componentDidMount() {
    this.clg();
  }
  clg = () => {
    var canvas = new fabric.Canvas("a", {
      preserveObjectStacking: true,
    });
    canvas.add(
      new fabric.Rect({
        left: 50,
        top: 50,
        height: 50,
        width: 50,
        fill: "red",
      })
    );
    canvas.add(
      new fabric.Rect({
        left: 70,
        top: 70,
        height: 50,
        width: 50,
        fill: "green",
      })
    );
    canvas.add(
      new fabric.Rect({
        left: 90,
        top: 90,
        height: 50,
        width: 50,
        fill: "blue",
      })
    );
    canvas.renderAll();
    this.setState({ canvas });
  };
  bringToFront = () => {
    var canvas = this.state.canvas;
    var activeObj = canvas.getActiveObject();
    console.log(canvas, "canvas");
    activeObj &&
      canvas.bringToFront(activeObj).discardActiveObject(activeObj).renderAll();
  };
  render() {
    return (
      <div>
        <canvas id="a" width="200" height="200" />
        <button onClick={this.bringToFront}>Bring to front</button>
      </div>
    );
  }
}
