import { useState, useEffect } from "react";
import DisplayPokemon from "./DisplayPokemon";

const POKEMON = ['pikachu', 'squirtle', 'charmander', 'bulbasaur', 'charizard', 'ditto', 'scizor', 'eevee', 'gengar', 'mew'];

function PokemonList({ 
  pokemonList, 
  setPokemonList, 
  score, setScore, 
  maxScore, setMaxScore, 
  clickedPokemon, setClickedPokemons
}) {

  useEffect(() => {
    // fetch from poke api and put it in pokemonlist state
    async function fetchPokeImage() {
      try {
        const responses = await Promise.all(
          POKEMON.map(pokemon =>
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(res => {
              if (!res.ok) throw new Error(`HTTP error for ${pokemon}`);
              return res.json();
            })
            .then(data => ({
              name: pokemon,
              imageUrl: data.sprites.front_default
            }))
          )
        );

        setPokemonList(responses);
      } catch (error) {
        console.error('An error occurred:', error.message);
      }
    }

    fetchPokeImage();
  }, []);

  return (
    <div className="cardDiv">
      {pokemonList.map(p => (
        <DisplayPokemon key={p.name} name={p.name} imageUrl={p.imageUrl} 
          pokemonList={pokemonList} setPokemonList={setPokemonList}
          score={score} setScore={setScore} 
          maxScore={maxScore} setMaxScore={setMaxScore}
          clickedPokemon={clickedPokemon} setClickedPokemons={setClickedPokemons}
        />
      ))}
    </div>
  );
}

export default PokemonList;

