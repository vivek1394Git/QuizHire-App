import React from "react";
import axios from "axios";

function Question({ question, history, index, token }) {
  const handleDelete = () => {
    axios
      .delete("/api/question/delete", { data: { token, id: question._id } })
      .then((response) => {
        alert(response.data.msg);
        window.location.reload(true);
      })
      .catch((err) => {
        alert(err.response.data.msg);
      });
  };

  const handleUpdate = () => {
    localStorage.setItem("question", JSON.stringify(question))
    history.push(`/admin/questions/update/${JSON.stringify(question._id)}`)
  }
  return (
    <div className="List-Question">
      <h2>
        {index}: {question.question}
      </h2>
      <h3>1. {question.opt1}</h3>
      <h3>2. {question.opt2}</h3>
      <h3>3. {question.opt3}</h3>
      <h3>4. {question.opt4}</h3>
      <h3>Ans. {question.answer}</h3>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Question;
