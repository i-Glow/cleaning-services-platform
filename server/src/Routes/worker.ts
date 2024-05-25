import express from "express";
import {
  deleteWorker,
  getOrderDetails,
  getWorkerOrders,
  getWorkers,
  updateOrder,
  updateWorker,
} from "../Controllers/workerController";

const router = express.Router();

// this route is used to get the workers assigned to a specific service by wilaya
// possible services:  "house" "pool" "afterEvent" "restaurant" "window" "car" "dish"
// this route will return an array of workers with the services they provide and the number of team members
// the request for this route should be structured as followed
// localhost:5000/api/worker/getWorkers/:service/:wilaya
// example : /getWorkers/house/25
// the response for this route should be structured as followed
// {
//   "workers": [
//     {
//       "id": "worker id",
//       "name": "worker name",
//       "email": "worker email",
//       "password": "worker password",
//       "address": "worker address",
//       "phoneNumber": "worker phone number",
//       "wilaya": "worker wilaya",
//       "workerPrices": {
//         "id": "worker price id",
//         "services": ["house", "pool", "afterEvent", "restaurant", "window", "car", "dish"],
//         "priceForAllCar": "price for all car",
//         "priceForOutsideCar": "price for outside car",
//         "priceForInsideCar": "price for inside car",
//         "priceForDish": "price for dish",
//         "priceForMeter": "price for meter",
//         "priceForRoom": "price for room",
//         "priceForWindow": "price for window"
//       },
//       "role": "worker",
//       "teamMemberCount": "number of team members"
//     }
//   ]
// }
// if an error occured the response should be structured as followed
// {
//   "message": "An error occured"
// }
router.get("/getWorkers/:service/:wilaya", getWorkers);

// this route will be used to get all the orders assigned to a worker
// the request for this route should be structured as followed
// localhost:5000/api/worker/:id/orders
// example : /53ver-536-v235634/orders
// the response for this route should be structured as followed
// {
//   "orders": [
//     {
//       "id": "order id",
//       "date": "order date",
//       "state": "order state",
//       "price": "order price",
//       "type": "order type",
//       "clientId": "client id",
//       "workerId": "worker id",
//       "numberOfDishes": "number of dishes",
//       "numberOfWindows": "number of windows",
//       "numberOfRooms": "number of rooms",
//       "meters": "meters",
//       "carCleaning": "car cleaning",
//       "client": {
//         "id": "client id",
//         "name": "client name",
//         "email": "client email",
//         "address": "client address",
//         "phoneNumber": "client phone number"
//       }
//     }
//   ]
// }
// if an error occured the response should be structured as followed
// {
//   "message": "An error occured"
// }
router.get("/:id/orders", getWorkerOrders);

// this route will be used to get the details of a specific order
// the request for this route should be structured as followed
// localhost:5000/api/worker/order/:id
// example : /order/53ver-536-v235634
// the response for this route should be structured as followed
// {
//   "id": "order id",
//   "date": "order date",
//   "state": "order state",
//   "price": "order price",
//   "type": "order type",
//   "clientId": "client id",
//   "workerId": "worker id",
//   "numberOfDishes": "number of dishes",
//   "numberOfWindows": "number of windows",
//   "numberOfRooms": "number of rooms",
//   "meters": "meters",
//   "carCleaning": "car cleaning",
//   "client": {
//     "id": "client id",
//     "name": "client name",
//     "email": "client email",
//     "address": "client address",
//     "phoneNumber": "client phone number"
//   }
// }
// if an error occured the response should be structured as followed
// {
//   "message": "An error occured"
// }
router.get("/order/:id", getOrderDetails);

// this route will be used to change the status of an order
// the request for this route should be structured as followed
// localhost:5000/api/worker/updateOrder
// the body of the request should be structured as followed
// {
//   "id": "order id",
//   "state": "order state"
// }
// the response for this route should be structured as followed
// {
//   "message": "Order updated successfully"
// }
// if an error occured the response should be structured as followed
// {
//   "message": "An error occured"
// }
router.put("/updateOrder", updateOrder);

// this route will be used to update the details of a worker
// the request for this route should be structured as followed
// localhost:5000/api/worker/updateUser
// the body of the request should be structured as followed
// {
//   "id": "worker id",
//   "name": "worker name",
//   "email": "worker email",
//   "address": "worker address",
//   "phoneNumber": "worker phone number",
//   "wilaya": "worker wilaya",
//   "services": ["house", "pool", "afterEvent", "restaurant", "window", "car", "dish"],
//   "prices": {
//     "priceForAllCar": "price for all car",
//     "priceForOutsideCar": "price for outside car",
//     "priceForInsideCar": "price for inside car",
//     "priceForDish": "price for dish",
//     "priceForMeter": "price for meter",
//     "priceForRoom": "price for room",
//     "priceForWindow": "price for window"
//   }
// }
// the response for this route should be structured as followed
// {
//   "message": "Worker updated successfully"
// }
// if an error occured the response should be structured as followed
// {
//   "message": "An error occured"
// }
router.put("/updateUser", updateWorker);

router.delete("/:id", deleteWorker);

export default router;
