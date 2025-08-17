import "./App.css";
import React from "react";
import Player from "./components/Player";
import players from "./players";

// Main App component - root of the application

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyItems: "center",
        gap: "40px",
        marginTop: "40px",
      }}
    >
      {players.map((x, idx) => (
        <Player key={idx} playerss={x} />
      ))}
    </div>
  );
}

export default App;
