import React from "react";

function SpreadOperator() {
  {
    /* merging arrays  */
  }
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const mergedArray = [...arr1, ...arr2];
  console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

  //   copying array elements
  const originalArray = [1, 2, 3];
  const copiedArray = [...originalArray];

  console.log(copiedArray); // Output: [1, 2, 3]
  console.log(originalArray === copiedArray); // Output: false (different reference)

  return (
    <div>
      <h1>Spread operator in react</h1>
      <p>
        The spread operator (...) in React and JavaScript is used to expand an
        iterable (like an array) into individual elements. It is commonly used
        for merging arrays, creating copies of objects, and passing props
        dynamically in React components. Let's go through some examples
      </p>
    </div>
  );
}

export default SpreadOperator;
