import React, { useState } from "react";

function App() {
  setInterval(latestTime, 1000);

  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now)

  function latestTime(){

    const newTime = new Date().toLocaleTimeString();
    setTime(newTime)

  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={latestTime}>Get Time</button>
    </div>
  );
}

export default App;
