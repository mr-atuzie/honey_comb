import axios from "axios";
import { toast } from "react-toastify";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

export const registerUser = async (userData) => {
  try {
    const res = await axios.post(
      `${BACKEND_URL}/api/v1/user/register`,
      userData,
      {
        withCredentials: true,
      }
    );

    if (res.statusText === "OK") {
      toast.success("User Registered successfully");
    }

    return res.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    console.log(error);

    toast.error(message);
  }
};

export const loginUser = async (userData) => {
  try {
    const res = await axios.post(`${BACKEND_URL}/api/v1/user/login`, userData);

    if (res.statusText === "OK") {
      toast.success("Login successfully");
    }

    return res.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    console.log(error);

    toast.error(message);
  }
};
