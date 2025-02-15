import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // ✅ Import Route
import Cardchossing from './mycode/cards/Cardchossing';
import bingoData from './mycode/cards/Data';
import Admin from './mycode/Admin/Admin';
import Home from './home/Home';

function App() {
  const [selectedNumbers, setSelectedNumbers] = useState(new Set());

  const grids = {
    one: bingoData.numbers.one || [],  // ✅ Added fallback empty array
    two: bingoData.numbers.two || [],
    three: bingoData.numbers.three || [],
    four: bingoData.numbers.four || [],
    five: bingoData.numbers.five || [],
  };

  const handleCellClick = (num) => {
    if (num !== "FREE") {
      setSelectedNumbers((prev) => {
        const newSet = new Set(prev);
        newSet.has(num) ? newSet.delete(num) : newSet.add(num);
        return newSet;
      });
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={<Home />} 
        />
         <Route 
          path="/cards" 
          element={<Cardchossing handleCellClick={handleCellClick} selectedNumbers={selectedNumbers} grids={grids} />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
