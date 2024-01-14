import React from "react";
import './index.css'
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_GRIDENT_COLOR_MODE } from '../../constants'

const ColorMode = () => {
  const dispatch = useDispatch();
  const selectColorMode = (colorMode) => {
    dispatch({ type: UPDATE_GRIDENT_COLOR_MODE, value: colorMode })
  }
  const colorMode = useSelector(state => state.colorMode)


  return (
    <div className="color_mode_box">
      <div className="color_mode_heading">Color Mode:</div> {colorMode}
      <div className="all_color_mode_button">
        <button className="color_mode_button" onClick={() => selectColorMode('LRGB')}>LRGB</button>
        <button className="color_mode_button" onClick={() => selectColorMode('HSL')}>HSL</button>
        <button className="color_mode_button" onClick={() => selectColorMode('HSV')}>HSV</button>
        <button className="color_mode_button" onClick={() => selectColorMode('HCL')}>HCL</button>
        <button className="color_mode_button" onClick={() => selectColorMode('LAB')}>LAB</button>
      </div>
    </div>
  );
};

export default ColorMode;
