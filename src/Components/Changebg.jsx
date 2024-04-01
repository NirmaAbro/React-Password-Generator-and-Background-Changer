import React, { useState } from "react";

function Changebg() {
  let [color, setColor] = useState("pink");
  return (
    <div className="w-full h-screen duration-200" style={{ background: color }}>
      <div className="fixed flex justify-center bottom-12 inset-x-0 px-0 ">
        <div className="flex justify-center shadow-xl bg-white gap-3 px-3 py-2 rounded-2xl ">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 bg-red-600  p-1 rounded-3xl "
          >
            Red
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 bg-blue-600  p-1 rounded-3xl "
          >
            Blue
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 bg-green-600  p-1 rounded-3xl "
          >
            green
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 bg-yellow-600  p-1 rounded-3xl "
          >
            yellow
          </button>
          <button
            onClick={() => setColor("cyan")}
            className="outline-none px-4 bg-cyan-600  p-1 rounded-3xl "
          >
            cyan
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 bg-purple-600  p-1 rounded-3xl "
          >
            purple
          </button>
          <button
            onClick={() => setColor("gray")}
            className="outline-none px-4 bg-gray-600 p-1 rounded-3xl "
          >
            gray
          </button>
        </div>
      </div>
    </div>
  );
}

export default Changebg;
