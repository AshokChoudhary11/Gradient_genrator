import React, { useState } from "react";
import './index.css'
import { UPDATE_GRIDENT_ANGLE } from "../../constants";
import { useDispatch, useSelector } from "react-redux";


export const Angle = () => {
    const [isDragging, setIsDragging] = useState(false);
    // const [newAngle, setAngle] = useState(0);

    const dispatch = useDispatch();

    const selectPrecision = (angle) => {
        dispatch({ type: UPDATE_GRIDENT_ANGLE, value: angle })
    }
    const angle = useSelector(state => state.angle);

    const startDrag = () => {
        setIsDragging(true);
    };
    const handleDrag = (event) => {
        if (isDragging) {
            const rect = event.currentTarget.getBoundingClientRect();
            // console.log(rect, event.clientX, event.clientY, "logggg")
            const x = event.clientX - rect.left - rect.width / 2;
            const y = event.clientY - rect.top - rect.height / 2;

            const newAngle = Math.atan2(y, x) * (180 / Math.PI);
            selectPrecision(newAngle)
            // setAngle(newAngle)
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
                    <span>{
                        parseInt(angle)
                    } deg</span>

                </div>
                <div
                    className="gradient-selector"
                    onMouseDown={startDrag}
                    onMouseMove={handleDrag}
                    onMouseUp={stopDrag}
                >
                    <div
                        className="needle"
                        style={{ transform: `translateX(-50%) rotate(${angle}deg) translateY(-50%)` }}
                    >

                    </div>
                    <div className="center"></div>
                </div>
            </div>
        </div >
    );
};

