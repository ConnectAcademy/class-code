import React from "react";

const PersonInputs = ({
  firstName,
  onSetFirst,
  lastName,
  onSetLest,
  age,
  onSetAge,
}) => {
  return (
    <>
      <input
        placeholder="First name"
        value={firstName}
        onChange={(e) => onSetFirst(e.target.value)}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={(e) => onSetLest(e.target.value)}
      />
      <input
        placeholder="Age"
        value={age}
        onChange={(e) => onSetAge(e.target.value)}
      />
    </>
  );
};

export default PersonInputs;
