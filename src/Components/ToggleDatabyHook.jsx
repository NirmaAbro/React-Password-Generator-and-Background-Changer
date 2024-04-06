import React, { useState } from "react";

function ToggleDatabyHook() {
  let [heading, setheading] = useState("Nirma Abro Computer Scientist");
  let [headingclr, setheadingclr] = useState("black");
  let [bgcolor, setbgcolor] = useState("pink");

  function Chngeheading() {
    let value = heading;
    if (value === "Nirma Abro Computer Scientist") {
      setheading("Nirma Abro");
    } else {
      setheading("Nirma Abro Computer Scientist");
    }
  }

  function chngBG() {
    let newColor = bgcolor === "pink" ? "blue" : "pink";

    setbgcolor(newColor);
  }
  function chngheadingcolor() {
    let newheading = headingclr === "black" ? "white" : "black";

    setheadingclr(newheading);
  }

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{ backgroundColor: bgcolor }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold" style={{color: headingclr}}>{heading}</h1>
        <button
          className="mt-4 m-3 bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={Chngeheading}
        >
          Click me
        </button>
        <button
          onClick={chngBG}
          className="mt-4  m-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          change Background
        </button>
        <button onClick={chngheadingcolor} className="mt-4  m-4 bg-blue-500 text-white px-4 py-2 rounded-lg">Change heading color</button>
      </div>
    </div>
  );
}

export default ToggleDatabyHook;
