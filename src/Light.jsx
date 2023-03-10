import React from "react";

const Light = ({ color, isOn, setColorIndex, colorIndex }) => {
  return (
    <div
      className="light"
      style={{ backgroundColor: color, opacity: isOn ? 1 : 0.25 }}
      onClick={() => {
        setColorIndex(colorIndex);
      }}
    />
  );
};

export default Light;
