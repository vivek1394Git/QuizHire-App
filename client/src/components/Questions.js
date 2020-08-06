import React, { useEffect, useState } from "react";
import axios from "axios";
import Question from "./Question";

function Questions({ token, history }) {
  console.log("questions");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .post("/api/question/", { token })
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((err) => {
        alert(err.response.msg);
        history.push("/");
      });
  }, [token, history]);

  const handleChange = () => {
    history.push("/admin/questions/add/");
  };
  const handleChange2 = () => {
    history.push("/admin");
  };
  return (
    <div className="Questions">
      <div className="New-Nav">
        <button onClick={handleChange}>+ Add a question</button>
        <button onClick={handleChange2}>Dashboard</button>
      </div>
      <h1>All Questions</h1>
      {questions.map((question, index) => {
        return (
          <Question
            key={index + 1}
            index={index + 1}
            token={token}
            question={question}
            history={history}
          />
        );
      })}
    </div>
  );
}

export default Questions;
