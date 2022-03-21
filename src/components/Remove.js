import React from "react";
import { useDispatch } from "react-redux";

import { removePolicy } from "../store/action";

const Remove = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, amount } = e.target;
    dispatch(removePolicy(name.value, parseFloat(amount.value)));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="name" />
        <input name="amount" type="number" />
        <button>Add policy</button>
      </form>
    </>
  );
};

export default Remove;
