// randomly place the pokemon after clicking 
function shufflePokeCard(array) {
  const newArr = [...array];
  for (let i = newArr.length-1; i > 0; i--) {
   const j = Math.floor(Math.random() * (i+1));
   [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }

  return newArr;
}

function increaseScore(name, score, setScore, maxScore, setMaxScore, clickedPokemon, setClickedPokemons, pokemonList, setPokemonList) {
  if (!clickedPokemon.includes(name)) {
    setScore(score + 1);
    setClickedPokemons([...clickedPokemon, name]);
    setPokemonList(shufflePokeCard(pokemonList))
  } else {
    setMaxScore(Math.max(score, maxScore));
    setScore(0);
    setClickedPokemons([]);
    setPokemonList(shufflePokeCard(pokemonList));
  }
}

function DisplayPokemon({
  name, imageUrl, 
  score, setScore, 
  maxScore, setMaxScore,
  clickedPokemon, setClickedPokemons,
  pokemonList, setPokemonList
}) {

  return (
    <>
      <div className="card" onClick={() => increaseScore(name, score, setScore, maxScore, setMaxScore, clickedPokemon, setClickedPokemons, pokemonList, setPokemonList)} >
        <img src={imageUrl} alt={name} />
        <p>{name}</p>
      </div>
    </>
  );
}

export default DisplayPokemon;
