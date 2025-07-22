function DisplayPokemon({ name, imageUrl }) {
  return (
    <>
      <img src={imageUrl} alt={name} />
    </>
  );
}

export default DisplayPokemon;
