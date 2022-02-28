import React, { useEffect, useState } from "react";
import jsonPhApi from "../axios/jsonPh";

const Post = ({ header, content, userId }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    jsonPhApi.get(`/users/${userId}`).then((res) => setUser(res));
  }, []);
  return (
    <>
      <h3>{header}</h3>
      <p>{content}</p>
      <p>Posted by: {user?.name}</p>
      <hr />
    </>
  );
};

export default Post;
