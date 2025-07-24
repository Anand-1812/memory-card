import { useState } from "react";
import PokemonList from "./components/PokemonList"

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [showList, setShowList] = useState(false);
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [clickedPokemon, setClickedPokemons] = useState([]);

  return (
    <>
      <div className="mainDiv">
        <div className="navBar">
          <div className="navLeft">
            <h1>Memory card</h1>
            <button onClick={() => setShowList(true)}>Start Game</button>
          </div>
          <div className="navRight">
            <div className="scoreDiv">
              <label>Score: </label>
              <p>{score}</p>
            </div>
            <div className="maxScoreDiv">
              <label>Max Score: </label>
              <p>{maxScore}</p>
            </div>
          </div>
        </div>
        {showList && <PokemonList
          pokemonList={pokemonList} setPokemonList={setPokemonList}
          score={score} setScore={setScore}
          maxScore={maxScore} setMaxScore={setMaxScore}
          clickedPokemon={clickedPokemon} setClickedPokemons={setClickedPokemons}
        />}
      </div>
    </>
  );
}

export default App;
