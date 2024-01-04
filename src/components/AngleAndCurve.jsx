import React, { useState } from "react";

const AngleAndCurve = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [angle, setAngle] = useState(0);

  const startDrag = () => {
    setIsDragging(true);
  };
  const handleDrag = (event) => {
    if (isDragging) {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;

      const newAngle = Math.atan2(y, x) * (180 / Math.PI);
      setAngle(newAngle < 0 ? newAngle + 360 : newAngle);
    }
  };

  const stopDrag = () => {
    setIsDragging(false);
  };
  return (
    <div className="angle_curve_container">
      <div className="angle_container">
        <div className="angle_container_heading">
          <span className="angle_heading">Angle:</span>
          <span>25deg</span>
        </div>
        <div
          className="gradient-selector"
          onMouseDown={startDrag}
          onMouseMove={handleDrag}
          onMouseUp={stopDrag}
        >
          <div
            className="needle"
            style={{ transform: `rotate(${angle - 270}deg)` }}
          ></div>
          <div className="center"></div>
        </div>
      </div>
      <div className="easing_curve">
        <div className="easing_curve_heading">Easing Curve:</div>
        <div className="gradient-generator">
          <div className="gradient"></div>
          <div className="buttons">
            <button className="Easing_curve_buttons">Linear</button>
            <button className="Easing_curve_buttons">Ease</button>
            <button className="Easing_curve_buttons">Ease</button>
          </div>
        </div>
        {/* <div>
          <button>Linear</button>
          <button>Ease</button>
          <button>Fun</button>
        </div> */}
      </div>
    </div>
  );
};

export default AngleAndCurve;
