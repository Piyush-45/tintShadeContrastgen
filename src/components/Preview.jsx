const Preview = ({ text, textColor, bgColor }) => {
    return (
      <div style={{ color: textColor, backgroundColor: bgColor, height: '300px', width: '40vh', }} >
        {/* {text} */}
  
        <p style={{ fontSize: '20px', padding: 10 }}>
        Good design is like a refrigerator—when it works, no one notices, but when it doesn't, it sure stinks.
        </p>
        <h3 style={{ fontSize: '20px', padding: 10 }}>
          In the world of design, there is no such thing as 'too much contrast' - said no designer ever.
        </h3>
      </div>
    );
  };

  export default Preview