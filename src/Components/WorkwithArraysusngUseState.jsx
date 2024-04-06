import React, { useState } from "react";

function WorkwithArraysusngUseState() {
  let biodata = [
    {
      name: "nirma",
      id: "1",
    },
    {
      name: "kiran",
      id: "2",
    },
    {
      name: "Ahsan",
      id: "3",
    },
    {
      name: "subahn",
      id: "4",
    },
    {
      name: "basheer",
      id: "5",
    },
    {
      name: "aina",
      id: "6",
    },
    {
      name: "iqra",
      id: "7",
    },
  ];
  let [data, setdata] = useState(biodata);
  function removedata() {
    setdata([]);
    <h1>data has been removed</h1>;
  }
  return (
    <div className="bg-black h-screen flex flex-col  justify-center items-center">
      {data.map((currele) => {
        return (
          <h1 key={currele.id} className="bg-white p-2 rounded-full m-auto w-1/2 mt-6 justify-center items-center ">
            Name : {currele.name} , ID : {currele.id};
          </h1>
        );
      })}
      <button
        onClick={removedata}
        className="bg-blue-600 text-white p-4 rounded-full flex justify-center items-center mt-6"
      >
        clear data
      </button>
    </div>
  );
}

export default WorkwithArraysusngUseState;
