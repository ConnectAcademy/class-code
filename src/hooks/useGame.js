import { useState, useEffect, useRef, useContext } from "react";

import { GameContext } from "../GameContext";

export default function useGame() {
  const { timer, setTimer, initTimer } = useContext(GameContext);
  const [text, setText] = useState("");
  // const [timer, setTimer] = useState(5);
  const [starter, setStarter] = useState(false);
  const [countedWords, setCountedWords] = useState(0);
  const textRef = useRef();

  useEffect(() => {
    if (timer > 0 && starter) {
      setTimeout(() => setTimer((pred) => pred - 1), 1000);
    } else {
      endGame();
    }
  }, [timer, starter]);

  function wordCount(text) {
    const wordArr = text.split(" ");
    return wordArr.filter((el) => el !== "").length;
  }

  function endGame() {
    setStarter(false);
    setCountedWords(wordCount(text));
    textRef.current.disabled = true;
  }

  function startGame() {
    setText("");
    setTimer(initTimer);
    setStarter(true);
    setCountedWords(0);
    textRef.current.disabled = false;
    textRef.current.focus();
  }

  return { setText, text, textRef, timer, startGame, countedWords };
}
