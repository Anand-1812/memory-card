export function increaseScore(name, score, setScore, maxScore, setMaxScore, clickedPokemon, setClickedPokemons) {
  if (!clickedPokemon.includes(name)) {
    setScore(score + 1);
    setClickedPokemons([...clickedPokemon, name]);
  } else {
    setMaxScore(Math.max(score, maxScore));
    setScore(0);
    setClickedPokemons([]);
  }
}

function DisplayPokemon({
  name, imageUrl, 
  score, setScore, 
  maxScore, setMaxScore,
  clickedPokemon, setClickedPokemons
}) {

  return (
    <>
      <div className="card" onClick={() => increaseScore(name, score, setScore, maxScore, setMaxScore, clickedPokemon, setClickedPokemons)} >
        <img src={imageUrl} alt={name} />
        <p>{name}</p>
      </div>
    </>
  );
}

export default DisplayPokemon;
