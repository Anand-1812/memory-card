function DisplayPokemon({ name, imageUrl }) {
  return (
    <>
      <div className="cardDiv">
        <div className="card">
          <img src={imageUrl} alt={name} />
          <p>{name}</p>
        </div>
      </div>
    </>
  );
}

export default DisplayPokemon;
