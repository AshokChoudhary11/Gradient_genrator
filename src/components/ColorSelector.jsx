import React, { useState } from "react";

const ColorSelector = () => {
  const [colors, setColors] = useState(["#222222", "#b84747"]);

  const handleColorChange = (index, newColor) => {
    const updatedColors = [...colors];
    updatedColors[index] = newColor;
    setColors(updatedColors);
  };
  return (
    <div className="color_box">
      <div className="color_box_heading">Colors:</div>
      <div className="color_rectangles">
        {colors.map((color, index) => (
          <input
            key={index}
            value={color}
            className="color_input"
            type="color"
            onChange={(e) => handleColorChange(index, e.target.value)}
          />
        ))}
        <input className="color_input" type="color" />
      </div>
      {/* <input className="color_input" type="color" />
      <input className="color_input" type="color" />
      <input className="color_input" type="color" /> */}
    </div>
  );
};

export default ColorSelector;
