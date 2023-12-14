

function App() { 
  const frames = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <>
      {frames.map((frame, index) => (
        <div key={index}>
          <h2>{frame}</h2>
          {index === 9 ? (  
            <>
            <div>
            <input />
            <input />
            <input />
            <button>Submit</button>
            </div>
            <p>score</p>
            </>
          ) : (
            <>
            <div>
             <input />
              <input />
              <button>Submit</button>
            </div>
            <p>score</p>
            </>
          )}
        </div>
      ))}
    </>
  );
}

export default App;