import axios from "axios";
import { LOGIN_INITIATED, LOGIN_AUTHORIZED, LOGIN_FAILED, LOGIN_RESET } from "./userTypes";

export const login = (loginDetails) => {
  return (dispatch) => {
    dispatch(loginInitiated());
    axios
      .post("/api/client/login", loginDetails)
      .then((response) => {
        dispatch(loginAuthorized(response.data));
      })
      .catch((error) => {
        dispatch(loginFailed(error.response.data));
      });
  };
};

export const loginInitiated = () => {
  return {
    type: LOGIN_INITIATED,
  };
};
export const loginReset = () => {
  return {
    type: LOGIN_RESET,
  };
};
export const loginAuthorized = (data) => {
  return {
    type: LOGIN_AUTHORIZED,
    data,
  };
};
export const loginFailed = (data) => {
  return {
    type: LOGIN_FAILED,
    data,
  };
};
