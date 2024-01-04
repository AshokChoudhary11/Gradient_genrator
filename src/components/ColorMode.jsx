import React from "react";

const ColorMode = () => {
  return (
    <div className="color_modal_box">
      <div>Colors:</div>
      <div className="all_color_modal_button">
        <button className="color_modal_button">LRGB</button>
        <button className="color_modal_button">HSL</button>
        <button className="color_modal_button">HSV</button>
        <button className="color_modal_button">HCL</button>
        <button className="color_modal_button">LAB</button>
      </div>
    </div>
  );
};

export default ColorMode;
