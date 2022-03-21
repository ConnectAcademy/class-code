import axios from "axios";

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

export const getPosts = () => async (dispatch) => {
  const respone = await axios.get("https://jsonplaceholder.typicode.com/posts");
  dispatch({ type: "ALL_POSTS", payload: respone.data });
};
