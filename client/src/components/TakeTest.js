import React, { useState, useContext } from "react";
import axios from "axios";
import { ForceUpdateContext } from "../App";

function TakeTest({ history }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  const forceUpdate = useContext(ForceUpdateContext);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("/api/result/takeTest", { name, email, pin: parseInt(pin) })
      .then((response) => {
        localStorage.setItem("email", JSON.stringify(response.data.email));
        localStorage.setItem(
          "questions",
          JSON.stringify(response.data.questions)
        );
        for (let i = 1; i <= response.data.questions.length; ++i) {
          localStorage.setItem(`ans${i}`, "0");
        }
        localStorage.setItem("takeTest", "true");
        localStorage.setItem("times", 1);
        forceUpdate();
        history.push("/take-test");
      })
      .catch((err) => {
        alert(err.response.data.msg);
        setName("");
        setEmail("");
        setPin("");
      });
  };
  return (
    <div className="Take-Test">
      <h1>For developers</h1>
      <h2>
        If you've got the pin from your recruiter, then fill up this form to
        give the test.
      </h2>
      <strong>Warning:</strong> <span>Do not refresh or leave the page!</span>
      <form className="Test-Login" onSubmit={submitHandler}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Pin: </label>
          <input
            type="text"
            name="pin"
            value={pin}
            required
            onChange={(e) => setPin(e.target.value)}
          />
        </div>

        <button type="submit">Take the test</button>
      </form>
    </div>
  );
}

export default TakeTest;
