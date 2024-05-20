import axios from "axios";

const defaultAxios = axios.create({
  baseURL: "http://localhost:5000/api",
});

export default defaultAxios;
