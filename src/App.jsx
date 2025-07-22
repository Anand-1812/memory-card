import { useState } from "react";
import PokemonList from "./components/PokemonList"

function App() {
  const [showList, setShowList] = useState(false);

  return (
    <>
      <h1>Memory card</h1>
      <button onClick={() => setShowList(true)}>Get Pokemon</button>
      {showList && <PokemonList />}  
    </>
  );
}

export default App
