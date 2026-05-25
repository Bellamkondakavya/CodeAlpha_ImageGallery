import React, { useEffect, useRef, useState } from "react";

export default function Player({ song }) {
  const audioRef = useRef();
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (song) {
      audioRef.current.src = song.src;
      audioRef.current.load();
      if (playing) audioRef.current.play();
    }
  }, [song]);

  const toggle = () => {
    if (playing) audioRef.current.pause();
    else audioRef.current.play();
    setPlaying(!playing);
  };

  const update = () => {
    setProgress(
      (audioRef.current.currentTime /
        audioRef.current.duration) *
        100 || 0
    );
  };

  const seek = (e) => {
    audioRef.current.currentTime =
      (e.target.value / 100) * audioRef.current.duration;
  };

  return (
    <div className="player">

      <img src={song.cover} />

      <h2>{song.title}</h2>
      <p>{song.artist}</p>

      <audio ref={audioRef} onTimeUpdate={update} />

      <input
        type="range"
        value={progress}
        onChange={seek}
      />

      <button onClick={toggle}>
        {playing ? "⏸" : "▶"}
      </button>

    </div>
  );
}