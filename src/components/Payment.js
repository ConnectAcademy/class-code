import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { prmuimPayment } from "../store/action";

const Payment = () => {
  const [money, setMoney] = useState(0);
  const dispatch = useDispatch();
  return (
    <div>
      <input onChange={(e) => setMoney(Number(e.target.value))} />
      <button onClick={() => dispatch(prmuimPayment(money))}>Pay</button>
    </div>
  );
};

export default Payment;
