import React from "react";
import { useState } from "react";

function Hidepassword() {
  let [value, setvalue] = useState("");
  let [show, setshow] = useState(false);
  let handlechange = (e) => {
    setvalue(e.target.value); //`e.target.value` is a JavaScript expression used to extract the current value entered by the user in an input field, typically within an event handler function like `handleChange` in React.js. It retrieves the value of the target element that triggered the event, facilitating dynamic interaction with user input.
    
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-4 bg-gray-100 rounded-lg shadow-md ">
        {show ? <h1>{value}</h1> : ""}
        <input type="password" onChange={handlechange} />
        <button
          onClick={() => setshow(!show)}
          className="bg-green-500 mt-3 rounded-xl text-center hover:bg-green-700 text-white font-bold py-2 px-4 m-auto block"
        >
          show
        </button>
      </div>
    </div>
  );
}

export default Hidepassword;
