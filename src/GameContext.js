import React, { useState } from "react";

export const GameContext = React.createContext({
  timer: null,
  setTimer: () => {},
  initTimer: null,
  addInitTime: () => {},
});

const GameContextProvider = ({ children }) => {
  const [initTimer, setInitTimer] = useState(5);
  const [timer, setTimer] = useState(5);
  const addTimer = (time) => {
    setTimer(time);
  };
  const addInitTime = (time) => {
    setInitTimer(time);
  };
  return (
    <GameContext.Provider
      value={{ timer, setTimer: addTimer, initTimer, addInitTime }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
