import React, { useState } from "react";

function App() {

  const now = new Date().toLocaleTimeString();

  function latestTime(){
    const [time, newTime] = useState

  }

  return (
    <div className="container">
      <h1>{now}</h1>
      <button onClick={latestTime}>Get Time</button>
    </div>
  );
}

export default App;
