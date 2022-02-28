import React from "react";

function ContactForm() {
  return (
    <div>
      <input type="text" value="Enter your Name" className="inputph" />
      <input
        type="text"
        value="Enter your valid email address"
        className="inputph"
      />
      <input type="text" value="Enter a message" className="textareaph" />
    </div>
  );
}

export default ContactForm;
