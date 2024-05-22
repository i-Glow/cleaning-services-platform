import express from "express";
import {
  createAdminAccount,
  signIn,
  signUp,
} from "../Controllers/authController";

const router = express.Router();

// this route is used to log in returning user details
// This controller is used to sign in a user;
// The request for this controller should be structured as follows:
// {
//   "email": "user email",
//   "password": "user password"
// }
// The response for this controller should be structured as follows:
// {
//   "message": "User signed in successfully",
//   "user": {
//     "id": "user id",
//     "name": "user name",
//     "email": "user email",
//     "password": "user password",
//     "address": "user address",
//     "phoneNumber": "user phone number",
//     "wilaya": "user wilaya",
//     "role": "user role",
//     "workerPrices": {*if the user is a worker*}
//   }
// }
// If an error occurred the response should be structured as follows:
// {
//   "message": "An error occurred"
// }
router.post("/signIn", signIn);

// this route is used to register a client
// This controller is used to sign up a new user;
// The request for this controller should be structured as follows:
// {
//   "name": "user name",
//   "email": "user email",
//   "password": "user password",
//   "address": "user address",
//   "phoneNumber": "user phone number",
//   "wilaya": "user wilaya"
// }
// The response for this controller should be structured as follows:
// {
//   "message": "User signed up successfully",
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
// If an error occurred the response should be structured as follows:
// {
//   "message": "An error occurred"
// }
router.post("/signUp", signUp);

export default router;
