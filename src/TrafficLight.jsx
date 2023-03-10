import Light from "./Light";
import React, { useState, useEffect, useCallback } from "react";

const TrafficLight = ({ initialValue }) => {
  const [colorIndex, setColorIndex] = useState(initialValue);

  let timer;
  useEffect(() => {
    timerStart();
  }, [colorIndex]);

  const timerStart = useCallback(() => {
    timer = setTimeout(() => {
      setColorIndex((colorIndex + 1) % 3);
    }, 2000);
  },[colorIndex]);

  const restartSequence = (colorIndex) => {
    clearTimeout(timer);
    setColorIndex(colorIndex);   
  };

  return (
    <>
    <div data-testid="textHeader">Traffic Light</div>
    
    <div className="traffic-light">
      <Light
        color="#f00"
        isOn={colorIndex === 0}
        setColorIndex={restartSequence}
        colorIndex={0}
      />
      <Light
        color="#ff0"
        isOn={colorIndex === 1}
        setColorIndex={restartSequence}
        colorIndex={1}
      />
      <Light
        color="#0c0"
        isOn={colorIndex === 2}
        setColorIndex={restartSequence}
        colorIndex={2}
      />
    </div>
    </>
  );
};

export default TrafficLight;
