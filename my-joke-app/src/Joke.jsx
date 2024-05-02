import React, { useState } from "react";

const Joke = () => {
  const [data, setData] = useState("");

  const fetchApi = () => {
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.joke);
      });
  };

  return (
    <div>
      <button onClick={fetchApi}>Click here!</button>
      <p>{data}</p>
    </div>
  );
};

export default Joke;
