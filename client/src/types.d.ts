type User = {
  firstname: string;
  lastname?: string;
  email?: string;
  role: string;
};

type Offer = {
  id: string;
  type: string;
  client: string;
  worker: string;
  address: string;
  surface: number;
  date: string;
  price: number;
  status: OfferTypes;
};

type OfferTypes = "new" | "accepted" | "finished" | "rejected" | "canceled";

type Partner = {
  id: string;
  name: string;
  services: string[];
  jobsDone: number;
  city: string;
};
