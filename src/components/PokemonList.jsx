import { useState, useEffect } from "react";
import DisplayPokemon from "./DisplayPokemon";

const POKEMON = ['pikachu', 'squirtle', 'charmander', 'bulbasaur', 'charizard', 'ditto', 'scizor', 'eevee', 'gengar', 'mew'];

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
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
    <div>
      {pokemonList.map(p => (
        <DisplayPokemon key={p.name} name={p.name} imageUrl={p.imageUrl} />
      ))}
    </div>
  );
}

export default PokemonList;

