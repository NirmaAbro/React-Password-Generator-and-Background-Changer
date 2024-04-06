import React, { useState, useMemo } from "react";
// Purpose: The primary purpose of useMemo is to optimize performance by avoiding unnecessary re-computations of expensive values in functional components, especially when those values depend on certain props or state.

function UseMemoHook() {
  const [counterOne, setcounterOne] = useState(0);
  const [counterTwo, setcounterTwo] = useState(0);
  const counteronechnge = () => {
    setcounterOne(counterOne + 1);
  };
  const countertwochnge = () => {
    setcounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    console.log("iseven...");
    let i = 0;
    while (i >= 20000000000000000) {}
    return counterOne % 2 === 0;
  }, [counterOne]);
  return (
    <div>
      <button onClick={counteronechnge}>counterOne : {counterOne}</button>
      <span>{isEven ? "Even" : "odd"}</span>
      <button onClick={countertwochnge}>counterTwo : {counterTwo}</button>
    </div>
  );
}

export default UseMemoHook;
