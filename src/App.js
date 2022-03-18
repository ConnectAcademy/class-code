import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { tip } from "./store";

const App = () => {
  const money = useSelector((state) => state.finansii);
  const dispatch = useDispatch();
  console.log(money);
  return (
    <>
      <button onClick={() => dispatch(tip(100))}>Add 100 money</button>
    </>
  );
};

export default App;
