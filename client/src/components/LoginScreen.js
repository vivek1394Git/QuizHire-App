import React, { useState, useEffect, useContext } from "react";
import "../componentsStyles/LoginScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { login, loginReset } from "../redux";
import { ForceUpdateContext } from "../App";

function LoginScreen({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.data);
  const error = useSelector((state) => state.user.error);

  const forceUpdate = useContext(ForceUpdateContext);
  useEffect(() => {
    if (!error && JSON.stringify(data) === "{}") return;
    if (error) {
      alert(error);
      if (error.startsWith("Account")) {
        dispatch(loginReset());
        history.push("/register");
      } else {
        setPassword("");
        dispatch(loginReset());
        history.push("/login");
      }
    } else {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("isAdmin", data.isAdmin);
      forceUpdate();
      if (data.isAdmin) history.replace("/admin");
      else history.replace("/client");
    }
  }, [data, error, history, dispatch, forceUpdate]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div className="Login">
      <h1>Login</h1>
      <h2>Login to create hiring tests for your organization.</h2>
      <h2>
        Admin credentials to update questions in the database: <br />
        email: vivek@quizhire.com &nbsp; password: 12345678
      </h2>
      <form className="Login-Form" onSubmit={submitHandler}>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="text"
            name="password"
            value={password}
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button type="submit">Submit the form</button>
      </form>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     data: state.user.data,
//     error: state.user.error,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     login: (loginDetails) => dispatch(login(loginDetails)),
//   };
// };

export default LoginScreen;
