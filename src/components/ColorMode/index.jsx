import React from "react";
import './index.css'

const ColorMode = () => {
  return (
    <div className="color_mode_box">
      <div className="color_mode_heading">Color Mode:</div>
      <div className="all_color_mode_button">
        <button className="color_mode_button">LRGB</button>
        <button className="color_mode_button">HSL</button>
        <button className="color_mode_button">HSV</button>
        <button className="color_mode_button">HCL</button>
        <button className="color_mode_button">LAB</button>
      </div>
    </div>
  );
};

export default ColorMode;
