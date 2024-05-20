import { getWorkerOrders } from "@/api/worker";
import Nav from "@/components/Nav";
import { Tabs } from "@/components/ui/tabs";
import { useAuth } from "@/lib/context/auth";
import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { useEffect, useState } from "react";
import Tab from "./Tab";

export default function WrokerDashboard() {
  const { user } = useAuth();
  const [tab, setTab] = useState<OfferTypes>("pending");
  const [orders, setOrders] = useState<Order[]>([]);

  const initialOrders = async () => {
    try {
      const res = await getWorkerOrders(user?.id!);

      setOrders(res.data.orders.filter((el: any) => el.state === tab));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    initialOrders();
  }, [tab]);

  return (
    <main className="w-full">
      <Nav />
      <div className="max-w-[1440px] mx-10 lg:mx-auto">
        <Tabs
          defaultValue="pending"
          onValueChange={(val) => setTab(val as OfferTypes)}
        >
          <TabsList className="flex gap-3">
            <TabsTrigger
              value="pending"
              className={
                (tab === "pending" ? `bg-muted rounded-sm border` : "") +
                " px-3 py-1"
              }
            >
              Nouveau
            </TabsTrigger>
            <TabsTrigger
              value="accepted"
              className={
                (tab === "accepted" ? `bg-muted rounded-sm border` : "") +
                " px-3 py-1"
              }
            >
              Accepté
            </TabsTrigger>
            <TabsTrigger
              value="done"
              className={
                (tab === "done" ? `bg-muted rounded-sm border` : "") +
                " px-3 py-1"
              }
            >
              Terminé
            </TabsTrigger>
            <TabsTrigger
              value="cancelled"
              className={
                (tab === "cancelled" ? `bg-muted rounded-sm border` : "") +
                " px-3 py-1"
              }
            >
              Annulé
            </TabsTrigger>
            <TabsTrigger
              value="refused"
              className={
                (tab === "refused" ? `bg-muted rounded-sm border` : "") +
                " px-3 py-1"
              }
            >
              Refusé
            </TabsTrigger>
          </TabsList>
          <Tab type={tab} orders={orders} />
        </Tabs>
      </div>
    </main>
  );
}
