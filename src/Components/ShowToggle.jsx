import React, { useState } from "react";

function ShowToggle() {
  const [show, setShow] = useState(true);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-4 bg-gray-100 rounded-lg shadow-md">
        {show ? (
          <h1 className="block text-2xl font-bold text-center mb-4">
            hi nirma
          </h1>
        ) : (
          ""
        )}
        {/* two buttons toggle  */}
        {/* <button
        onClick={() => setshow(false)}
        className="bg-blue-500 text-center m-auto hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2"
      >
        hide
      </button>
      <button
        onClick={() => setshow(true)}
        className="bg-green-500 text-center m-auto hover:bg-green-700 text-white font-bold py-2 px-4"
      >
        show
      </button> */}
        <button
          className="bg-green-500 text-center hover:bg-green-700 text-white font-bold py-2 px-4 m-auto block"
          onClick={() => setShow(!show)}
        >
          toggle
        </button>
      </div>
    </div>
  );
}

export default ShowToggle;
