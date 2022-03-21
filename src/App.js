import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addPolicy } from "./store/action";

const App = () => {
  const amountOfMoney = useSelector((state) => state.money);
  const dispatch = useDispatch();
  return (
    <>
      <h1>{amountOfMoney}</h1>
      <button onClick={() => dispatch(addPolicy("Mirsat", 100))}>
        Add policy
      </button>
    </>
  );
};

export default App;
