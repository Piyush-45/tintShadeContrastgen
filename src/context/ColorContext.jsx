// // ColorContext.js
// import React, { createContext, useState, useEffect, useContext } from 'react';
// import chroma from 'chroma-js';

// const ColorContext = createContext();

// const ColorProvider = ({ children }) => {
//   const [baseColor, setBaseColor] = useState('#ff0000');
//   const [levels, setLevels] = useState(20);
//   const [tints, setTints] = useState([]);
//   const [shades, setShades] = useState([]);
//   const [analogousColors, setAnalogousColors] = useState([]);
//   const [complementaryColor, setComplementaryColor] = useState('');

//   useEffect(() => {
//     if (!baseColor || baseColor === '#') {
//       setTints(generateTints('#ff0000', levels));
//       setShades(generateShades('#ff0000', levels));
//     } else {
//       setTints(generateTints(baseColor, levels));
//       setShades(generateShades(baseColor, levels));
//     }
//     setAnalogousColors(generateAnalogousColors(baseColor));
//     setComplementaryColor(generateComplementaryColor(baseColor));
//   }, [baseColor, levels]);

//   const generateTints = (color, levels) => {
//     if (!color) return [];
//     return Array.from({ length: levels }, (_, i) =>
//       chroma(color).brighten((i + 1) * 0.21).hex()
//     );
//   };

//   const generateShades = (color, levels) => {
//     if (!color) return [];
//     return Array.from({ length: levels }, (_, i) =>
//       chroma(color).darken((i + 1) * 0.12).hex()
//     );
//   };

//   const generateAnalogousColors = (color) => {
//     if (!color) return [];
//     const analogousColors = [];
//     const baseColorLab = chroma(color).lab();
//     for (let i = -2; i <= 2; i++) {
//       const shiftedColor = chroma.lab(baseColorLab[0], baseColorLab[1] + i * 10, baseColorLab[2]);
//       analogousColors.push(shiftedColor.hex());
//     }
//     return analogousColors;
//   };

//   const generateComplementaryColor = (color) => {
//     if (!color) return '';
//     return chroma(color).set('hsl.h', (chroma(color).get('hsl.h') + 180) % 360).hex();
//   };

//   const handleColorChange = (color) => {
//     setBaseColor(color);
//   };

//   const handleLevelChange = (level) => {
//     setLevels(parseInt(level));
//   };

//   return (
//     <ColorContext.Provider
//       value={{ baseColor, tints, shades, analogousColors, complementaryColor, handleColorChange, handleLevelChange }}
//     > {children}
//     </ColorContext.Provider>
//   );
// };

// const useColor = () => {
//   const context = useContext(ColorContext);
//   if (!context) {
//     throw new Error('useColor must be used within a ColorProvider');
//   }
//   return context;
// };

// export { ColorProvider, useColor };


// ColorContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import { tint, shade } from 'polished';

const ColorContext = createContext();

const ColorProvider = ({ children }) => {
  const [baseColor, setBaseColor] = useState('#ff0000');
  const [levels, setLevels] = useState(20);
  const [tints, setTints] = useState([]);
  const [shades, setShades] = useState([]);
  const [analogousColors, setAnalogousColors] = useState([]);
  const [complementaryColor, setComplementaryColor] = useState('');

  useEffect(() => {
    if (!baseColor || baseColor === '#') {
      setTints(generateTints('#ff0000', levels));
      setShades(generateShades('#ff0000', levels));
    } else {
      setTints(generateTints(baseColor, levels));
      setShades(generateShades(baseColor, levels));
    }
    setAnalogousColors(generateAnalogousColors(baseColor));
    setComplementaryColor(generateComplementaryColor(baseColor));
  }, [baseColor, levels]);

  const generateTints = (color, levels) => {
    if (!color) return [];
    const tintsArray = [];
    for (let i = 1; i <= levels; i++) {
      tintsArray.push(tint((i / levels), color));
    }
    return tintsArray;
  };

  const generateShades = (color, levels) => {
    if (!color) return [];
    const shadesArray = [];
    for (let i = 1; i <= levels; i++) {
      shadesArray.push(shade((i / levels), color));
    }
    return shadesArray;
  };

  const generateAnalogousColors = (color) => {
    if (!color) return [];
    // Implement your analogous color generation logic here
    return [];
  };

  const generateComplementaryColor = (color) => {
    if (!color) return '';
    // Implement your complementary color generation logic here
    return '';
  };

  const handleColorChange = (color) => {
    setBaseColor(color);
  };

  const handleLevelChange = (level) => {
    setLevels(parseInt(level));
  };

  return (
    <ColorContext.Provider
      value={{ baseColor, tints, shades, analogousColors, complementaryColor, handleColorChange, handleLevelChange }}
    > 
      {children}
    </ColorContext.Provider>
  );
};

const useColor = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error('useColor must be used within a ColorProvider');
  }
  return context;
};

export { ColorProvider, useColor };
