import React from 'react'
import { Link } from 'react-router-dom';

function TestNav({match:{url}}) {

  const handleClick = () => {
    localStorage.clear();
    window.location.reload(true);
  }

  return (
    <ul>
      <li id="logo">
        <Link to={`/`}>QUIZHIRE</Link>
      </li>
      <li onClick={handleClick}>
        <Link to={`/`}>Quit-Test</Link>
      </li>
    </ul>
  )
}

export default TestNav
