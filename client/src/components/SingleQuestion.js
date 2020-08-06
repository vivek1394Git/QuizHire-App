import React, { useState } from "react";

function SingleQuestion({ question, index }) {
  const [selectedOption, setSelectedOption] = useState(0);

  return (
    <div className="Single-Question">
      <h2>{index}: {question.question}</h2>
      <div className="radio">
        <label>
          <input
            type="radio"
            name={`ans${index}`}
            value="1"
            checked={selectedOption === "1"}
            onChange={(e) => {
              localStorage.setItem(`ans${index}`, "1");
              setSelectedOption("1");
            }}
          />
          {question.opt1}
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            name={`ans${index}`}
            value="2"
            checked={selectedOption === "2"}
            onChange={(e) => {
              localStorage.setItem(`ans${index}`, "2");
              setSelectedOption("2");
            }}
          />
          {question.opt2}
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            name={`ans${index}`}
            value="3"
            checked={selectedOption === "3"}
            onChange={(e) => {
              localStorage.setItem(`ans${index}`, "3");
              setSelectedOption("3");
            }}
          />
          {question.opt3}
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            name={`ans${index}`}
            value="4"
            checked={selectedOption === "4"}
            onChange={(e) => {
              localStorage.setItem(`ans${index}`, "4");
              setSelectedOption("4");
            }}
          />
          {question.opt4}
        </label>
      </div>
    </div>
  );
}

export default SingleQuestion;
