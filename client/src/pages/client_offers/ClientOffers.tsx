import { getOffers } from "@/api/client";
import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";

function ClientOffers() {
  const [offers, setOffers] = useState<Reduction[]>([]);
  const { toast } = useToast();

  const fetchOffers = async () => {
    try {
      const result: any = await getOffers();
      console.log(result.data.offers);
      setOffers(result.data.offers);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchOffers();
  }, []);

  return (
    <main>
      <Toaster />
      <Nav />
      <div className="max-w-[1280px] mx-4 lg:mx-auto">
        <h2 className="font-primary mb-4">Offres</h2>
      </div>
      <div className="w-full h-[500px] px-24 mt-10">
        {offers.length !== 0 ? (
          offers.map((offer: any, key: number) => (
            <Card
              onClick={() => {
                toast({
                  title: "Offre",
                });
                toast({
                  title: `Vous avez une réduction de ${offer.reductionPercentage} %`,
                  type: "foreground",
                  duration: 5000,
                  className: "bg-green-500 text-white",
                });
              }}
              className="w-1/4 h-[300px] bg-gray-200 hover:bg-gray-300 hover:cursor-pointer mx-4"
              key={key}
            >
              <div className="w-full h-1/3 flex justify-center items-center">
                <h3>{`${new Date(offer.startDate).toLocaleDateString(
                  "fr-FR"
                )} - ${new Date(offer.endDate).toLocaleDateString(
                  "fr-FR"
                )}`}</h3>
              </div>
              <div className="h-1/3 w-full flex justify-center items-center">
                <h1>{offer.reductionPercentage.toString()} %</h1>
              </div>
              <div className="h-1/3 w-full flex justify-center items-center">
                {/* <p>{offer.description}</p> */}
                <p className="text-center">
                  this is an offer made because the event of mother day so y'all
                  are getting a reduction
                </p>
              </div>
            </Card>
          ))
        ) : (
          <div className="w-full h-[500px] flex justify-center items-center">
            <h2>Aucune offre</h2>
          </div>
        )}
      </div>
    </main>
  );
}

export default ClientOffers;
