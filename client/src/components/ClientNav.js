import React from "react";
import { Link } from "react-router-dom";

function ClientNav({history}) {
  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("redux_localstorage_simple");
    history.push("/")
    window.location.reload(true);
  };

  return (
    <ul>
      <li id="logo">
        <Link to="/client">QUIZHIRE</Link>
      </li>
      <li>
        <Link to="/client/tests">Tests</Link>
      </li>
      <li onClick={logout}>
        <Link to="/">Logout</Link>
      </li>
    </ul>
  );
}

export default ClientNav;
