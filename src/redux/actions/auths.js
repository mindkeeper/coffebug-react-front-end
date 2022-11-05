import { login, logout } from "../../utils/fetcher";
import { ACTION_STRING } from "./actionStrings";

export const loginAction = (body) => {
  return {
    type: ACTION_STRING.authLogin,
    payload: login(body),
  };
};

export const logoutAction = (token) => {
  return {
    type: ACTION_STRING.authLogout,
    payload: logout(token),
  };
};
