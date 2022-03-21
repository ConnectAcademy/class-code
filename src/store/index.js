import { combineReducers } from "redux";
import finansiiReducer from "./reducers/finansiiReducer";
import salesReducer from "./reducers/salesReducer";

const reducers = combineReducers({
  money: finansiiReducer,
  policy: salesReducer,
});

export default reducers;
