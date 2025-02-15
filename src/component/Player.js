import React from 'react';
import './player.css'; // Import CSS file

function Player() {
  return (
    <div className="grid">
      {Array.from({ length: 100 }, (_, i) => (
        <button key={i + 1}>{i + 1}</button>
      ))}
    </div>
  );
}

export default Player;
