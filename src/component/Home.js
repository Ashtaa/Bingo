// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './home.css'; // Import your CSS file

// function Home() {
//   const navigate = useNavigate();

//   return (
//     <div className='home-container'>
//       <button className="button" onClick={() => navigate('/admin')}>Admin</button>
//       <button className="button" onClick={() => navigate('/player')}>Player</button>
//     </div>
//   );
// }

// export default Home;
import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to Bingo</h1>
            <Link to="/game">
                <button className="start-button">Start Game</button>
            </Link>
            <Link to="/leaderboard">
                <button className="leaderboard-button">Leaderboard</button>
            </Link>
        </div>
    );
};

export default Home;

