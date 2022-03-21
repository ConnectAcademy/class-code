import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addPolicy } from "./store/action";
import AddPolicy from "./components/AddPolicy";

const App = () => {
  const amountOfMoney = useSelector((state) => state.money);
  const dispatch = useDispatch();
  return (
    <>
      <h1>{amountOfMoney}</h1>
      <AddPolicy />
    </>
  );
};

export default App;
