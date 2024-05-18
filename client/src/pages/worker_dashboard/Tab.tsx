import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { defaultMaxListeners } from "events";
import {
  Ban,
  CalendarClock,
  CircleCheckBig,
  CircleX,
  MapPin,
  Ruler,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";
import CardButton from "./CardButton";

export default function Tab({ type }: { type: OfferTypes }) {
  const [offers, setOffers] = useState<Offer[]>([]);

  const getOffers = (type: OfferTypes) => {
    setOffers([
      {
        id: "c29",
        type: "Maison",
        client: "Abdelhamid Sebki",
        worker: "Abdelhamid Sebki",
        address: "16 logts, Sidi Ammar, Annaba",
        surface: 46,
        date: "17 Novermber 2024 13:00",
        price: 7200,
        status: "new",
      },
      {
        id: "c39",
        type: "Maison",
        client: "Abdelhamid Sebki",
        worker: "Abdelhamid Sebki",
        address: "UV4 logts, Sidi Ammar, Annaba",
        surface: 46,
        date: "17 Novermber 2024 13:00",
        price: 7200,
        status: "accepted",
      },
      {
        id: "f39",
        type: "Maison",
        client: "Abdelhamid Sebki",
        worker: "Abdelhamid Sebki",
        address: "UV4 logts, Sidi Ammar, Annaba",
        surface: 46,
        date: "17 Novermber 2024 13:00",
        price: 7200,
        status: "canceled",
      },
      {
        id: "a20",
        type: "Maison",
        client: "Abdelhamid Sebki",
        worker: "Abdelhamid Sebki",
        address: "UV4 logts, Sidi Ammar, Annaba",
        surface: 46,
        date: "17 Novermber 2024 13:00",
        price: 7200,
        status: "finished",
      },
    ]);
  };

  useEffect(() => {
    getOffers(type);
  }, []);

  return (
    <TabsContent
      value={type}
      className="w-full min-h-[300px] bg-muted border rounded-sm p-4 grid grid-cols-3 gap-x-4 gap-y-6"
    >
      {offers.length > 0
        ? offers.map((offer) => (
            <Card key={offer.id} className="overflow-hidden h-max">
              <CardTitle className="px-6 py-4 flex items-center justify-between">
                <p className="text-xl">{offer.type}</p>
              </CardTitle>
              <CardContent>
                <div className="flex items-center gap-3">
                  <User size={18} />
                  <p>{offer.client}</p>
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
                  <p>Prix offert: {offer.price} DA</p>
                </div>
              </CardContent>
              <CardFooter className="flex p-0 border">
                <FooterContent type={offer.status} />
              </CardFooter>
            </Card>
          ))
        : null}
    </TabsContent>
  );
}

function FooterContent({ type }: { type: OfferTypes }) {
  switch (type) {
    case "accepted":
      return (
        <>
          <CardButton variant="danger">Annuler</CardButton>
          <CardButton variant="success">Terminer</CardButton>
        </>
      );
    case "new":
      return (
        <>
          <CardButton variant="danger">Refuser</CardButton>
          <CardButton variant="success">Accepter</CardButton>
        </>
      );
    default:
      return <p className="w-full text-center py-2">{type}</p>;
  }
}
