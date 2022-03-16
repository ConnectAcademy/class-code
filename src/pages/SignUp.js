import React from "react";
import { Link, useNavigate } from "react-router-dom";
import app from "../base";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const singUp = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((res) => navigate("/home"))
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="container">
      <form onSubmit={singUp}>
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
          <button>Sign Up</button>
          <Link to="/login">Already registered? Login here</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
