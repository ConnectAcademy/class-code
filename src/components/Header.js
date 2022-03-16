import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { Link } from "react-router-dom";
import app from "../base";
import { getAuth, signOut } from "firebase/auth";

const Header = () => {
  const { currentUser } = useContext(AuthContext);
  const auth = getAuth();
  return (
    <>
      <Link to="/home">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <button onClick={() => signOut(auth)}>Sign Out</button>
      <h4>{currentUser?.email}</h4>
    </>
  );
};

export default Header;
