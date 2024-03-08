const ContrastColorPicker = ({ value, onChange }) => {
    return <input type="color" value={value} onChange={onChange} className="outline-none border-none" />;
};

export default ContrastColorPicker