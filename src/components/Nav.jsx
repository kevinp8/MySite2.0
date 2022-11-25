import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">About Me</Link>
        </li>
        <li>
          <Link to="/Skills">Skills</Link>
        </li>
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
        <li>
          <Link to="/Links">Links</Link>
        </li>
        <li>
          <Link to="/Contact">Contact Me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
