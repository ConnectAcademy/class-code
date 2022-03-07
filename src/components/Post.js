import React from "react";

const Post = ({ title, body }) => {
  return (
    <>
      <h2>{title}</h2>
      <h4>{body}</h4>
      <hr />
    </>
  );
};

export default Post;
