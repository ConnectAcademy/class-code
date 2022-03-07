import React from "react";
import { useForm } from "react-hook-form";

const NewPost = ({ onAddPost }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    onAddPost((prev) => [data, ...prev]);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="title" {...register("title")} />
        <input name="body" {...register("body")} />
        <button>Add Post</button>
      </form>
    </>
  );
};

export default NewPost;
