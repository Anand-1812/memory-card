import extractPokeImage from "./pokeApi"

function App() {

  return (
    <>
      <h1>Memory card</h1>
      <button onClick={extractPokeImage}>Pokemon</button>
    </>
  )
}

export default App
