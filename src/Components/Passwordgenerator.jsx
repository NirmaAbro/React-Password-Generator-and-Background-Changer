import React, { useCallback, useState, useEffect,useRef } from "react";

function Passwordgenerator() {
  const [length, setlength] = useState(8);
  const [numallowed, setnumallowed] = useState(false);
  const [charallows, setcharallowd] = useState(false);
  const [password, setpassword] = useState("");

  //useRef Hook
  const passref=useRef(null);

  const copypassclipboard=useCallback(()=>{
    passref.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password]);




  const passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYAabcdefghijklmnopqrstuvwxyz";
    if (numallowed) str += "0123456789";
    if (charallows) str += "!@#$%^&*()_+}{|:?><~`";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length); // Remove +1
      pass += str.charAt(char);
    }
    setpassword(pass); // Set the generated password to state
  }, [length, numallowed, charallows]);

  useEffect(() => {
    passwordgenerator();
  }, [charallows, numallowed, length, passwordgenerator]);
  return (
    <div className="bg-black h-screen w-screen flex justify-center items-center">
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 justify-center items-center  text-white bg-gray-600">
        <h1 className=" m-2 justify-center items-center font-bold text-2xl ">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            className="w-full p-1 text-black m-2 rounded-lg"
            type="text"
            ref={passref}

            value={password}
            placeholder="password"
            readOnly
          />
          <button onClick={copypassclipboard} className="bg-blue-700 hover:bg-blue-400 hover:text-white hover:font-bold p-1 m-2 rounded-lg outline-none text-white px-3 shrink-0 ">
            Copy
          </button>
          {/* shrink essentially determines how much a flex item can decrease in size to fit the container.  */}
        </div>
        <div className="flex text-sm gap-x-2 ">
          {/* range box  */}
          <div className="flex item-center gap-x-1 p-3">
            <input
              type="range"
              min={8}
              max={10}
              value={length}
              className="cursor-pointer "
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label className=" text-white"> length : {length} </label>
          </div>
          {/* //number checkbox  */}
          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numallowed}
              className="cursor-pointer "
              id="numberInput"
              onChange={(e) => setnumallowed((prev) => !prev)}
            />
            <label className=" text-white m-auto">Number</label>
          </div>
          {/* //checkbox  */}
          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charallows}
              className="cursor-pointer "
              id="characterInput"
              onChange={(e) => setcharallowd((prev) => !prev)}
            />
            <label className=" text-white m-auto">Character</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Passwordgenerator;
