const sales = (state = [], action) => {
  switch (action.type) {
    case "ADD_POLICY":
      return [action.payload.name, ...state];
    case "REMOVE_POLICY":
      const newArr = state.filter((name) => name !== action.payload.name);
      return newArr;
    default:
      return state;
  }
};

export default sales;
