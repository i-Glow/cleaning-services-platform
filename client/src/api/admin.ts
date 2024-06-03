import axios from "./index";

const addWorker = async (data: any) =>
  await axios.post("/admin/addWorker", data);

const getWorkers = async () => await axios.get("/admin/workers");

const addOffer = async (data: any) => await axios.post("/admin/offer", data);

export { addWorker, getWorkers, addOffer };
