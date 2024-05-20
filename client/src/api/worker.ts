import axios from "./index";

const getWorkers = async (service: string, wilaya: number) =>
  await axios.get(`/worker/getWorkers/${service}/${wilaya}`);

const getWorkerOrders = async (workerId: string) =>
  await axios.get(`/worker/${workerId}/orders`);

const getOrderDetails = async (orderId: string) =>
  await axios.get(`/worker/order/${orderId}`);

const updateOrder = async (data: { id: string; state: string }) =>
  await axios.put(`/worker/updateOrder`, data);

const updateUser = async (data: WorkerAccount) =>
  await axios.put(`/worker/updateUser`, data);

export {
  getOrderDetails,
  getWorkers,
  getWorkerOrders,
  updateOrder,
  updateUser,
};
