import React, { useState } from "react";

import Form from "./components/Form";
import Display from "./components/Display";

const App = () => {
  const [userId, setUserId] = useState(1);
  return (
    <>
      <Form onFormSubmit={setUserId} inputTitle="" />
      <Display userId={userId} />
    </>
  );
};

export default App;
