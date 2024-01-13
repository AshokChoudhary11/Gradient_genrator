import React, { useState } from "react";
import './index.css';
import { Plus, X } from "lucide-react";

const ColorSelector = () => {

  const [colors, setColors] = useState([
    { color: "#ffffff", enabled: true },
    { color: "#000000", enabled: true },
    { color: "#222222", enabled: false },
    { color: "#222222", enabled: false },
    { color: "#222222", enabled: false }
  ]);

  const handleColorChange = (index, newColor) => {
    const updatedColors = [...colors];
    updatedColors[index] = { color: newColor, enabled: true };
    setColors(updatedColors);
  };

  const canRemoveColor = colors.reduce((count, color) => count + (color.enabled ? 1 : 0), 0) > 2
  return (
    <div className="color_box">
      <div className="color_box_heading">Colors:</div>
      <div className="color_rectangles">
        {colors.map(({ color, enabled }, index) => (
          <>
            {enabled ?
              <div className="color_input_wrapper">
                <input
                  key={index}
                  value={color}
                  className="color_input"
                  type="color"
                  onChange={(e) => handleColorChange(index, e.target.value)}
                />
                {
                  canRemoveColor &&
                  <div className="color_input_remove_button" onClick={() => {
                    const newColor = colors;
                    newColor[index].enabled = false;
                    newColor.sort((a, b) => {
                      if (a.enabled && !b.enabled) {
                        return -1;
                      }
                      if (!a.enabled && b.enabled) {
                        return 1;
                      }
                      return 0;
                    })
                    setColors([...newColor])
                  }}>
                    <X />
                  </div>
                }
              </div>
              : colors[index - 1]?.enabled ?
                <div className="color_input_wrapper">
                  <div className="color_input_disabled" onClick={() => {
                    const newColors = colors;
                    colors[index].enabled = true;
                    setColors([...newColors])

                  }}>
                    <Plus color="#fff" />
                  </div>
                </div>
                :
                <div className="color_input_disabled_completly">
                </div>
            }
          </>
        ))}
      </div>
      {/* <input className="color_input" type="color" />
      <input className="color_input" type="color" />
      <input className="color_input" type="color" /> */}
    </div>
  );
};

export default ColorSelector;
