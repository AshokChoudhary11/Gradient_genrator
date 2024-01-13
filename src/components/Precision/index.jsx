import React, { useState } from 'react';
import './index.css'

export const Precision = () => {
    const [rangeValue, setRangeValue] = useState(2)
    return <div className="prevision_slide_wrapper">
        <div className='prevision_slider_heading_wrapper'>
            <div className='prevision_slider_heading'>Precision:</div>
            <div>{rangeValue}</div>
        </div>
        <input min="0" max="20" type="range" className='prevision_slider' value={rangeValue} onChange={(e) => { setRangeValue(e.target.value) }} />
    </div>
} 