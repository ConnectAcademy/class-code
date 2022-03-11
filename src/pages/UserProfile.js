import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const myParams = useParams();
  console.log(myParams);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${myParams.uid}`)
      .then((res) => setUser(res.data));
  }, []);
  return user ? (
    <>
      <p>{user.name}</p>
      <p>{user.address.street}</p>
      <p>{user.address.city}</p>
      <p>{user.company.name}</p>
    </>
  ) : (
    <div>Loading</div>
  );
};

export default UserProfile;
