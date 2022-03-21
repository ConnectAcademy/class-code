import { combineReducers } from "redux";
import finansiiReducer from "./reducers/finansiiReducer";
import postReducer from "./reducers/postsReducer";
import salesReducer from "./reducers/salesReducer";

const reducers = combineReducers({
  money: finansiiReducer,
  policy: salesReducer,
  posts: postReducer,
});

export default reducers;
