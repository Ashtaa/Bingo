import { useState, useEffect } from "react";

const RandomNumbers = () => {
  const generateNumbers = () => {
    return Array.from({ length: 25 }, () => Math.floor(Math.random() * 100) + 1);
  };

  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    const storedNumbers = localStorage.getItem("randomNumbers");
    if (storedNumbers) {
      setNumbers(JSON.parse(storedNumbers));
    } else {
      const newNumbers = generateNumbers();
      setNumbers(newNumbers);
      localStorage.setItem("randomNumbers", JSON.stringify(newNumbers));
    }
  }, []);

  const regenerateNumbers = () => {
    const newNumbers = generateNumbers();
    setNumbers(newNumbers);
    localStorage.setItem("randomNumbers", JSON.stringify(newNumbers));
  };

  return (
    <div className="p-5 text-center">
      <h2 className="text-xl font-bold mb-4">Random Numbers (Persist on Refresh)</h2>
      <div className="grid grid-cols-5 gap-4">
        {numbers.map((num, index) => (
          <div key={index} className="p-3 bg-blue-500 text-white rounded-md">
            {num}
          </div>
        ))}
      </div>
      <button
        onClick={regenerateNumbers}
        className="mt-5 p-2 bg-green-500 text-white rounded-md"
      >
        Generate New Numbers
      </button>
    </div>
  );
};

export default RandomNumbers;
