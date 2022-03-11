import React, { useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = React.createContext({
  isSignedIn: false,
  signUser: () => {},
  allUsers: [],
});

const AuthContextProvider = ({ children }) => {
  const [isSignedIn, setIsSignetIn] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  function signUser() {
    setIsSignetIn(!isSignedIn);
  }
  return (
    <AuthContext.Provider value={{ isSignedIn, signUser, allUsers: users }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
