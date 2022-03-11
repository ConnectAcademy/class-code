import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { isSignedIn, signUser } = useContext(AuthContext);
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/protected">Protected</Link>
      <button onClick={signUser}>Sign {isSignedIn ? "Out" : "In"}</button>
    </>
  );
};

export default Home;
