import axios from "./index";

const addWorker = async (data) => await axios.post("/admin/addWorker", data);

export { addWorker };
