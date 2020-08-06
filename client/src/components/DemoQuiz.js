import React from "react";

function DemoQuiz({ history }) {
  const handleClick = () => {
    history.push("/demo-test");
  };
  const handleClick2 = () => {
    if(localStorage.getItem("isLoggedIn") === "true") {
      alert("First logout then access this link!");
      return;
    }
    history.push("/register");
  };
  return (
    <div className="Demo-Quiz">
      <h1>For hiring teams</h1>
      <h2>
        If you're looking for talented Javascript Developers, then
        <span>
          <em> look no further!</em>
        </span>
        <br />
        Try out our Javascript assessment tests and find the best candidates for
        your organization.
      </h2>
      <div>
        <button onClick={handleClick}>Try demo test</button>
        <button onClick={handleClick2}>Register here!</button>
      </div>
    </div>
  );
}

export default DemoQuiz;
