import { useState } from "react";

function App() {
  const [frames, setFrames] = useState(Array(10).fill([null, null]));
  const renderRoll = (roll) => {
    switch (roll) {
      case 10:
        return "X";
      case 0:
        return "-";
      default:
        return roll;
    }
  }
  const totalScore = () => {

  }
  const handleRollClick = (pins) => {
    console.log(pins);
  }
  return (
    <>
      <h1>Bowling Scoreboard</h1>
      <div>
        {frames.map((frame, frameIndex) => {
          return (
            <div key={frameIndex}>
              <h2>{frameIndex + 1}</h2>
              {frame.map((roll, rollIndex) => {
                return (
                  <div key={rollIndex}>
                    <h3>{renderRoll(roll)}</h3>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div>
        total: {totalScore()}
      </div>
      <div>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "/", "X"].map((pins) => {
          return (
            <button key={pins} onClick={() => handleRollClick(pins)}>
              {pins}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default App;
