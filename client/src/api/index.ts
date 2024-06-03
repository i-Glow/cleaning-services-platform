import axios from "axios";

const defaultAxios = axios.create({
  baseURL: "https://cleaning-services-platform-api.onrender.com/api",
});

export default defaultAxios;
