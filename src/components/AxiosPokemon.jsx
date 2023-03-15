import axios from "axios";
import React, { useState, useEffect } from "react";

const Pokemon = () => {
  const [pokeList, setPokeList] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    axios
      .get(
        // "https://pokeapi.co/api/v2/pokemon"
        "https://pokeapi.co/api/v2/pokemon?limit=807"
      )
      .then((response) => {
        return response;
      })
      .then((response) => {
        setPokeList(response.data.results);
        console.log(response);
      });
  }, []);

  const buttonHandler = () => {
    setButtonClicked(!buttonClicked);
  };

  return (
    <div style={{ width: "200px", margin: "auto" }}>
      <button onClick={buttonHandler}>Fetch Pokemon</button>
      <ul>
        {buttonClicked &&
          pokeList.map((poke, index) => {
            return <li key={index}>{poke.name}</li>;
          })}
      </ul>
    </div>
  );
};

export default Pokemon;