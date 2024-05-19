import express, { Request, Response } from "express";
import {
  cancelOrder,
  getLoyalty,
  placeOrder,
  updateUser,
} from "../Controllers/clientController";

const router = express.Router();

// this route is used to get how many orders the client already made
// the request for this controller should be structered as followed
// localhost:5000/client/getLoyalty/{id}
// example : localhost:5000/client/getLoyalty/25
// the response for this controller should be structered as followed
// {
//   "message": "Order count fetched successfully",
//   "count": "order count"
// }
// if an error occured the response should be structered as followed
// {
//   "message": "An error occured"
// }
router.get("/getLoyalty/:id", getLoyalty);

// this route is used to place an order
// the request for this controller should be structered as followed
// knowing that numberOfDishes/numberOfWindows/numberOfRooms/meters are optional
// and carCleaning is optional and should be a ("inside" | "outside" | "all") string
// {
//   "date": "order date",
//   "price": "order price",
//   "type": "order type",
//   "clientId": "client id",
//   "workerId": "worker id",
//   "numberOfDishes": "number of dishes",
//   "numberOfWindows": "number of windows",
//   "numberOfRooms": "number of rooms",
//   "meters": "meters",
//   "carCleaning": "car cleaning"
// }
// the response for this controller should be structered as followed
// {
//   "message": "Order placed successfully",
//   "order": {
//     "id": "order id",
//     "date": "order date",
//     "state": "order state",
//     "price": "order price",
//     "type": "order type",
//     "clientId": "client id",
//     "workerId": "worker id",
//     "numberOfDishes": "number of dishes",
//     "numberOfWindows": "number of windows",
//     "numberOfRooms": "number of rooms",
//     "meters": "meters",
//     "carCleaning": "car cleaning"
//   }
// }
// if an error occured the response should be structered as followed
// {
//   "message": "An error occured"
// }
router.post("/placeOrder", placeOrder);

// this route is used to update details of a client
// the request for this controller should be structered as followed
// {
//   "id": "client id",
//   "name": "client name",
//   "email": "client email",
//   "address": "client address",
//   "phoneNumber": "client phone number",
//   "wilaya": "client wilaya"
// }
// the response for this controller should be structered as followed
// {
//   "message": "User updated successfully",
//   "user": {
//     "id": "user id",
//     "name": "user name",
//     "email": "user email",
//     "password": "user password",
//     "address": "user address",
//     "phoneNumber": "user phone number",
//     "wilaya": "user wilaya",
//     "role": "user role"
//   }
// }
// if an error occured the response should be structered as followed
// {
//   "message": "An error occured"
// }
router.put("/updateUser", updateUser);

// this route is used to cancel an order
// the request for this controller should be structered as followed
// {
//   "id": "order id"
// }
// the response for this controller should be structered as followed
// {
//   "message": "Order cancelled successfully"
// }
// if an error occured the response should be structered as followed
// {
//   "message": "An error occured"
// }
//
router.put("/cancelOrder", cancelOrder);

export default router;
