import React from "react";

function ContactContainer({ children }) {
  return (
    <div className="block2">
      <div style={{ display: "inline-block" }}>
        <h2>GET A FREE CASE EVULATION TODAY!</h2>
        <p>AVALIABLE 24 HOURS A DAY!</p>
      </div>
      <div className="header" style={{ display: "inline-block" }}>
        <h2>WE ARE HERE</h2>
        <p>MON-FFI 8:30AM- 5PM / PHONES ARE OPEN 24/7</p>
      </div>
      {children}
    </div>
  );
}

export default ContactContainer;
