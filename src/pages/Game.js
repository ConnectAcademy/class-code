import React, { useContext } from "react";

import { GameContext } from "../GameContext";
import useGame from "../hooks/useGame";

const Game = () => {
  const { timer } = useContext(GameContext);
  const { setText, text, textRef, timeRemaining, startGame, countedWords } =
    useGame();
  console.log(timer);
  return (
    <>
      <h1>How fast do you type</h1>
      <textarea
        onChange={(e) => setText(e.target.value)}
        value={text}
        disabled={true}
        ref={textRef}
      />
      <h4>Time remaining: {timer}</h4>
      <button onClick={() => startGame()}>START</button>
      <h1>Word count: {countedWords}</h1>
    </>
  );
};

export default Game;
