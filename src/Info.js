import React from "react";

const Info = ({ firstName, lastName, age }) => {
  return (
    <>
      <h4>Name: {firstName}</h4>
      <h4>Surname: {lastName}</h4>
      <h4>Age: {age}</h4>
    </>
  );
};

export default Info;
