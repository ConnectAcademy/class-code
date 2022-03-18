import React, { useEffect, useContext } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";

const WithAuth = (ChildComponent) => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser]);
  const ComposedComponent = (props) => {
    return <ChildComponent {...props} />;
  };
  return <ComposedComponent />;
};

export default WithAuth;
