import React, { useState, useEffect } from 'react';

const TimerComponent = () => {
  // Define state variable to store timer value
  const [timer, setTimer] = useState(0);

  // useEffect hook to update timer every second
  useEffect(() => {
    // Function to update timer every second
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures useEffect runs only once when the component mounts

  return (
    <div className="container mx-auto py-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Simple Timer Component</h2>
      <p className="text-3xl font-semibold mb-2">{timer} seconds</p>
      <p className="text-gray-500">Timer counting every second using useEffect hook</p>
    </div>
  );
};

export default TimerComponent;
