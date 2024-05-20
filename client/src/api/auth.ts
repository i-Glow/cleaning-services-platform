import axios from "./index";

const login = async (data: User) => await axios.post("/auth/signIn", data);
const register = async (data: User) => await axios.post("/auth/signUp", data);

export { login, register };
