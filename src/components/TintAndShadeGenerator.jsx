import { useContext } from 'react';
import { useColor } from '../context/ColorContext';
import ColorPicker from './ColorPicker';
import ContrastChecker from './ContrastChecker';
import ButtonComponent from './Button';
import swal from 'sweetalert';
import AnalogousColors from './AnalogousColors';
import Complimentary from './Complimentary';

function TintAndShadeGenerator() {
  const { baseColor, tints, shades, handleColorChange, analogousColors, complementaryColor } = useColor()

  const copyToClipboard = (color) => {
    navigator.clipboard.writeText(color);
    swal("Good job!", "color copied", "success");
  };

  return (
    <div className='p-16 flex flex-col items-center justify-center '>
      <h1 className='text-4xl font-bold text-center'>ShadeSmith</h1>
      <p className='text-center mt-4 text-2xl'>Blend Shades, Tints, and Magic</p>
      {/* Color Picker */}
      <ColorPicker selectedColor={baseColor} handleColorChange={handleColorChange} />
      {/* Display Analogous Colors */}

      {/* Display Tints */}
      <div className='mt-8'>
        <h2 className='font-semibold text-2xl'>Tints:</h2>
        <p className='text-xl font-semibold'>Tint refers to shades of a color as it's mixed with white.</p>
        <div className="flex flex-row mt-4 gap-1/10">
          {tints.map((color, index) => (
            (index + 1) % 2 !== 0 ? (<div key={index} className='hover cursor-pointer  text-neutral-950 text-center pt-9' style={{ backgroundColor: color, width: '100px', minHeight: '100px', }} onClick={() => copyToClipboard(color)}>{color}
              {/* <button onClick={() => copyToClipboard(color)} className='hidden hover:block'>Copy</button> */}
            </div>) : null

          ))}
        </div>
      </div>
      {/* Display Shades */}
      <div className='mt-8'>
        <h2 className='font-semibold text-2xl'>Shades:</h2>
        <p className='text-xl font-semibold'>Shades of the color as the color is mixed with black.</p>
        <div className="flex flex-row mt-4 ">
          {shades.map((color, index) => (
            (index + 1) % 2 !== 0 ? (<div key={index} className=' hover cursor-pointer text-white text-center pt-9' style={{ backgroundColor: color, width: '100px', minHeight: '100px', color: 'white ' }} onClick={() => copyToClipboard(color)}>
              {color}
            </div>) : null
          ))}
        </div>
      </div>
      <p className='font-medium text-xl mt-4'>Simply click any of the color shades to have the hex value copied to your clipboard.</p>
      {/* <ButtonComponent id={baseColor} /> */}
      <div className='w-full px-12'>
        <AnalogousColors analogousColors={analogousColors} />
        {/* <Complimentary complementaryColor={complementaryColor}/> */}
      </div>
      <ContrastChecker baseColor={baseColor} />
    </div>
  );
}

export default TintAndShadeGenerator;
