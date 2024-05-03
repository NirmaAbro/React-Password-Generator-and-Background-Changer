import React from "react";
import { useState } from "react";

function GetInputBoxValue() {
  let [value, setvalue] = useState("");
  let [print, setprint] = useState(false);

  let handleChange = (e) => {
    setvalue(e.target.value);
  };


  return (
    <div>
        {
            print ? <h1>{value}</h1> :""
        }
      
      <input type="text" className="outline-1 " onChange={handleChange} />
      <button
        onClick={() => {
          setprint(true);
        }}
      >
        Print Value
      </button>
    </div>
  );
}

export default GetInputBoxValue;
