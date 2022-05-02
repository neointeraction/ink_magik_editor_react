import React from "react";
import { CompactPicker } from "react-color";

const ColorPicker = ({ color, onChangeComplete }) => {
  return (
    <div>
      <CompactPicker color={color} onChangeComplete={onChangeComplete} />
    </div>
  );
};

export default ColorPicker;
