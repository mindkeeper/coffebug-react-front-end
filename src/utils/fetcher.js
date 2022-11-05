import axios from "axios";

const baseUrl = "http://localhost:8080";
const prefix = "/api";

const axiosRequest = (method, url, data, params) => {
  return axios({
    method,
    url: `${baseUrl}${prefix}${url}`,
    data,
    params,
  });
};

export const editProfile = (data, token) => {
  return axios({
    method: "PATCH",
    url: `${baseUrl}${prefix}/users/edit-profile`,
    data,
    headers: { "x-access-token": token },
  });
};
export const getData = (url, params, data) => {
  return axiosRequest("GET", url, data, params);
};

export const logout = (token) => {
  return axios({
    method: "DELETE",
    url: `${baseUrl}${prefix}/auths/logout`,
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
    url: `${baseUrl}${prefix}/users`,
    headers: { "x-access-token": token },
  });
};

export const getHistory = (token) => {
  return axios({
    method: "GET",
    url: `${baseUrl}${prefix}/transactions/history`,
    headers: { "x-access-token": token },
  });
};
