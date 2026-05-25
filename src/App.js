import React, { useState } from "react";
import { songs } from "./data/songs";

export default function App() {
  const [current, setCurrent] = useState(0);

  if (!songs || songs.length === 0) {
    return <h1>No songs found</h1>;
  }

  return (
    <div style={{ color: "white", background: "#000", minHeight: "100vh" }}>
      <h1>🎵 Music Player Working</h1>

      <h2>Current Song:</h2>
      <p>{songs[current]?.title}</p>

      <button onClick={() => setCurrent((p) => (p + 1) % songs.length)}>
        Next
      </button>
    </div>
  );
}