import React from "react";

function UpdateData({ history }) {
  const handleChange = () => {
    history.push("/admin/questions");
  };

  return (
    <div className="Update-Data">
      <h1>Hi Admin!</h1>
      <h2>
        Would you like to add, update or delete questions in the database?
      </h2>
      <button onClick={handleChange}>Update the Database</button>
    </div>
  );
}

export default UpdateData;
