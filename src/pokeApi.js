const POKEMON = ['pikachu', 'squirtle', 'charmander', 'bulbasaur', 'charizard', 'ditto', 'scizor', 'eevee', 'gengar', 'mew'];

async function extractPokeImage() {
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

    responses.forEach(({ name, imageUrl }) => {
      console.log(`Image URL for ${name}: ${imageUrl}`);
    });
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

export default extractPokeImage;

