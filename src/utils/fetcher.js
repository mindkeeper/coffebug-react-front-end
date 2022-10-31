import axios from "axios";

const baseUrl = "http://localhost:8080/api";

const axiosRequest = (method, url, data, params) => {
  return axios({
    method,
    url: `${baseUrl}${url}`,
    data,
    params,
  });
};

export const getData = (url, params, data) => {
  return axiosRequest("GET", url, data, params);
};

export const login = (data) => {
  return axiosRequest("POST", "/auths/login", data);
};

export const getProfile = (token) => {
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
