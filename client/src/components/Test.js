import React, { useEffect } from "react";
import Timer from "./Timer";
import SingleQuestion from "./SingleQuestion";
import axios from "axios";
import "../componentsStyles/Test.css";

function Test({ history }) {
  useEffect(() => {
    const times = parseInt(localStorage.getItem("times"));
    if (times !== 1) {
      alert("Test is invalid now!");
      history.push("/");
    }
    localStorage.setItem("times", times + 1);
  }, [history]);
  const questions = JSON.parse(localStorage.getItem("questions"));
  const email = JSON.parse(localStorage.getItem("email"));
  const submitHandler = (e) => {
    e.preventDefault();
    if (window.confirm("Submit the test?")) calcResult();
  };
  function calcResult() {
    const ansArray = [];
    for (let i = 0; i < questions.length; ++i) {
      ansArray.push({
        _id: questions[i]._id,
        answer: parseInt(localStorage.getItem(`ans${i + 1}`)),
      });
    }
    axios
      .post("/api/result/submitTest", { email, questions: ansArray })
      .then((response) => {
        alert(response.data.msg);
        localStorage.clear();
        history.replace("/");
      })
      .catch((err) => {
        alert(err.response.data.msg);
        localStorage.clear();
        history.replace("/");
      });
  }

  return (
    <div className="Test">
      <Timer calcResult={calcResult} count={questions.length} />
      <form className="Real-Test" onSubmit={submitHandler}>
        {questions.map((question, index) => {
          return (
            <SingleQuestion
              question={question}
              index={index + 1}
              key={index + 1}
            />
          );
        })}
        <button type="submit">Submit the test!</button>
      </form>
    </div>
  );
}

export default Test;
