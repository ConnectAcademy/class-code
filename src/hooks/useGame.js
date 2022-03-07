import { useState, useEffect, useRef } from "react";

export default function useGame() {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(5);
  const [starter, setStarter] = useState(false);
  const [countedWords, setCountedWords] = useState(0);
  const textRef = useRef();

  useEffect(() => {
    if (timeRemaining > 0 && starter) {
      setTimeout(() => setTimeRemaining((pred) => pred - 1), 1000);
    } else {
      endGame();
    }
  }, [timeRemaining, starter]);

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
    setTimeRemaining(5);
    setStarter(true);
    setCountedWords(0);
    textRef.current.disabled = false;
    textRef.current.focus();
  }

  return { setText, text, textRef, timeRemaining, startGame, countedWords };
}
