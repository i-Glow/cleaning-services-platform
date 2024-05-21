import axios from "./index";

const getLoyalty = async (id: string) =>
  await axios.get(`/client/getLoyalty/${id}`);

const placeOrder = async (data) => await axios.post(`/client/placeOrder`, data);

const updateUser = async (data: User) =>
  await axios.put(`/client/updateUser`, data);

const cancelOrder = async (data) =>
  await axios.put(`/client/cancelOrder`, data);

const getOrders = async (id: string) => await axios.get(`/client/${id}/orders`);

export { getLoyalty, placeOrder, updateUser, cancelOrder, getOrders };
