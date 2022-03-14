import React, { useContext } from "react";
import { GameContext } from "../GameContext";

const Settings = () => {
  const { addInitTime, setTimer, initTimer } = useContext(GameContext);
  return (
    <>
      <h4>Enter time to play: </h4>
      <input
        type="number"
        onChange={(e) => {
          addInitTime(e.target.value);
          setTimer(e.target.value);
        }}
      />
    </>
  );
};

export default Settings;
