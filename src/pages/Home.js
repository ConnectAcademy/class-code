import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);
  return (
    <>
      <br />
      {users.map((user) => (
        <>
          <Link to={`/${user.id}`}>{user.name}</Link>
          <p>{user.username}</p>
          <p>{user.email}</p>
          <hr />
        </>
      ))}
    </>
  );
};

export default Home;
