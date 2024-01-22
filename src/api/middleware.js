/* eslint-disable */
import axios from "axios";
import { getLocalToken, clearLocalStorage } from "utils/storage";

export const API = axios.create({
  // baseURL: process.env.REACT_APP_API_URL,
  baseURL: "http://localhost:8081",
  timeout: 300000,
  headers: {
    "Content-Type": "application/json",
  },
  validateStatus: (status) => {
    return true;
  },
});

API.interceptors.response.use(
  (response) => {
    if (response.status !== 200) {
      if (response.data.title === "Unauthorized") clearLocalStorage(true);
    }
    return response;
  },
  (error) => {
    console.warn("Error status: ", error.response.status);
  }
);

API.interceptors.request.use((request) => {
  const token = getLocalToken();
  if (token) request.headers.Authorization = "Bearer " + token;
  return request;
});

/**
 *
 * @param {boolean} success
 * @param {object} message
 * @property {boolean} success
 * @property {object} message
 */
export function standardResponse(success, message) {
  return {
    success,
    message,
  };
}

export const API_PROVINCE = axios.create({
  baseURL: process.env.REACT_APP_API_PROVINCE,
  timeout: 300000,
  headers: {
    "Content-Type": "application/json",
  },
  validateStatus: (status) => {
    return true;
  },
});
