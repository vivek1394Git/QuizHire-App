import axios from "axios";
import {
  REGISTER_INITIATED,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  REGISTER_RESET,
} from "./registerTypes";

export const register = (registerDetails) => {
  return (dispatch) => {
    dispatch(registerInitiated());
    axios
      .post("/api/client/register", registerDetails)
      .then((response) => {
        dispatch(registerSuccess(response.data));
      })
      .catch((error) => {
        dispatch(registerFailed(error.response.data));
      });
  };
};

export const registerInitiated = () => {
  return {
    type: REGISTER_INITIATED,
  };
};
export const registerReset = () => {
  return {
    type: REGISTER_RESET,
  };
};
export const registerSuccess = (data) => {
  return {
    type: REGISTER_SUCCESS,
    data,
  };
};
export const registerFailed = (data) => {
  return {
    type: REGISTER_FAILED,
    data,
  };
};
