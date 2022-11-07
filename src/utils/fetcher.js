import axios from "axios";
const baseUrl = process.env.REACT_APP_BACKEND_HOST;

const axiosRequest = (method, url, data, params) => {
  return axios({
    method,
    url: `${baseUrl}${url}`,
    data,
    params,
  });
};

export const editProfile = (data, token) => {
  return axios({
    method: "PATCH",
    url: `${baseUrl}/users/edit-profile`,
    data,
    headers: { "x-access-token": token },
  });
};
export const getData = (url, params, data) => {
  return axiosRequest("GET", url, data, params);
};

export const postData = (token, data) => {
  return axios({
    method: "POST",
    url: `${baseUrl}/products`,
    data,
    headers: { "x-access-token": token },
  });
};
export const logout = (token) => {
  return axios({
    method: "DELETE",
    url: `${baseUrl}/auths/logout`,
    headers: { "x-access-token": token },
  });
};
export const login = (data) => {
  return axiosRequest("POST", "/auths/login", data);
};
export const signUp = (data) => {
  return axiosRequest("POST", "/users/register", data);
};

export const getProfile = () => {
  const token = JSON.parse(localStorage.getItem("userInfo")).token;

  return axios({
    method: "GET",
    url: `${baseUrl}/users`,
    headers: { "x-access-token": token },
  });
};

export const getHistory = (token) => {
  return axios({
    method: "GET",
    url: `${baseUrl}/transactions/history`,
    headers: { "x-access-token": token },
  });
};
