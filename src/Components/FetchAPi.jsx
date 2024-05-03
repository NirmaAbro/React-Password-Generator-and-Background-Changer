import React from "react";
import { useEffect, useState } from "react";

function FetchAPi() {
  const [isLoading, setIsLoading] = useState(true); // State to track loading status
  const [apiData, setApiData] = useState([]); // State to store API data
  let API = "https://jsonplaceholder.typicode.com/albums";

  const fetchAPIData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setApiData(data);
      setIsLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.log(error);
      setIsLoading(false); // Also set loading to false in case of error
    }
  };

  useEffect(() => {
    fetchAPIData(API);
  }, []);

  if (isLoading) {
    <h1>loading....</h1>;
  } else {
  }

  return (
    <div>
      {isLoading ? ( // Conditionally render loading indicator
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>API DATA</h1>
          <ul>
            {apiData.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FetchAPi;
