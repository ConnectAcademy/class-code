import React from "react";
import { Form as RBForm, Button } from "react-bootstrap";

const Form = ({ onFormSubmit }) => {
  function handleSubmit(e) {
    e.preventDefault();
    onFormSubmit(e.target.uid.value);
  }
  return (
    <>
      <RBForm className="m-2" onSubmit={handleSubmit}>
        <RBForm.Group className="mb-3" controlId="formBasicEmail">
          <RBForm.Label>User ID</RBForm.Label>
          <RBForm.Control
            type="number"
            placeholder="Enter user ID"
            name="uid"
          />
          <RBForm.Text className="text-muted">
            Please enter the ID of the user
          </RBForm.Text>
        </RBForm.Group>
        <Button type="submit">Submit</Button>
      </RBForm>
    </>
  );
};

export default Form;
