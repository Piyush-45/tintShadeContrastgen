export default function ColorPicker({ handleColorChange, selectedColor }) {
  const handleCopy = () => {
    // Copy the selected color to the clipboard
    navigator.clipboard.writeText(selectedColor);
  };

  return (
    <div className="mt-10 flex items-center justify-center gap-4 colorInput border border-blue-500 p-2">
      <div className="">
        <input
          type="color"
          value={selectedColor}
          onChange={(e) => handleColorChange(e.target.value)}
          className="w-10 h-10 border-none outline-none"
        />
      </div>
      <span className="border border-blue-500">{selectedColor}</span>
      <button onClick={handleCopy}>Copy</button>
    </div>
  );
}
