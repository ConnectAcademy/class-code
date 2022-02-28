import axios from "axios";

const jsonPhApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

jsonPhApi.interceptors.response.use((res) => {
  return res.data;
});

export default jsonPhApi;
