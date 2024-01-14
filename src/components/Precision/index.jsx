import React, { useState } from 'react';
import './index.css'
import { UPDATE_GRIDENT_PRECISION } from "../../constants";

import { useDispatch, useSelector } from 'react-redux';


export const Precision = () => {
    const dispatch = useDispatch();

    const selectPrecision = (precision) => {
        dispatch({ type: UPDATE_GRIDENT_PRECISION, value: precision })
    }
    const precision = useSelector(state => state.precision);

    return <div className="prevision_slide_wrapper">
        <div className='prevision_slider_heading_wrapper'>
            <div className='prevision_slider_heading'>Precision:</div>
            <div>{precision}</div>
        </div>
        <input min="0" max="20" type="range" className='prevision_slider' value={precision} onChange={(e) => selectPrecision(parseInt(e.target.value))} />
    </div>
} 