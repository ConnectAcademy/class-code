import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import GameContextProvider from "./GameContext";

ReactDOM.render(
  <GameContextProvider>
    <Router>
      <App />
    </Router>
  </GameContextProvider>,
  document.getElementById("root")
);
