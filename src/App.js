import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const App = () => {
  const [academyPersons, setAcademyPersons] = useState([]);
  const [hasError, setHasError] = useState("");
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    axios
      .get("http://localhost:3000/connectacademy")
      .then((res) => setAcademyPersons(res.data))
      .catch((err) => setHasError(err.response.statusText));
  }, []);

  const addPerson = (data) => {
    console.log(data);
    axios
      .post("http://localhost:3000/connectacademy", { id: data.name, ...data })
      .then((res) => console.log(res));
  };

  console.log(academyPersons);

  return (
    <>
      <h1>{hasError !== "" ? hasError : "Hello World"}</h1>
      <form onSubmit={handleSubmit(addPerson)}>
        <input name="name" {...register("name")} />
        <input name="type" {...register("type")} />
        <button>Submit</button>
      </form>
      {academyPersons !== [] &&
        academyPersons.map((person) => (
          <div>
            <h4>{person.name}</h4>
            <p>{person.type}</p>
            <hr />
          </div>
        ))}
    </>
  );
};

export default App;
