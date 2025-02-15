import React, { useState } from 'react';
import ONe from './ONe';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import Five from './Five';
import './cardchoosing.css'; // Make sure the CSS file is imported

function Cardchossing({ handleCellClick, selectedNumbers, grids }) {
  const [selectedCard, setSelectedCard] = useState("one"); // Default to card one

  return (
    <div>
      {/* Button selection */}
      <div className="card-selection-container">
        <button 
          className={`card-button ${selectedCard === "one" ? "selected" : ""}`} 
          onClick={() => setSelectedCard("one")}
        >
          Card 1
        </button>
        <button 
          className={`card-button ${selectedCard === "two" ? "selected" : ""}`} 
          onClick={() => setSelectedCard("two")}
        >
          Card 2
        </button>
        <button 
          className={`card-button ${selectedCard === "three" ? "selected" : ""}`} 
          onClick={() => setSelectedCard("three")}
        >
          Card 3
        </button>
        <button 
          className={`card-button ${selectedCard === "four" ? "selected" : ""}`} 
          onClick={() => setSelectedCard("four")}
        >
          Card 4
        </button>
        <button 
          className={`card-button ${selectedCard === "five" ? "selected" : ""}`} 
          onClick={() => setSelectedCard("five")}
        >
          Card 5
        </button>
      </div>

      {/* Render the selected card */}
      {selectedCard === "one" && <ONe handleCellClick={handleCellClick} selectedNumbers={selectedNumbers} grid={grids.one || []} />}
      {selectedCard === "two" && <Two handleCellClick={handleCellClick} selectedNumbers={selectedNumbers} grid={grids.two || []} />}
      {selectedCard === "three" && <Three handleCellClick={handleCellClick} selectedNumbers={selectedNumbers} grid={grids.three || []} />}
      {selectedCard === "four" && <Four handleCellClick={handleCellClick} selectedNumbers={selectedNumbers} grid={grids.four || []} />}
      {selectedCard === "five" && <Five handleCellClick={handleCellClick} selectedNumbers={selectedNumbers} grid={grids.five || []} />}
    </div>
  );
}

export default Cardchossing;
