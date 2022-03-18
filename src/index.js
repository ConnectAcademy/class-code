import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import { finansii, sales } from "./store";

const reducers = combineReducers({
  finansii: finansii,
  salse: sales,
});

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
