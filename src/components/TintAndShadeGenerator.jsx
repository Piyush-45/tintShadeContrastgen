// TintAndShadeGenerator.jsx
import { useState, useEffect } from 'react';
import chroma from 'chroma-js';
// import ColorPicker from './ColorPicker';
import "./tint.css"
import ColorPicker from './ColorPicker';
import ContrastChecker from './ContrastChecker';

function TintAndShadeGenerator() {
  const [baseColor, setBaseColor] = useState('#ff0000'); // Initial base color
  const [levels, setLevels] = useState(5); // Number of tint and shade levels
  const [tints, setTints] = useState([]);
  const [shades, setShades] = useState([]);
  useEffect(() => {
    // Generate tints and shades when base color or levels change

    if (!baseColor || baseColor === '#') {
      setTints(generateTints('#ff0000', levels));
      setShades(generateShades('#ff0000', levels));
    } else {
      setTints(generateTints(baseColor, levels));
      setShades(generateShades(baseColor, levels));
    }
  }, [baseColor, levels]);

  // Function to generate tints based on the selected base color and levels
  const generateTints = (color, levels) => {
    if (!color) return []; 
    return Array.from({ length: levels }, (_, i) =>
      chroma(color).brighten((i + 1) / levels).hex()
    );
  };

  // Function to generate shades based on the selected base color and levels
  const generateShades = (color, levels) => {
     if (!color) return []; 
    return Array.from({ length: levels }, (_, i) =>
      chroma(color).darken((i + 1) / levels).hex()
    );
  };

  // Function to handle color change from color picker
  const handleColorChange = (color) => {
    // console.log("handleColorChange")
    setBaseColor(color);
  };

  // Function to handle level change for tints and shades
  const handleLevelChange = (e) => {
    setLevels(parseInt(e.target.value));
  };
  const copyToClipboard = (color) => {
    navigator.clipboard.writeText(color);
  };

  return (
    <div className='mainCont'>
      {/* Color Picker */}
      <ColorPicker selectedColor={baseColor} handleColorChange={handleColorChange} />

      {/* Number of Levels Input */}
      <label>
        Number of Levels:
        <input
          type="number"
          min="1"
          value={levels}
          onChange={handleLevelChange}
        />
      </label>

      {/* Display Tints */}
      <div className='tintContainer'>
        <h2>Tints:</h2>
        <div className="tintBoxesCont">
        {tints.map((color, index) => (
          <div key={index} className='tintBox' style={{ backgroundColor: color, width:'100px', minHeight:'100px', }}>
            Tint {index + 1}
            <button onClick={() => copyToClipboard(color)}>Copy</button>
          </div>
        ))}
        </div>
      </div>

      {/* Display Shades */}
      <div className='tintContainer'>
        <h2>Shades:</h2>
        <div className="tintBoxesCont">
        {shades.map((color, index) => (
          <div key={index} className='tintBox' style={{ backgroundColor: color, width:'100px', minHeight:'100px', }}>
            Tint {index + 1}
            <button onClick={() => copyToClipboard(color)}>Copy</button>
          </div>
        ))}
        </div>
      </div>
      <ContrastChecker />

    </div>
  );
}

export default TintAndShadeGenerator;
