const POKEMON = ['pikachu', 'squirtle', 'charmander', 'bulbasaur', 'charizard', 'ditto', 'scizor', 'eevee', 'gengar', 'mew'];

function extractPokeImage() {

  POKEMON.forEach((pokemon) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(response => response.json())
      .then(data => {
        console.log(`Image url: ${data.sprites.front_default}`);
      })
      .catch(error => {
        console.log(`Opps not found ${error}`);
      });
  });
}

export default extractPokeImage;
