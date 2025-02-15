import React from "react";
import { Link } from "react-router-dom";
import "./Leaderboard.css";

const Leaderboard = () => {
    return (
        <div className="leaderboard-container">
            <h1>Leaderboard</h1>
            <p>Coming Soon...</p>
            <Link to="/" className="home-link">🏠 Home</Link>
        </div>
    );
};

export default Leaderboard;
