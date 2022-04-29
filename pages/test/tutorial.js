import React, { useState, useEffect } from "react";

const getPokemon = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const data = await res.json();

  return data.results;
};

const Tutorial = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fn = async () => {
      const res = await getPokemon();
      setPokemon(res);
    };
    fn();
  }, []);

  if (pokemon.length < 1) return "gaada";

  return (
    <>
      {pokemon.map((poke) => (
        <div>{poke.name}</div>
      ))}
    </>
  );
};

export default Tutorial;

// // https://pokeapi.co/docs/v2
// // https://pokeapi.co/api/v2/pokemon/ditto

// pair programming
