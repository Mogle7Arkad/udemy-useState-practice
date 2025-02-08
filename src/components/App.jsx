import React from "react";

function App() {

  const now = new Date().toLocaleTimeString();

  return (
    <div className="container">
      <h1>TIME</h1>
      <button>Get Time</button>
    </div>
  );
}

export default App;
