import React, { useState } from "react";

function ConditionalRendringwithTernaryOp() {
  // const [loggedIn,setloggedIn]=useState(false);//you have one condition if and else
  const [loggedIn, setloggedIn] = useState(3); // if you have more than one conditions
  //1,2,3 user can be a 1 , 2 , 3 etc
  // When you're checking multiple conditions using the ternary operator, you need to use the === operator for strict equality comparison instead of ==.
  return (
    <div>
      {/* {
            loggedIn? "Nirma" : "Ahsan"  //when you have just one condition , like if and else 
        } */}

      {loggedIn === 1 ? (
        <h1>Nirma</h1>
      ) : loggedIn === 2 ? (
        <h1>Kiran</h1>
      ) : loggedIn === 3 ? (
        <h1>Subhan</h1>
      ) : null}
    </div>
  );
}

export default ConditionalRendringwithTernaryOp;
