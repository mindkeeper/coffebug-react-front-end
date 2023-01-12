import { login, logout, signUp } from "../../utils/fetcher";
import { ACTION_STRING } from "./actionStrings";

const { authLogin, authLogout, authRegister, pending, rejected, fulfilled } =
  ACTION_STRING;

const registerPending = () => ({
  type: authRegister.concat(pending),
});

const registerRejected = (error) => ({
  type: authRegister.concat(rejected),
  payload: { error },
});

const registerFulfilled = (data) => ({
  type: authRegister.concat(fulfilled),
  payload: { data },
});

const loginPending = () => ({
  type: authLogin.concat(pending),
});

const loginRejected = (error) => ({
  type: authLogin.concat(rejected),
  payload: { error },
});

const loginFulfilled = (data) => ({
  type: authLogin.concat(fulfilled),
  payload: { data },
});

const logoutPending = () => ({
  type: authLogout.concat(pending),
});

const logoutRejected = (error) => ({
  type: authLogout.concat(rejected),
  payload: { error },
});

const logoutFulfilled = (data) => ({
  type: authLogout.concat(fulfilled),
  payload: { data },
});

export const registerThunk =
  (body, cbSuccess, cbDenied) => async (dispatch) => {
    try {
      dispatch(registerPending());
      const result = await signUp(body);
      dispatch(registerFulfilled(result.data));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      console.log(error);
      dispatch(registerRejected(error));
      typeof cbDenied === "function" && cbDenied();
    }
  };
const loginThunk = (body, cbSuccess, cbDenied) => async (dispatch) => {
  try {
    dispatch(loginPending());
    const result = await login(body);
    dispatch(loginFulfilled(result.data));
    typeof cbSuccess === "function" && cbSuccess(result.data.data.token);
  } catch (error) {
    console.log(error);
    dispatch(loginRejected(error));
    typeof cbDenied === "function" && cbDenied(error.response.data.msg);
  }
};

const logoutThunk = (token, cbSuccess, cbDenied) => async (dispatch) => {
  try {
    dispatch(logoutPending());
    const result = await logout(token);
    dispatch(logoutFulfilled(result.data));
    typeof cbSuccess === "function" && cbSuccess();
  } catch (error) {
    console.log(error);
    dispatch(logoutRejected(error));
    typeof cbDenied === "function" && cbDenied();
  }
};
const authsActions = {
  logoutThunk,
  registerThunk,
  loginThunk,
};

export default authsActions;
