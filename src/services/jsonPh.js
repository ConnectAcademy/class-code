import jsonApi from "../api/axios";

export const getAllPosts = () => {
  return jsonApi.get("/posts");
};
