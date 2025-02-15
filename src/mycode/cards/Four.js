import React from "react";
import "./Bingo.css"; // Import the CSS file
import bingoData from "./Data";

function Four({ handleCellClick, grid, selectedNumbers }) {
  return (
    <div>
      <table className="bingo-table">
        <thead>
          <tr>
            {bingoData.letters.map((letter, i) => (
              <th key={i}>{letter}</th> // Use bingoData.letters for column headers
            ))}
          </tr>
        </thead>
        <tbody>
          {grid.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((num, colIndex) => (
                <td
                  key={colIndex}
                  className={`bingo-cell ${num === "FREE" ? "free-cell" : selectedNumbers.has(num) ? "selected" : ""}`}
                  onClick={() => handleCellClick(num)}
                >
                  {num}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Four;
