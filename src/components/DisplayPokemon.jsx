export function increaseScore(score, setScore) {
  setScore(score+1);
}

function DisplayPokemon({ name, imageUrl, score, setScore }) {

  return (
    <>
      <div className="card" onClick={() => increaseScore(score, setScore)} >
        <img src={imageUrl} alt={name} />
        <p>{name}</p>
      </div>
    </>
  );
}

export default DisplayPokemon;
