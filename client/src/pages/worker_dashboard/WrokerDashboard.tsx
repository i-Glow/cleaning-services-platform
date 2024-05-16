import Nav from "@/components/Nav";
import { Tabs } from "@/components/ui/tabs";
import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { useState } from "react";
import Tab from "./Tab";

export default function WrokerDashboard() {
  const [tab, setTab] = useState("accepted");

  return (
    <main className="w-full">
      <Nav />
      <div className="w-[1440px] mx-auto">
        <Tabs defaultValue="accepted" onValueChange={(val) => setTab(val)}>
          <TabsList className="flex gap-3">
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
              value="finished"
              className={
                (tab === "finished" ? `bg-muted rounded-sm border` : "") +
                " px-3 py-1"
              }
            >
              Terminé
            </TabsTrigger>
            <TabsTrigger
              value="canceled"
              className={
                (tab === "canceled" ? `bg-muted rounded-sm border` : "") +
                " px-3 py-1"
              }
            >
              Annulé
            </TabsTrigger>
            <TabsTrigger
              value="rejected"
              className={
                (tab === "rejected" ? `bg-muted rounded-sm border` : "") +
                " px-3 py-1"
              }
            >
              Refusé
            </TabsTrigger>
          </TabsList>
          <Tab type={tab} />
        </Tabs>
      </div>
    </main>
  );
}
