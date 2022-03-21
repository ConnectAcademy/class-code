const postReducer = (state = [], action) => {
  switch (action.type) {
    case "ALL_POSTS":
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default postReducer;
