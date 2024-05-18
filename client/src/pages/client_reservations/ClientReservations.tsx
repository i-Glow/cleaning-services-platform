import Nav from "@/components/Nav";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import {
  Ban,
  CalendarClock,
  CircleCheckBig,
  CirclePlus,
  CircleX,
  Clock3,
  MapPin,
  Ruler,
  User,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import Fidelity from "./Fidelity";
import CardButton from "../worker_dashboard/CardButton";

export default function ClientReservations() {
  const [offers, setOffers] = useState<Offer[]>([]);

  const pendingOffers = offers.filter(
    (offer) => offer.status === "accepted" || offer.status === "new"
  );

  const otherOffers = offers.filter(
    (offer) => offer.status !== "accepted" && offer.status !== "new"
  );

  const getOffers = (type: OfferTypes) => {
    setOffers([
      {
        id: "c29",
        type: "Maison",
        client: "Abdelhamid Sebki",
        worker: "Abdelhamid Sebki",
        address: "16 logts, Sidi Ammar, Annaba",
        surface: 46,
        date: "17 Novermber 2024, 13:00",
        price: 7200,
        status: "rejected",
      },
      {
        id: "c29",
        client: "Abdelhamid Sebki",
        type: "Maison",
        worker: "Abdelhamid Sebki",
        address: "16 logts, Sidi Ammar, Annaba",
        surface: 46,
        date: "17 Novermber 2024, 13:00",
        price: 7200,
        status: "new",
      },
      {
        id: "c39",
        client: "Abdelhamid Sebki",
        type: "Maison",
        worker: "Abdelhamid Sebki",
        address: "UV4 logts, Sidi Ammar, Annaba",
        surface: 46,
        date: "17 Novermber 2024, 13:00",
        price: 7200,
        status: "finished",
      },
      {
        id: "f39",
        client: "Abdelhamid Sebki",
        type: "Apres Chantier",
        worker: "Abdelhamid Sebki",
        address: "UV4 logts, Sidi Ammar, Annaba",
        surface: 46,
        date: "17 Novermber 2024, 13:00",
        price: 7200,
        status: "accepted",
      },
      {
        id: "a20",
        client: "Abdelhamid Sebki",
        type: "Piscine",
        worker: "Abdelhamid Sebki",
        address: "UV4 logts, Sidi Ammar, Annaba",
        surface: 46,
        date: "17 Novermber 2024, 13:00",
        price: 7200,
        status: "canceled",
      },
      {
        id: "a20",
        client: "Abdelhamid Sebki",
        type: "Piscine",
        worker: "Abdelhamid Sebki",
        address: "UV4 logts, Sidi Ammar, Annaba",
        surface: 46,
        date: "17 Novermber 2024, 13:00",
        price: 7200,
        status: "canceled",
      },
    ]);
  };

  useEffect(() => {
    getOffers("accepted");
  }, []);

  return (
    <main>
      <Nav />
      <div className="max-w-[1280px] mx-auto my-10">
        <Fidelity />
        <div className="mt-6">
          <p className="mb-4">Commandes en cours</p>
          <div className="grid grid-cols-3  gap-x-4 gap-y-6">
            {pendingOffers.length > 0
              ? pendingOffers.map((offer) => (
                  <Card
                    className="min-w-[280px] overflow-hidden"
                    key={offer.id}
                  >
                    <CardTitle className="px-6 py-4 flex items-center justify-between">
                      <p className="text-xl">{offer.type}</p>
                      {offer.status === "new" && <CirclePlus color="blue" />}
                      {offer.status === "accepted" && <Clock3 color="orange" />}
                    </CardTitle>
                    <CardContent>
                      <div className="flex items-center gap-3">
                        <User size={18} />
                        <p>{offer.worker}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin size={18} />
                        <p>{offer.address}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Ruler size={18} />
                        <p>{offer.surface} m²</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <CalendarClock size={18} />
                        <p>{offer.date}</p>
                      </div>
                      <p className="mt-2">Prix offert: {offer.price} DA</p>
                    </CardContent>
                    <CardFooter className="flex p-0 border">
                      <CardButton variant="danger">
                        <div className="flex gap-1">
                          <CircleX size={18} /> <p>Annuler</p>
                        </div>
                      </CardButton>
                    </CardFooter>
                  </Card>
                ))
              : null}
          </div>
        </div>
        <div className="mt-6">
          <p className="mb-4">Anciens Commandes</p>
          <div className="grid grid-cols-3 gap-x-4 gap-y-6">
            {otherOffers.length > 0
              ? otherOffers.map((offer) => (
                  <Card key={offer.id}>
                    <CardTitle className="px-6 py-4 flex items-center justify-between">
                      <p className="text-xl">{offer.type}</p>
                      {offer.status === "finished" && (
                        <CircleCheckBig color="green" />
                      )}
                      {offer.status === "canceled" && <CircleX color="red" />}
                      {offer.status === "rejected" && <Ban color="red" />}
                    </CardTitle>
                    <CardContent>
                      <div className="flex items-center gap-3">
                        <User size={18} />
                        <p>{offer.worker}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin size={18} />
                        <p>{offer.address}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Ruler size={18} />
                        <p>{offer.surface} m²</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <CalendarClock size={18} />
                        <p>{offer.date}</p>
                      </div>
                      <div className="flex gap-2 items-center mt-2">
                        <p>Prix offert: </p>
                        <p className="bg-green-200 text-green-500 py-1 px-3 rounded">
                          {offer.price} DA
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))
              : null}
          </div>
        </div>
      </div>
    </main>
  );
}
