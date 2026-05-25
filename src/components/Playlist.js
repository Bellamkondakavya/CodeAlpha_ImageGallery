export default function Playlist({ songs, setCurrent, current }) {
  return (
    <div className="playlist">
      {songs.map((s, i) => (
        <div
          key={s.id}
          className={i === current ? "active" : ""}
          onClick={() => setCurrent(i)}
        >
          {s.title}
        </div>
      ))}
    </div>
  );
}