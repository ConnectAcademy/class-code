import React, { useState, useEffect, useRef } from "react";
import { Button, Card, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Info from "./Info";
import PersonInputs from "./PersonInputs";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);

  console.log("Name: ", firstName, " Surname: ", lastName, " age: ", age);

  //   useEffect(() => {
  //     console.log("Count and isloading changed and componet fist mount");
  //   }, [count, isLoading]);

  //   useEffect(() => {
  //     console.log("Is loading changed and componet fist mount");
  //     return () => {
  //         console.log("I am in return")
  //     }
  //   }, []);

  return (
    <>
      <PersonInputs
        firstName={firstName}
        onSetFirst={setFirstName}
        lastName={lastName}
        onSetLest={setLastName}
        age={age}
        onSetAge={setAge}
      />
      <Button variant="success">Succes</Button>
      <ProgressBar now={60} />
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Info firstName={firstName} lastName={lastName} age={age} />
    </>
  );
};

export default App;
