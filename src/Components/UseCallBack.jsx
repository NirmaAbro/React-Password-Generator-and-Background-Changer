import React, { useCallback } from "react";
import { useState } from "react";

function UseCallBack() {
  const [counterOne, setcounterOne] = useState(0);
  //   when a component re-renders, any functions defined inside that component are recreated. This includes event handlers like handleClick. So, every time the component re-renders, a new handleClick function is created.

  const counteronechnge = () => {
    setcounterOne(counterOne + 1);
  };
  //   By using useCallback, you're telling React to memoize the handleClickMemoized function. It means that React will reuse the same function reference unless the dependencies specified in the dependency array ([count] in this case) change. So, handleClickMemoized will only be recreated if the count state changes.
  const handleClickMemoized = useCallback(() => {
    setcounterOne(counterOne + 1);
  }, [counterOne]);
  return (
    <div>
      <p>Count: {counterOne}</p>
      <button onClick={counteronechnge}>
        Increment count without useCallback
      </button>
      <br />
      <br />
      <br />
      <button onClick={handleClickMemoized}>
        Increment count with useCallback
      </button>
    </div>
  );
}

export default UseCallBack;
