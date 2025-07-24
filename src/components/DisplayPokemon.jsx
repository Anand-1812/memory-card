export function increaseScore(name, score, setScore, maxScore, setMaxScore, clickedPokemon, setClickedPokemon) {
  if (!clickedPokemon.includes(name)) {
    setScore(score + 1);
    setClickedPokemon([...clickedPokemon, name]);
  } else {
    setMaxScore(Math.max(score, maxScore));
    setScore(0);
    setClickedPokemon([]);
  }
}

function DisplayPokemon({
  name, imageUrl, 
  score, setScore, 
  maxScore, setMaxScore,
  clickedPokemon, setClickedPokemon
}) {

  return (
    <>
      <div className="card" onClick={() => increaseScore(name, score, setScore, maxScore, setMaxScore, clickedPokemon, setClickedPokemon)} >
        <img src={imageUrl} alt={name} />
        <p>{name}</p>
      </div>
    </>
  );
}

export default DisplayPokemon;
