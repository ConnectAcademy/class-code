import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ul className="list">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/play">Play</Link>
      </li>
      <li>
        <Link to="/settings">Settings</Link>
      </li>
    </ul>
  );
};

export default Header;
