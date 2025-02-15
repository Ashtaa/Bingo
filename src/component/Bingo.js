import React, { useState, useEffect } from "react";
import "./Bingo.css";

const generateBoard = () => {
    const getRandomNumbers = (min, max, count) => {
        let numbers = Array.from({ length: max - min + 1 }, (_, i) => i + min);
        return numbers.sort(() => Math.random() - 0.5).slice(0, count);
    };

    let board = [
        getRandomNumbers(1, 15, 5),  // B column (1-15)
        getRandomNumbers(16, 30, 5), // I column (16-30)
        getRandomNumbers(31, 45, 4), // N column (31-45) *Middle removed*
        getRandomNumbers(46, 60, 5), // G column (46-60)
        getRandomNumbers(61, 75, 5), // O column (61-75)
    ];

    // Insert "FREE" in the middle (N column, row 3)
    board[2].splice(2, 0, "FREE");

    // Transpose columns to rows
    return Array.from({ length: 5 }, (_, i) => board.map(col => col[i]));
};


const Bingo = () => {
  const [board, setBoard] = useState(generateBoard());

  const markNumber = (id) => {
    setBoard((prevBoard) =>
      prevBoard.map((cell) =>
        cell.id === id ? { ...cell, marked: !cell.marked } : cell
      )
    );
  };

  return (
    <div className="bingo-container">
      <h1>Bingo Game</h1>
      <div className="bingo-board">
        {board.map((cell) => (
          <div
            key={cell.id}
            className={`bingo-cell ${cell.marked ? "marked" : ""}`}
            onClick={() => markNumber(cell.id)}
          >
            {cell.number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bingo;
