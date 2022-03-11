import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import { AuthContext } from "./AuthContext";
import Home from "./pages/Home";
import Proteced from "./pages/Proteced";

const App = () => {
  const { isSignedIn, signUser, allUsers } = useContext(AuthContext);
  allUsers !== [] && console.log(allUsers);
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {isSignedIn && <Route exact path="/protected" element={<Proteced />} />}
      </Routes>
    </>
  );
};

export default App;
