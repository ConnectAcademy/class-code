import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import jsonPhApi from "./axios/jsonPh";

import Post from "./components/Post";

const App = () => {
  const [term, setTerm] = useState("");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    jsonPhApi.get("/posts").then((response) => setPosts(response));
  }, []);

  const postToServer = () => {
    jsonPhApi
      .post("/posts", { title: "foo", body: "bar", userId: 1 })
      .then((res) => console.log(res));
  };
  return (
    <>
      <Form>
        <Form.Group className="mb-3 m-5" controlId="textInput">
          <Form.Label>Search</Form.Label>
          <Form.Control
            type="text"
            placeholder="Input search term here"
            onChange={setTerm}
          />
          <Form.Text>Search</Form.Text>
        </Form.Group>
        <Button type="submit" className="mx-5">
          Submit
        </Button>
      </Form>
      <Button onClick={() => postToServer()}>Post to server</Button>
      {posts &&
        posts.map((post) => (
          <Post
            key={post.id}
            header={post.title}
            content={post.body}
            userId={post.userId}
          />
        ))}
    </>
  );
};

export default App;
