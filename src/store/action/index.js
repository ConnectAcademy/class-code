export const addPolicy = (name, cash) => {
  return {
    type: "ADD_POLICY",
    payload: { name, cash },
  };
};

export const removePolicy = (name, cash) => {
  return {
    type: "REMOVE_POLICY",
    payload: {
      name,
      cash,
    },
  };
};

export const prmuimPayment = (cash) => {
  return {
    type: "PREMIUM_PAY",
    payload: { cash },
  };
};

export const tip = (cash) => {
  return {
    type: "TIP",
    payload: { cash },
  };
};
