import React from "react";
import { questions } from "../demoData";
import SingleQuestion from "./SingleQuestion";
import Timer from "./Timer";
import "../componentsStyles/Test.css";

function DemoTest({ history }) {
  const submitHandler = (e) => {
    e.preventDefault();
    if (window.confirm("Submit the test?")) calcResult();
  };

  const calcResult = () => {
    let marks = 0;
    for (let i = 1; i <= questions.length; ++i) {
      if (localStorage.getItem(`ans${i}`) === String(questions[i - 1].answer)) {
        ++marks;
      }
    }
    alert(`You've got ${marks} out of ${questions.length} answers right!`);
    localStorage.clear();
    history.replace("/");
  };

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
        <button type="submit">Submit the demo test!</button>
      </form>
    </div>
  );
}

export default DemoTest;
