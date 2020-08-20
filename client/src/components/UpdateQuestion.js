import React, { useState } from "react";
import axios from "axios";

function UpdateQuestion({ history, token, match: { params } }) {
  let oldQuestion = localStorage.getItem("question")
  oldQuestion = JSON.parse(oldQuestion);
  const id = oldQuestion._id;
  const [question, setQuestion] = useState(oldQuestion.question);
  const [opt1, setOpt1] = useState(oldQuestion.opt1);
  const [opt2, setOpt2] = useState(oldQuestion.opt2);
  const [opt3, setOpt3] = useState(oldQuestion.opt3);
  const [opt4, setOpt4] = useState(oldQuestion.opt4);
  const [answer, setAnswer] = useState(oldQuestion.answer);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put("/api/question/update", {
        id,
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
      <h1>Update Question</h1>
      <form className="Question-Form" onSubmit={submitHandler}>
        <div>
          <label>Question: </label>
          <textarea
            name="question"
            value={question}
            rows={4}
            cols={25}
            style={{ resize: "none", maxWidth: "100%" }}
            required
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <div>
          <label>Option 1: </label>
          <input
            type="text"
            name="opt1"
            value={opt1}
            required
            onChange={(e) => setOpt1(e.target.value)}
          />
        </div>
        <div>
          <label>Option 2: </label>
          <input
            type="text"
            name="opt2"
            value={opt2}
            required
            onChange={(e) => setOpt2(e.target.value)}
          />
        </div>
        <div>
          <label>Option 3: </label>
          <input
            type="text"
            name="opt3"
            value={opt3}
            required
            onChange={(e) => setOpt3(e.target.value)}
          />
        </div>
        <div>
          <label>Option 4: </label>
          <input
            type="text"
            name="opt4"
            value={opt4}
            required
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
            required
            onChange={(e) => setAnswer(e.target.value)}
          />
        </div>

        <button type="submit">Update the question</button>
      </form>
    </div>
  );
}

export default UpdateQuestion;
