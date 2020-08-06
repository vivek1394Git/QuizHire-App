import React from "react";
import { Link } from "react-router-dom";

function HomeNav() {
  return (
    <ul>
      <li id="logo">
        <Link to="/">QUIZHIRE</Link>
      </li>
      <li>
        {localStorage.getItem("isLoggedIn") !== "true" && <Link to="/register">Register</Link>}
      </li>
      <li>
        {localStorage.getItem("isLoggedIn") === "true" ? (
          (localStorage.getItem("isAdmin") === "true" && (
            <Link to="/admin">Dashboard</Link>
          )) || <Link to="/client">Dashboard</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </ul>
  );
}

export default HomeNav;
