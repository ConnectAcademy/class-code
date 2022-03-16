import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => navigate("/login"), []);

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<SignIn />} />
        <Route exact path="/register" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default App;
