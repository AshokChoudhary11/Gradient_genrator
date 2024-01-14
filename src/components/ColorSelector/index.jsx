import React from "react";
import './index.css';
import { Plus, X } from "lucide-react";
import { UPDATE_GRIDENT_COLORS } from "../../constants";
import { useDispatch, useSelector } from "react-redux";

const ColorSelector = () => {
  const dispatch = useDispatch()
  const setColors = (colors) => {
    dispatch({ type: UPDATE_GRIDENT_COLORS, value: colors })
  }
  const colors = useSelector(state => state.colors)


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
              <div className="color_input_wrapper" key={index}>
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
                <div className="color_input_wrapper" key={index}>
                  <div className="color_input_disabled" onClick={() => {
                    const newColors = colors;
                    colors[index].enabled = true;
                    setColors([...newColors])

                  }}>
                    <Plus color="#fff" />
                  </div>
                </div>
                :
                <div className="color_input_disabled_completly" key={index}>
                </div>
            }
          </>
        ))}
      </div>

    </div>
  );
};

export default ColorSelector;
