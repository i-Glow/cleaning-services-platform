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
  Phone,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";
import Fidelity from "./Fidelity";
import CardButton from "../worker_dashboard/CardButton";
import { cancelOrder, getOrders } from "@/api/client";
import { useAuth } from "@/lib/context/auth";
import services from "@/utils/services";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

export default function ClientReservations() {
  const { user } = useAuth();
  const { toast } = useToast();

  const [offers, setOffers] = useState<Offer[]>([]);

  const pendingOffers = offers.filter(
    (offer) => offer.state === "accepted" || offer.state === "pending"
  );

  const otherOffers = offers.filter(
    (offer) => offer.state !== "accepted" && offer.state !== "pending"
  );

  const getOffers = async (userId: string) => {
    try {
      const res = await getOrders(userId);

      setOffers(res.data.orders);
      console.log(res.data.orders);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancelOrder = async (data: { id: string }) => {
    try {
      const res = await cancelOrder(data);

      if (res.status !== 200) return;
      toast({
        title: "Commande annulée",
        type: "foreground",
        duration: 5000,
        className: "bg-green-500 text-white",
      });

      getOffers(user?.id!);
    } catch (error) {
      toast({
        title: "Erreur",
        type: "foreground",
        duration: 5000,
        className: "bg-red-500 text-white",
      });
      console.error(error);
    }
  };

  useEffect(() => {
    getOffers(user?.id!);
  }, []);

  return (
    <main>
      <Toaster />
      <Nav />
      <div className="max-w-[1280px] mx-10 lg:mx-auto my-10">
        <Fidelity />
        <div className="mt-6">
          <p className="mb-4">Commandes en cours</p>
          <div className="grid grid-cols-3  gap-x-4 gap-y-6">
            {pendingOffers.length > 0
              ? pendingOffers.map((offer) => (
                  <Card
                    className="min-w-[280px] overflow-hidden flex flex-col"
                    key={offer?.id}
                  >
                    <CardTitle className="px-6 py-4 flex items-center justify-between">
                      <p className="text-xl">
                        {services.find((svc) => svc.api === offer?.type)?.name}
                      </p>
                      {offer?.state === "pending" && (
                        <CirclePlus color="blue" />
                      )}
                      {offer?.state === "accepted" && <Clock3 color="orange" />}
                    </CardTitle>
                    <CardContent>
                      <div className="flex items-center gap-3">
                        <User size={18} />
                        <p>{offer?.worker.name}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin size={18} />
                        <p>{offer?.worker.address}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone size={18} />
                        <p>{offer?.worker.phoneNumber} m²</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <CalendarClock size={18} />
                        <p>{new Date(offer?.date).toDateString()}</p>
                      </div>
                      <p className="mt-2">Prix offert: {offer.price} DA</p>
                    </CardContent>
                    <CardFooter className="flex p-0 border mt-auto">
                      <CardButton
                        variant="danger"
                        onClick={() => handleCancelOrder({ id: offer.id })}
                      >
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
                  <Card key={offer?.id}>
                    <CardTitle className="px-6 py-4 flex items-center justify-between">
                      <p className="text-xl">
                        {services.find((svc) => svc.api === offer?.type)?.name}
                      </p>
                      {offer?.state === "done" && (
                        <CircleCheckBig color="green" />
                      )}
                      {offer?.state === "cancelled" && <CircleX color="red" />}
                      {offer?.state === "refused" && <Ban color="red" />}
                    </CardTitle>
                    <CardContent>
                      <div className="flex items-center gap-3">
                        <User size={18} />
                        <p>{offer?.worker?.name}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin size={18} />
                        <p>{offer?.worker?.address}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone size={18} />
                        <p>{offer?.worker?.phoneNumber} m²</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <CalendarClock size={18} />
                        <p>{new Date(offer?.date).toDateString()}</p>
                      </div>
                      <div className="flex gap-2 items-center mt-2">
                        <p>Prix offert: </p>
                        <p className="bg-green-200 text-green-500 py-1 px-3 rounded">
                          {offer?.price} DA
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
