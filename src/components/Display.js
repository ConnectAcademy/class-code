import React, { useEffect, useState } from "react";
import axios from "axios";

const Display = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    if (userId > 0 && userId <= 10) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((res) => {
          setIsError(false);
          setUser(res.data);
        })
        .catch((err) => setIsError(true));
    }
  }, [userId]);
  console.log(user);
  return (
    <>
      {isError ? (
        <h4>You entered wrong number</h4>
      ) : (
        <>
          <h4>Name: {user?.name}</h4>
          <h4>Email: {user?.email}</h4>
          <h4>Phone: {user?.phone}</h4>
          <h4>Street: {user?.address.street}</h4>
        </>
      )}
    </>
  );
};

export default Display;
