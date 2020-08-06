import React, { useState } from "react";
import axios from "axios";

function AddQuestion({ history, token }) {
  const [question, setQuestion] = useState("");
  const [opt1, setOpt1] = useState("");
  const [opt2, setOpt2] = useState("");
  const [opt3, setOpt3] = useState("");
  const [opt4, setOpt4] = useState("");
  const [answer, setAnswer] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("/api/question/add", {
        question,
        opt1,
        opt2,
        opt3,
        opt4,
        answer: parseInt(answer),
        token,
      })
      .then((response) => {
        alert(response.data.msg);
        history.push("/admin/questions");
      })
      .catch((err) => {
        alert(err.response.data.msg);
        setQuestion("");
        setOpt1("");
        setOpt2("");
        setOpt3("");
        setOpt4("");
        setAnswer("");
      });
  };

  return (
    <div className="Question">
      <h1>Add Question</h1>
      <form className="Question-Form" onSubmit={submitHandler}>
        <div>
          <label>Question: </label>
          <textarea
            name="question"
            value={question}
            rows={4}
            cols={25}
            style={{ resize: "none", maxWidth: "100%" }}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <div>
          <label>Option 1: </label>
          <input
            type="text"
            name="opt1"
            value={opt1}
            onChange={(e) => setOpt1(e.target.value)}
          />
        </div>
        <div>
          <label>Option 2: </label>
          <input
            type="text"
            name="opt2"
            value={opt2}
            onChange={(e) => setOpt2(e.target.value)}
          />
        </div>
        <div>
          <label>Option 3: </label>
          <input
            type="text"
            name="opt3"
            value={opt3}
            onChange={(e) => setOpt3(e.target.value)}
          />
        </div>
        <div>
          <label>Option 4: </label>
          <input
            type="text"
            name="opt4"
            value={opt4}
            onChange={(e) => setOpt4(e.target.value)}
          />
        </div>
        <div>
          <label>Answer: </label>
          <input
            type="text"
            name="answer"
            value={answer}
            placeholder="must be 1,2,3 or 4"
            onChange={(e) => setAnswer(e.target.value)}
          />
        </div>

        <button type="submit">Add the question</button>
      </form>
    </div>
  );
}

export default AddQuestion;
