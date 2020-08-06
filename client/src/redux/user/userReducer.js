import {
  LOGIN_INITIATED,
  LOGIN_AUTHORIZED,
  LOGIN_FAILED,
  LOGIN_RESET,
} from "./userTypes";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_INITIATED:
      return {
        loading: true,
        data: {},
        error: "",
      };
    case LOGIN_AUTHORIZED:
      return {
        loading: false,
        data: action.data,
        error: "",
      };
    case LOGIN_FAILED:
      return {
        loading: false,
        data: {},
        error: action.data.msg,
      };
    case LOGIN_RESET:
      return {
        loading: false,
        data: {},
        error: "",
      };
    default:
      return state;
  }
};

export default reducer;
