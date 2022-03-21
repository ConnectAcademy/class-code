import React from "react";
import { useDispatch } from "react-redux";

import { addPolicy } from "../store/action";

const AddPolicy = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, amount } = e.target;
    dispatch(addPolicy(name.value, parseFloat(amount.value)));
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

export default AddPolicy;
