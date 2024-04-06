import React, { useState, useEffect } from "react";

function UseEffectHook() {
  let [count, setcount] = useState(0);

  //increase count
  function countincrease() {
    if (count >= 10) {
      console.log("count can't increase from now");
      return; // Exit the function early if count is already 0
    }

    setcount(count + 1);
    console.log("count is", count);
  }
  //decrease count
  function countdecrease() {
    if (count <= 0) {
      console.log("count can't decrease from now");
      return; // Exit the function early if count is already 0
    }
    setcount(count - 1);
    console.log("count is ", count);
  }

  //useEffect hook
  // The useEffect hook in React is used to perform side effects in functional components
  // This useEffect hook will run only once after the component mounts (similar to componentDidMount in class components) because it has an empty dependency array [] as the second argument. This means it does not depend on any props or state changes, so it runs once after the initial render.
  // mount means change , jab b component mount hoga ya useeffect chlyga coz ya use hi component k effect deny k lia use hota h

  useEffect(() => {
    console.log("component changed !");
    return function () {
      console.log("counter mounted");
    };
  }, []); //empty dependency array means whole compoenents
  //and useeffect ama jab hum koe function returnkrwaty hn to vo tab hi renderhota ha jab hmara omponent pora k pora 

  //when count chnage useeffect will chagne
  useEffect(() => {
    console.log("count changed !");
  }, [count]);


  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-2 border-black p-5 rounded-lg m-4">
        <h1>use Effect hook in reactJS</h1>
        <p>my count is {count}</p>
        <button
          className="bg-blue-400 p-3 rounded-lg justify-center item-center m-auto flex p-3 "
          onClick={countincrease}
        >
          +1
        </button>
        <button
          className=" bg-blue-400 p-3 rounded-lg justify-center item-center m-auto flex p-3 "
          onClick={countdecrease}
        >
          -1
        </button>
        
      </div>
    </div>
  );
}

export default UseEffectHook;
