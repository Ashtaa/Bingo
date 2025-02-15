import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Game.css";

const generateBoard = () => {
    let numbers = Array.from({ length: 25 }, (_, i) => i + 1);
    numbers = numbers.sort(() => Math.random() - 0.5).slice(0, 25);
    return Array.from({ length: 5 }, (_, i) => numbers.slice(i * 5, i * 5 + 5));
};

const checkWin = (board, marked) => {
    const winPatterns = [
        ...board,
        ...board[0].map((_, col) => board.map((row) => row[col])),
        board.map((_, i) => board[i][i]),
        board.map((_, i) => board[i][4 - i]),
    ];
    return winPatterns.some((line) => line.every((num) => marked.has(num)));
};

const Game = () => {
    const [board, setBoard] = useState(generateBoard());
    const [marked, setMarked] = useState(new Set());
    const [winner, setWinner] = useState(false);

    const handleClick = (num) => {
        if (!marked.has(num)) {
            const newMarked = new Set(marked).add(num);
            setMarked(newMarked);
            if (checkWin(board, newMarked)) setWinner(true);
        }
    };

    return (
        <div className="game-container">
            <h1>Bingo Game</h1>
            <Link to="/" className="home-link">🏠 Home</Link>
            <div className={`board ${winner ? "winner" : ""}`}>
                {board.flat().map((num) => (
                    <button
                        key={num}
                        className={`cell ${marked.has(num) ? "marked" : ""}`}
                        onClick={() => handleClick(num)}
                        disabled={winner}
                    >
                        {num}
                    </button>
                ))}
            </div>
            {winner && <h2 className="win-message">🎉 Bingo! You Win! 🎉</h2>}
        </div>
    );
};

export default Game;
