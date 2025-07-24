function DisplayPokemon({ name, imageUrl }) {
  return (
    <>
      <div className="card" onClick={() => console.log("clicked " + name)} >
        <img src={imageUrl} alt={name} />
        <p>{name}</p>
      </div>
    </>
  );
}

export default DisplayPokemon;
