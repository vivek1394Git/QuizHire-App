import {
  REGISTER_INITIATED,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  REGISTER_RESET,
} from "./registerTypes";

const initialState = {
  loading: false,
  data: "",
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_INITIATED:
      return {
        loading: true,
        data: "",
        error: "",
      };
    case REGISTER_SUCCESS:
      return {
        loading: false,
        data: action.data.msg,
        error: "",
      };
    case REGISTER_FAILED:
      return {
        loading: false,
        data: "",
        error: action.data.msg,
      };
    case REGISTER_RESET:
      return {
        loading: false,
        data: "",
        error: "",
      };
    default:
      return state;
  }
};

export default reducer;
