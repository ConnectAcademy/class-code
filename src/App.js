import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import UserProfile from "./pages/UserProfile";

const App = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">ContactUs</Link>
      <Link to="/5">User Profile</Link>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/:uid" element={<UserProfile />} />
      </Routes>
    </>
  );
};

export default App;
