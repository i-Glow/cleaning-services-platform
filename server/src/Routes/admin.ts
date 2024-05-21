import express from "express";
import {
  addOffer,
  addWorker,
  getWorkers,
} from "../Controllers/adminController";

const router = express.Router();

// this route is used to add a new worker
// this controller is used to add a worker;
// the request for this controller should be structered as followed
// {
//   "name": "worker name",
//   "email": "worker email",
//   "password": "worker password",
//   "address": "worker address",
//   "phoneNumber": "worker phone number",
//   "wilaya": "worker wilaya" as an Integer 1-58,
//   "services": ["house", "pool", "afterEvent", "restaurant", "window", "car", "dish"] // this has the services that the worker and his team can provide,
//   *all the prices should be a Float*
//   "prices": {
//     "priceForAllCar": "price for all car",
//     "priceForOutsideCar": "price for outside car",
//     "priceForInsideCar": "price for inside car",
//     "priceForDish": "price for dish",
//     "priceForMeter": "price for meter",
//     "priceForRoom": "price for room",
//     "priceForWindow": "price for window"
//   },
//   "teamMembers": [{name: "team member name"}.....] // this is optional
// }
// the response for this controller should be structered as followed
// {
//   "message": "Worker added successfully",
//   "worker": {
//     "id": "worker id",
//     "name": "worker name",
//     "email": "worker email",
//     "password": "worker password",
//     "address": "worker address",
//     "phoneNumber": "worker phone number",
//     "wilaya": "worker wilaya",
//     "workerPrices": {
//       "id": "worker price id",
//       "priceForAllCar": "price for all car",
//       "priceForOutsideCar": "price for outside car",
//       "priceForInsideCar": "price for inside car",
//       "priceForDish": "price for dish",
//       "priceForMeter": "price for meter",
//       "priceForRoom": "price for room",
//       "priceForWindow": "price for window"
//     },
//     "role": "worker"
//   }
// }
// if an error occured the response should be structered as followed
// {
//   "message": "An error occured"
// }
// locahlhost:5000/api/admin/addWorker
router.post("/addWorker", addWorker);

router.get("/workers", getWorkers);

router.post("/offer", addOffer);

export default router;
