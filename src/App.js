import React, { useEffect, useState } from "react";
import { getAllPosts } from "./services/jsonPh";

import Post from "./components/Post";
import Search from "./components/Search";
import NewPost from "./components/NewPost";

const App = () => {
  const [posts, setPosts] = useState(null);
  const [term, setTerm] = useState("");
  console.log(term);
  useEffect(() => {
    getAllPosts().then((res) => setPosts(res.data));
  }, []);
  const filterPosts = () => {
    setPosts(posts?.filter((post) => post.title.includes(term)));
  };
  console.log(posts);
  return (
    <>
      <Search onSearch={setTerm} onSubmitSearch={filterPosts} />
      <NewPost onAddPost={setPosts} />
      {posts?.map((post) => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </>
  );
};

export default App;
