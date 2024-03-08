import React, { useState, useEffect } from 'react';
import chroma from 'chroma-js';

function Test() {
  const [baseColor, setBaseColor] = useState('#007bff'); // Initial base color
  const [tintColors, setTintColors] = useState([]);

  // Function to generate tint shades
  const generateTints = (color, levels) => {
    if (!color) return [];

    const tints = Array.from({ length: levels }, (_, i) =>
      chroma(color).set('hsl.l', `+${(i + 1) * 10}%`).hex()
    );

    return tints;
  };

  // Function to generate tint shades and update state
  const handleGenerateTints = () => {
    const tints = generateTints(baseColor, 5); // Generate 5 tint shades
    setTintColors(tints);
  };

  // Function to handle base color change
  const handleColorChange = (e) => {
    setBaseColor(e.target.value);
  };

  // Effect to generate tints for the initial base color on component load
  useEffect(() => {
    handleGenerateTints();
  }, []); // Run once on component mount

  return (
    <div>
      <input type="color" value={baseColor} onChange={handleColorChange} />
      <button onClick={handleGenerateTints}>Generate Tints</button>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            backgroundColor: baseColor,
            width: '50px',
            height: '50px',
            margin: '5px',
          }}
        ></div>
        <div style={{ marginLeft: '10px' }}>
          <strong>Base Color</strong>: {baseColor}
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        {tintColors.map((color, index) => (
          <div
            key={index}
            style={{
              backgroundColor: color,
              width: '50px',
              height: '50px',
              margin: '5px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {color}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Test;
