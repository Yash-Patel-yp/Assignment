import React, { useEffect, useState } from "react";

function Counter({ id, onDelete }) {
  const [count, setCount] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [countDirection, setCountDirection] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isPaused) {
        setCount((prevCount) => prevCount + countDirection);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isPaused, countDirection]);

  const togglePause = () => {
    setIsPaused((prevPaused) => !prevPaused);
  };

  const toggleDirection = () => {
    setCountDirection((prevDirection) => -prevDirection);
  };

  return (
    <div className="box">
      <p className="number-display">
        <h2>{count}</h2>
      </p>
      <div className="button-container">
        <button onClick={togglePause}>{isPaused ? "Play" : "Pause"}</button>
        <button onClick={toggleDirection}>
          {countDirection === 1 ? "Down" : "Up"}
        </button>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  );
}

export default Counter;
