import React from "react";
import { Link, useNavigate } from "react-router-dom";
import app from "../base";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((res) => navigate("/home"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <form onSubmit={signIn}>
        <div className="form">
          <label htmlFor="email">Email</label>
          <input
            className="formInput"
            type="email"
            name="email"
            placeholder="Enter you email"
          />
          <label htmlFor="password">Password</label>
          <input
            className="formInput"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <button>Sign In</button>
          <Link to="/register">Don't have an account? Register here</Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
