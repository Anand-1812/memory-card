function DisplayPokemon({ name, imageUrl }) {
  return (
    <>
      <div className="card">
        <img src={imageUrl} alt={name} />
        <p>{name}</p>
      </div>
    </>
  );
}

export default DisplayPokemon;
