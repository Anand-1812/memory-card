import { useState } from "react";
import PokemonList from "./components/PokemonList"

function App() {
  const [showList, setShowList] = useState(false);

  return (
    <>
      <div className="mainDiv">
        <div className="navBar">
          <div className="navLeft">
            <h1>Memory card</h1>
            <button onClick={() => setShowList(true)}>Get Pokemon</button>
          </div>
          <div className="navRight">
            <div className="scoreDiv">
              <label>Score: </label>
              <p>{0}</p>
            </div>
            <div className="maxScoreDiv">
              <label>Max Score: </label>
              <p>{0}</p>
            </div>
          </div>
        </div>
        {showList && <PokemonList />}
      </div>
    </>
  );
}

export default App;
