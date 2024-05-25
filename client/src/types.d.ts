type User = {
  id?: string;
  name: string;
  email?: string;
  role: string;
  password: string;
  address: string;
  phoneNumber: string;
  wilaya: number;
  role: string;
  workerPrices?: any;
};

type WorkerAccount = {
  id?: string;
  name: string;
  email: string;
  password: string;
  address: string;
  phoneNumber: string;
  wilaya: number;
  services: string[];
  workerPrices?: {
    id: string;
    priceForAllCar?: number;
    priceForOutsideCar?: number;
    priceForInsideCar?: number;
    priceForDish?: number;
    priceForMeter?: number;
    priceForRoom?: number;
    priceForWindow?: number;
    services: string[];
  };
  prices?: {
    priceForAllCar?: number;
    priceForOutsideCar?: number;
    priceForInsideCar?: number;
    priceForDish?: number;
    priceForMeter?: number;
    priceForRoom?: number;
    priceForWindow?: number;
  };
  teamMembers: { name: string }[];
};

type Offer = {
  carCleaning: string;
  clientId: string;
  date: string;
  id: string;
  meters: number;
  numberOfDishes: number;
  numberOfRooms: number;
  numberOfWindows: number;
  price: number;
  state: OfferTypes;
  type: string;
  worker: {
    id: string;
    address: string;
    email: string;
    id: string;
    name: string;
    password: string;
    phoneNumber: string;
    role: string;
    wilaya: number;
    workerPricesId: string;
  };
  workerId: string;
};

type OfferTypes = "pending" | "accepted" | "done" | "refused" | "cancelled";

type Partner = {
  id: string;
  name: string;
  email: string;
  password: string;
  address: string;
  phoneNumber: string;
  services: string[];
  wilaya: number;
  workerPrices: {
    id: string;
    services: string[];
    priceForAllCar: number;
    priceForOutsideCar: number;
    priceForInsideCar: number;
    priceForDish: number;
    priceForMeter: number;
    priceForRoom: number;
    priceForWindow: number;
  };
  role: "worker";
  teamMemberCount: number;
};

type OrderDetails = {
  date: string;
  price: number;
  type: string;
  clientId: string;
  workerId: string;
  numberOfDishes?: number;
  numberOfWindows?: number;
  numberOfRooms?: number;
  meters?: number;
  carCleaning: "inside" | "outside" | "all" | "";
};

type Order = {
  carCleaning?: string;
  client: User;
  clientId: string;
  date: string;
  id: string;
  meters?: number;
  numberOfDishes?: number;
  numberOfRooms?: number;
  numberOfWindows?: number;
  price: number;
  state: OfferTypes;
  type: string;
  workerId: string;
};

type Reduction = {
  id: string;
  description: string;
  startDate: DateTime;
  endDate: DateTime;
  reductionPercentage: number;
};
