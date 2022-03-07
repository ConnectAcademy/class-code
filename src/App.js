import React, { useEffect, useState } from "react";
import { getAllPosts } from "./services/jsonPh";

const App = () => {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    getAllPosts().then((res) => setPosts(res.data));
  }, []);
  console.log(posts);
  return <h1>Hello World!</h1>;
};

export default App;
