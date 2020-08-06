import React from "react";

function SingleTest({ test, history, index, token, url }) {
  const date = test.validity;

  const handleClick = () => {
    history.push(`${url}/result/${test._id}`);
  };
  return (
    <div className="Single-Test">
      <h2>Test {index}-: </h2>
      <h3>Valid Till: {date.slice(0, 10) + " " + date.slice(11, 16)}</h3>
      <h3>Total Questions: {test.numberOfQuestions}</h3>
      <h3>Test pin: {test.pin}</h3>
      <button onClick={handleClick}>See results of candidates</button>
    </div>
  );
  //   const handleDelete = () => {
  //     axios
  //       .delete("/api/question/delete", { data: { token, id: question._id } })
  //       .then((response) => {
  //         alert(response.data.msg);
  //         window.location.reload(true);
  //       })
  //       .catch((err) => {
  //         alert(err.response.data.msg);
  //       });
  //   };

  //   const handleUpdate = () => {
  //     history.push(`/admin/questions/update/${JSON.stringify(question)}`)
  //   }
  //   return (
  //     <div className="Single-Question">
  //       <h2>
  //         {index}: {question.question}
  //       </h2>
  //       <h3>1. {question.opt1}</h3>
  //       <h3>2. {question.opt2}</h3>
  //       <h3>3. {question.opt3}</h3>
  //       <h3>4. {question.opt4}</h3>
  //       <h3>Ans. {question.answer}</h3>
  //       <button onClick={handleUpdate}>Update</button>
  //       <button onClick={handleDelete}>Delete</button>
  //     </div>
  // );
}

export default SingleTest;
