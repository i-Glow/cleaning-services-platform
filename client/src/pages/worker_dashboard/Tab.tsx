import { updateOrder } from "@/api/worker";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import services from "@/utils/services";
import { CalendarClock, MapPin, Phone, User } from "lucide-react";
import CardButton from "./CardButton";

export default function Tab({
  type,
  orders,
}: {
  type: OfferTypes;
  orders: Order[];
}) {
  return (
    <TabsContent
      value={type}
      className="w-full min-h-[300px] bg-muted border rounded-sm p-4 grid grid-cols-3 gap-x-4 gap-y-6"
    >
      {orders?.map((order) => (
        <Card key={order.id} className="overflow-hidden h-max">
          <CardTitle className="px-6 py-4 flex items-center justify-between">
            <p className="text-xl">
              {services.find((svc) => order.type === svc.api)?.name}
            </p>
          </CardTitle>
          <CardContent>
            <div className="flex items-center gap-3">
              <User size={18} />
              <p>{order.client.name}</p>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={18} />
              <p>{order.client.address}</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} />
              <p>{order.client.phoneNumber}</p>
            </div>
            <div className="flex items-center gap-3">
              <CalendarClock size={18} />
              <p>{new Date(order.date).toLocaleDateString()}</p>
            </div>
            <div className="flex gap-2 items-center mt-2">
              <p>Prix offert: {order.price} DA</p>
            </div>
            {!!order.carCleaning && <p>Voiture: {order.carCleaning}</p>}
            {order.meters !== 0 && <p>Metres: {order.meters}</p>}
            {order.numberOfDishes !== 0 && (
              <p>Vaisseles: {order.numberOfDishes}</p>
            )}
            {order.numberOfRooms !== 0 && (
              <p>Chambres: {order.numberOfRooms}</p>
            )}
            {order.numberOfWindows !== 0 && (
              <p>Vitres: {order.numberOfWindows}</p>
            )}
          </CardContent>
          <CardFooter className="flex p-0 border">
            <FooterContent type={order.state} id={order.id} />
          </CardFooter>
        </Card>
      ))}
    </TabsContent>
  );
}

function FooterContent({ id, type }: { id: string; type: OfferTypes }) {
  const handleClick = async (state: string) => {
    try {
      await updateOrder({ id, state });

      location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  switch (type) {
    case "accepted":
      return (
        <>
          <CardButton variant="danger" onClick={() => handleClick("cancelled")}>
            Annuler
          </CardButton>
          <CardButton variant="success" onClick={() => handleClick("done")}>
            Terminer
          </CardButton>
        </>
      );
    case "pending":
      return (
        <>
          <CardButton variant="danger" onClick={() => handleClick("refused")}>
            Refuser
          </CardButton>
          <CardButton variant="success" onClick={() => handleClick("accepted")}>
            Accepter
          </CardButton>
        </>
      );
    default:
      return <p className="w-full text-center py-2">{type}</p>;
  }
}
