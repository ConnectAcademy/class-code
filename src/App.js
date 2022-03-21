import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addPolicy, getPosts } from "./store/action";
import AddPolicy from "./components/AddPolicy";
import Payment from "./components/Payment";
import Remove from "./components/Remove";
import Tipper from "./components/Tipper";

const App = () => {
  const amountOfMoney = useSelector((state) => state.money);
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  const policy = useSelector((state) => state.policy);
  const dispatch = useDispatch();
  console.log(policy);
  return (
    <>
      <h1>{amountOfMoney}</h1>
      <button onClick={() => dispatch(getPosts())}>Call</button>
      <AddPolicy />
      <Remove />
      <Payment />
      <Tipper />
    </>
  );
};

export default App;
