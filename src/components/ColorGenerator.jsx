import React, { useState } from 'react';
import chroma from 'chroma-js';

const ColorGenerator = () => {
  const [baseColor, setBaseColor] = useState('#FF0000'); // Default base color
  const [brightness, setBrightness] = useState(0);
  const [saturation, setSaturation] = useState(1);

  const handleColorChange = (e) => {
    setBaseColor(e.target.value);
  };

  const handleBrightnessChange = (value) => {
    setBrightness(value);
  };

  const handleSaturationChange = (value) => {
    setSaturation(value);
  };

  const generateTint = () => {
    // Generate tint based on brightness and saturation
    return chroma(baseColor).brighten(brightness).saturate(saturation).hex();
  };

  const generateShade = () => {
    // Generate shade based on brightness and saturation
    return chroma(baseColor).darken(brightness).desaturate(saturation).hex();
  };

  return (
    <div>
      <input type="color" value={baseColor} onChange={handleColorChange} />
      <input
        type="range"
        min="-1"
        max="1"
        step="0.1"
        value={brightness}
        onChange={(e) => handleBrightnessChange(parseFloat(e.target.value))}
      />
      <input
        type="range"
        min="0"
        max="2"
        step="0.1"
        value={saturation}
        onChange={(e) => handleSaturationChange(parseFloat(e.target.value))}
      />
      <div style={{ backgroundColor: generateTint(), width: '50px', height: '50px' }} />
      <div style={{ backgroundColor: generateShade(), width: '50px', height: '50px' }} />
    </div>
  );
};

export default ColorGenerator;
