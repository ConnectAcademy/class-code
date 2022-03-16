import React, { useEffect, useState } from "react";
import app from "./base";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthContext = React.createContext({
  currentUser: null,
});

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const auth = getAuth();

  console.log(currentUser);

  useEffect(() => {
    onAuthStateChanged(auth, setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser: currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
