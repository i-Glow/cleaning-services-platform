import axios from "./index";

const getLoyalty = async (id: string) =>
  await axios.get(`/client/getLoyalty/${id}`);

const placeOrder = async (data: any) =>
  await axios.post(`/client/placeOrder`, data);

const updateUser = async (data: User) =>
  await axios.put(`/client/updateUser`, data);

const cancelOrder = async (data: any) =>
  await axios.put(`/client/cancelOrder`, data);

const getOrders = async (id: string) => await axios.get(`/client/${id}/orders`);

const getOffers = async () => await axios.get("/offers");

export {
  getLoyalty,
  placeOrder,
  updateUser,
  cancelOrder,
  getOrders,
  getOffers,
};
