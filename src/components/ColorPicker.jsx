export default function ColorPicker({ handleColorChange, selectedColor }) {
    
    const handleCopy = () => {
        // Copy the selected color to the clipboard
        navigator.clipboard.writeText(selectedColor);
      };
    
    return (
      <div>
        <input 
          type="color" 
          value={selectedColor} 
          onChange={(e) => handleColorChange(e.target.value)} 
        />
        {/* <input 
          type="text" 
          value={selectedColor} 
          onChange={(e) => handleColorChange(e.target.value)} 
        /> */}
        <button onClick={handleCopy}>Copy</button>
      </div>
    );
}
