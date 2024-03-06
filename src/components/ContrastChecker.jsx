import { useState } from 'react';
import ContrastColorPicker from './ContrastColorPicker';
import Preview from './Preview';

const ContrastChecker = () => {
  const [text, setText] = useState('');
  const [textColor, setTextColor] = useState('#000000');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [contrastRatio, setContrastRatio] = useState(0);
  const [rating, setRating] = useState('');

  // Function to calculate contrast ratio
  const calculateContrastRatio = (color1, color2) => {
    const getLuminance = (color) => {
      const hex = color.replace('#', '');
      const r = parseInt(hex.substr(0, 2), 16) / 255;
      const g = parseInt(hex.substr(2, 2), 16) / 255;
      const b = parseInt(hex.substr(4, 2), 16) / 255;
      const luminance = (0.2126 * r) + (0.7152 * g) + (0.0722 * b);
      return luminance <= 0.03928 ? luminance / 12.92 : Math.pow((luminance + 0.055) / 1.055, 2.4);
    };

    const luminance1 = getLuminance(color1);
    const luminance2 = getLuminance(color2);

    const ratio = (Math.max(luminance1, luminance2) + 0.05) / (Math.min(luminance1, luminance2) + 0.05);
    return ratio.toFixed(2);
  };

  // Function to update contrast ratio and rating
  const updateContrast = () => {
    const ratio = calculateContrastRatio(textColor, bgColor);
    setContrastRatio(ratio);
    if (ratio >= 7) {
      setRating('AAA');
    } else if (ratio >= 4.5) {
      setRating('AA');
    } else if (ratio >= 3) {
      setRating('AA Large');
    } else {
      setRating('Fail');
    }
  };

  // Update contrast ratio and rating on color change
  const handleColorChange = () => {
    updateContrast();
  };

  // Update contrast ratio and rating on text change
  const handleTextChange = (e) => {
    setText(e.target.value);
    updateContrast();
  };

  return (
    <div className="contrast-checker">
      <div className="inputs">
        <div className="input-group">
          <label htmlFor="textColor">Text Color:</label>
          <input type="text" value={textColor} onChange={(e) => setTextColor(e.target.value)} />
          <ContrastColorPicker value={textColor} onChange={(e) => { setTextColor(e.target.value); handleColorChange(); }} />
        </div>
        <div className="input-group">
          <label htmlFor="bgColor">Background Color:</label>
          <input type="text" value={bgColor} onChange={(e) => setBgColor(e.target.value)} />
          <ContrastColorPicker value={bgColor} onChange={(e) => { setBgColor(e.target.value); handleColorChange(); }} />
        </div>
      </div>
      <div className="text-preview">
        
        <Preview text={text} textColor={textColor} bgColor={bgColor} />
      </div>
      <div className="rating">
        <div>Contrast Ratio: {contrastRatio}</div>
        <div>Rating: {rating}</div>
      </div>
    </div>
  );
};

export default ContrastChecker;


