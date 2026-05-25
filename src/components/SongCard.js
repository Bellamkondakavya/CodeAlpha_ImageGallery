import React, { useState } from "react";

export default function SongCard({ song }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card">

      <img src={song.cover} />

      <h3>{song.title}</h3>
      <p>{song.artist}</p>

      <button onClick={() => setOpen(true)}>
        📖 Lyrics
      </button>

      {open && (
        <div className="modal">
          <div className="modal-box">
            <h2>{song.title}</h2>
            <p>{song.lyrics}</p>
            <button onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}