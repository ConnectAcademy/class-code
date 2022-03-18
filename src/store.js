function addPolicy(name, cash) {
  return {
    type: "ADD_POLICY",
    payload: { name, cash },
  };
}

function removePolicy(name, cash) {
  return {
    type: "REMOVE_POLICY",
    payload: {
      name,
      cash,
    },
  };
}

function prmuimPayment(cash) {
  return {
    type: "PREMIUM_PAY",
    payload: { cash },
  };
}

export function tip(cash) {
  return {
    type: "TIP",
    payload: { cash },
  };
}

export function finansii(state = 100, action) {
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
}

export function sales(state = [], action) {
  switch (action.type) {
    case "ADD_POLICY":
      return [action.payload.name, ...state];
    case "REMOVE_POLICY":
      let newArr = [...state];
      newArr.filer((name) => name !== action.payload.name);
      return newArr;
    default:
      return state;
  }
}

// const reducers = Redux.combineReducers({
//   amountOfMoney: finansii,
//   policy: sales,
// });

// const store = Redux.createStore(reducers);

// const addPol = addPolicy("Mirsat", 100);
// store.dispatch(addPol);
// console.log(store.getState());
