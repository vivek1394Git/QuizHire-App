import React from "react";

function Tests({ history, match: { url } }) {
  const handleChange = () => {
    history.push(`${url}/tests`);
  };

  return (
    <div className="Tests">
      <h2>
        Would you like to create a test or see the result of the previously
        created test?
      </h2>
      <button onClick={handleChange}>Tests</button>
    </div>
  );
}

export default Tests;
