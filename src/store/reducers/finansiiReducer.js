const finansii = (state = 100, action) => {
  switch (action.type) {
    case "ADD_POLICY":
      return state + action.payload.cash;
    case "REMOVE_POLICY":
      return state - action.payload.cash;
    case "PREMIUM_PAY":
      return state - action.payload.cash;
    case "TIP":
      return state + action.payload.cash;
    default:
      return state;
  }
};

export default finansii;
