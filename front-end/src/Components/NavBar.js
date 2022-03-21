import React from "react";
import { Link } from "react-router-dom";
const navbar = () => {
  return (
    <div className="nav-items">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/teacher">Teacher</Link>
      </li>
      <li>
        <Link to="/student">Student</Link>
      </li>
    </div>
  );
};
export default navbar;
