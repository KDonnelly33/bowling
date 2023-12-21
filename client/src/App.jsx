import { useState } from "react";

function App() {
  const [frames, setFrames] = useState(Array(10).fill([null, null]));
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [currentRoll, setCurrentRoll] = useState(0);

  const renderRoll = (roll) => {
    switch (roll) {
      case 10:
        return "X";
      case 0:
        return "-";
      default:
        return roll;
    }
  };

  const totalScore = () => {
    // Add logic to calculate the total score
  };

  // function to handle roll click
  const handleRollClick = (pins) => {
    console.log(pins);
    const currentFrame = frames[currentFrameIndex];
    const previousRoll = currentFrame[currentRoll - 1];

    // validate roll to not exceed 10 pins
    if (currentRoll === 1 && previousRoll !== 10 && previousRoll + pins > 10) {
      alert("Invalid roll");
      return;
    }

    setFrames((previousFrames) => {
      const updatedFrames = [...previousFrames];
      const copyFrame = [...updatedFrames[currentFrameIndex]];
      copyFrame[currentRoll] = pins;
      updatedFrames[currentFrameIndex] = copyFrame;
      return updatedFrames;
    });

    // logic for advancing to the next frame or roll depending on rolls
    if (currentFrameIndex === 9) {
      if (currentRoll === 0 || pins === 10) {
        setCurrentRoll(1);
      } else if (currentRoll === 1 && currentFrame[0] + pins === 10) {
        setCurrentRoll(2);
      } else {
        setCurrentRoll((previousRoll) => previousRoll + 1);
      }
    }
  };

  return (
    <>
      <h1>Bowling Scoreboard</h1>
      <div>
        {frames.map((frame, frameIndex) => (
          <div key={frameIndex}>
            <h2>{frameIndex + 1}</h2>
            {frame.map((roll, rollIndex) => (
              <div key={rollIndex}>
                <h3>{renderRoll(roll)}</h3>
              </div>
            ))}
            {frameIndex === 9 && frame.length < 3 && (
              <>
                <div>
                  {frameIndex === 9 ? "-" : renderRoll(frame[1])}
                </div>
                <div>
                  {frameIndex === 9 && frame.length === 3 && (
                    <div>
                      {renderRoll(frame[2])}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <div>
        total: {totalScore()}
      </div>
      <div>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((pins) => (
          <button key={pins} onClick={() => handleRollClick(pins)}>
            {pins}
          </button>
        ))}
      </div>
    </>
  );
}

export default App;
