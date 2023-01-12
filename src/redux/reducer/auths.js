import { ACTION_STRING } from "../actions/actionStrings";
const initialState = {
  userData: {
    id: null,
    token: "",
    role: "",
    image: "",
  },
  isError: false,
  isLoading: false,
  isFulfilled: false,
  error: null,
};
const authsReducer = (prevState = initialState, { type, payload }) => {
  const { authLogin, authLogout, pending, rejected, fulfilled } = ACTION_STRING;

  switch (type) {
    case authLogin.concat("_", pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
      };
    case authLogin.concat(rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        error: payload.error.response.data.msg,
        isFulfilled: false,
      };
    case authLogin.concat(fulfilled):
      return {
        ...prevState,
        isLoading: false,
        sfulfilled: true,
        userData: {
          id: payload.data.data.payload.id,
          image: payload.data.data.payload.image,
          role: payload.data.data.payload.role,
          token: payload.data.data.token,
        },
      };
    case authLogout.concat(pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
      };
    case authLogout.concat(rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        error: payload.response.data.msg,
      };
    case authLogout.concat(fulfilled):
      return initialState;
    default:
      return prevState;
  }
};

export default authsReducer;
