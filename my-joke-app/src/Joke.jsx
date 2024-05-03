import React, { useState } from "react";

const Jokes = () => {
  const [joke, setJoke] = useState("");

  const fetchApi = () => {
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
      .then((res) => res.json())
      .then((data) => setJoke(data.joke));
  };

  return (
    <div>
      <button onClick={fetchApi}>Click here!</button>
      <p>{joke}</p>
    </div>
  );
};

export default Jokes;
