import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { tip } from "../store/action";

const Tipper = () => {
  const [money, setMoney] = useState(0);
  const dispatch = useDispatch();
  return (
    <div>
      <input onChange={(e) => setMoney(Number(e.target.value))} />
      <button onClick={() => dispatch(tip(money))}>Tip</button>
    </div>
  );
};

export default Tipper;
