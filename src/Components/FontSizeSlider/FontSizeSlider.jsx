import React from 'react';
import "./FontSizeSlider.scss"

const FontSizeSlider = ({ fontSize, onFontSizeChange }) => {
  return (
    <div> {/* Set the width to 100% */}
      <label htmlFor="fontSize" className="text-gray-600">Adjust Font Size:</label>
      <input
        className='fontSize-slider'
        type="range"
        id="fontSize"
        name="fontSize"
        min="12"
        max="24"
        value={fontSize}
        onChange={(e) => onFontSizeChange(parseInt(e.target.value))}
        style={{ width: "100%" }} ></input>
    </div>
  );
};

export default FontSizeSlider;