import React, { useState, useEffect } from "react";
import "../componentsStyles/RegisterScreen.css";
import { register, registerReset } from "../redux";
import { useDispatch, useSelector } from "react-redux";

function RegisterScreen({ history }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [designation, setDesignation] = useState("");

  const dispatch = useDispatch();
  const data = useSelector((state) => state.register.data);
  const error = useSelector((state) => state.register.error);

  useEffect(() => {
    if (!error && !data) return;
    if (error) {
      alert(error);
      dispatch(registerReset());
      history.push("/register");
    } else {
      alert(data);
      dispatch(registerReset());
      history.push("/login");
    }
  }, [data, error, history, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password, company, designation }));
  };

  return (
    <div className="Register">
      <h1>Registration Form</h1>
      <h2>Create a client account to conduct hiring tests for your organization.</h2>
      <form className="Register-Form" onSubmit={submitHandler}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Company: </label>
          <input
            type="text"
            name="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div>
          <label>Designation: </label>
          <input
            type="text"
            name="designation"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
        </div>

        <button type="submit">Submit the form</button>
      </form>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   console.log("mapstate");
//   console.log(Date.now());
//   console.log(JSON.stringify(state.register));
//   return {
//     data: state.register.data,
//     error: state.register.error,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     register: (registerDetails) => dispatch(register(registerDetails)),
//   };
// };

export default RegisterScreen;
