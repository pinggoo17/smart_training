import axios from "axios";

const base = axios.create();

base.defaults.baseURL = "http://163.180.142.30:4000/";
base.defaults.withCredentials = true;

base.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    alert(error);
    return Promise.reject(error);
  }
);

export default base;
