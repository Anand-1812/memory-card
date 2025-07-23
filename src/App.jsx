import { useState } from "react";
import PokemonList from "./components/PokemonList"

function App() {
  const [showList, setShowList] = useState(false);

  return (
    <>
      <div className="mainDiv">
        <div className="navBar">
          <h1>Memory card</h1>
          <button onClick={() => setShowList(true)}>Get Pokemon</button>
        </div>
        {showList && <PokemonList />}  
      </div>
    </>
  );
}

export default App;
