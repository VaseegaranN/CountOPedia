import { useEffect, useState } from "react";
import Attack from "../images/player1.jpg";
import Defend from "../images/player2.jpg";

function Counter() {

  const [gameState, getGameState] = useState({
    count:0,
    gameStatus:""
  })

  function Increment() {
    const newValue = gameState.count + 1;
    const status = newValue >=5 ? "You Wins!" : newValue <=-5 ? "You Lose!" : "";
    getGameState({count:newValue, gameStatus:status})
  }

  function Decrement() {
    const newValue = gameState.count - 1;
    const status = newValue >=5 ? "You Wins!" : newValue <=-5 ? "You Lose!" : "";
    getGameState({count:newValue, gameStatus:status});
  }

  function randomPlay() {
    const playMode = Math.round(Math.random());

    if (playMode == 0) {
      Increment();
    } else {
      Decrement();
    }
  }

  function handleReset() {
    getGameState({count:0, gameStatus:""});
  }
  function handleLog() {
    console.log(gameState.count);
  }

  return (
    <div className="container">
      <div className="row text-white container">
        <h2> Game Score: {gameState.count}</h2>
        <p>You win at +5 points, if lose -5 points</p>
        <h2>Status of the Game: {gameState.gameStatus} </h2>

        <div className="col-md-3 offset-md-2">
          <img
            src={Attack}
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid red",
            }}
            className="p-4 rounded"
            onClick={Increment}
          />
        </div>

        <div className="col-md-3 offset-md-2">
          <img
            src={Defend}
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid blue",
            }}
            className="p-4 rounded"
            onClick={Decrement}
          />
        </div>

        <button onClick={randomPlay} className="btn btn-success m-2 w-100">
          Random Play
        </button>
        <button onClick={handleReset} className="btn btn-danger m-2 w-100">
          Reset
        </button>
        <button onClick={handleLog} className="btn btn-warning m-2 w-100">
          Logs
        </button>
      </div>
    </div>
  );
}

export default Counter;
