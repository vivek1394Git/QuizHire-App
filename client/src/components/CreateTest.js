import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleTest from "./SingleTest";

function CreateTest({ token, history, match:{url} }) {
  const [tests, setTests] = useState([]);
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);

  useEffect(() => {
    axios
      .post("/api/test/", { token })
      .then((response) => {
        setTests(response.data.tests);
        setNumberOfQuestions(response.data.numberOfQuestions);
      })
      .catch((err) => {
        alert(err.response.msg);
        history.push("/");
      });
  }, [token, history]);

  const handleChange = () => {
    history.push(`${url}/add/${numberOfQuestions}`);
  };
  const handleChange2 = () => {
    history.push(`${url.slice(0, -6)}`);
  };
  return (
    <div className="Create-Test">
      <div className="New-Nav">
        <button onClick={handleChange}>+ Add a test</button>
        <button onClick={handleChange2}>Dashboard</button>
      </div>
      <h1>All Tests</h1>
      {tests.map((test, index) => {
        return (
          <SingleTest
            key={index + 1}
            index={index + 1}
            token={token}
            test={test}
            history={history}
            url={url}
          />
        );
      })}
    </div>
  );
}

export default CreateTest;
