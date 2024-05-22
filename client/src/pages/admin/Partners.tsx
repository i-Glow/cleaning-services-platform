import { addWorker, getWorkers } from "@/api/admin";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import cities from "@/utils/cities";
import services from "@/utils/services";
import { CirclePlus, CircleUserRound } from "lucide-react";
import { FormEvent, SetStateAction, useEffect, useState } from "react";

export default function Partners() {
  const { toast } = useToast();

  const [partners, setPartners] = useState<WorkerAccount[]>([]);
  const [team, setTeam] = useState("");
  const [details, setDetails] = useState<WorkerAccount>({
    address: "",
    email: "",
    name: "",
    password: "",
    phoneNumber: "",
    prices: {},
    services: [],
    wilaya: 0,
    teamMembers: [],
  });

  const prices = {
    priceForDish: "prix pour la vaisselle",
    priceForRoom: "prix pour la chambre",
    priceForWindow: "prix pour la fenêtre",
    priceForMeter: "prix pour le mètre carré",
    priceForAllCar: "prix pour toute la voiture",
    priceForInsideCar: "prix pour l'intérieur de la voiture",
    priceForOutsideCar: "prix pour l'extérieur de la voiture",
  };

  const getPartners = async () => {
    try {
      const res = await getWorkers();

      setPartners(res.data.workers);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNewWorker = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const teamMembers = team.split(",").map((mbr) => ({ name: mbr }));

      const res = await addWorker({ ...details, teamMembers });

      setPartners((prev) => [...prev, res.data.worker]);
      setDetails({
        address: "",
        email: "",
        name: "",
        password: "",
        phoneNumber: "",
        prices: {},
        services: [],
        wilaya: 0,
        teamMembers: [],
      });
      toast({
        title: "Nouveau partenaire cree",
        type: "foreground",
        duration: 5000,
        className: "bg-green-500 text-white",
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPartners();
  }, []);

  return (
    <main className="my-10">
      <Toaster />
      <div className="grid grid-cols-3 max-w-[1280px] mx-10 lg:mx-auto gap-x-4 gap-y-6">
        <Dialog>
          <DialogTrigger>
            <Card className="cursor-pointer h-full">
              <CardContent className="flex justify-center items-center h-full">
                <CirclePlus className="text-gray-400" size={38} />
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent className="md:min-w-[768px]">
            <form onSubmit={handleNewWorker}>
              <DialogHeader className="mb-4">
                <DialogTitle>
                  <p>Nouveau Partenaire</p>
                </DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-x-8 md:flex-row">
                <div className="flex flex-col gap-4 flex-1">
                  <Input
                    placeholder="Nom"
                    type="text"
                    onChange={(e) =>
                      setDetails((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                  <Input
                    placeholder="email"
                    type="email"
                    onChange={(e) =>
                      setDetails((prev) => ({ ...prev, email: e.target.value }))
                    }
                  />
                  <Input
                    placeholder="mot de passe"
                    type="password"
                    onChange={(e) =>
                      setDetails((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                  />
                  <Input
                    placeholder="adresse"
                    type="text"
                    onChange={(e) =>
                      setDetails((prev) => ({
                        ...prev,
                        address: e.target.value,
                      }))
                    }
                  />
                  <Input
                    placeholder="telephone"
                    type="text"
                    onChange={(e) =>
                      setDetails((prev) => ({
                        ...prev,
                        phoneNumber: e.target.value,
                      }))
                    }
                  />
                  <CitySelector setValue={setDetails} />
                  <p className="text-sm pl-2 font-medium">services:</p>
                  <ServiceSelector setValue={setDetails} value={details} />
                </div>
                <div></div>
                <div className="flex flex-col gap-2 flex-1">
                  <p className="text-sm pl-2 font-medium">Equipe:</p>
                  <Input
                    type="text"
                    placeholder="John, Jane, Doe"
                    onChange={(e) => {
                      setTeam(e.target.value);
                    }}
                  />
                  <p className="text-sm pl-2 font-medium">prix des services:</p>
                  {[
                    "priceForAllCar",
                    "priceForOutsideCar",
                    "priceForInsideCar",
                    "priceForDish",
                    "priceForMeter",
                    "priceForRoom",
                    "priceForWindow",
                  ].map((svc) => (
                    <Input
                      key={svc}
                      placeholder={prices[svc as keyof typeof prices]}
                      type="number"
                      onChange={(e) =>
                        setDetails((prev) => ({
                          ...prev,
                          prices: {
                            ...prev.prices,
                            [svc]: e.target.valueAsNumber,
                          },
                        }))
                      }
                    />
                  ))}
                </div>
              </div>
              <DialogFooter className="mt-4">
                <Button variant="outline" type="reset">
                  Annuler
                </Button>
                <Button type="submit">Creer</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
        {partners.map((partner) => (
          <Card className="overflow-hidden" key={partner.id}>
            <CardHeader>
              <div className="flex gap-2">
                <CircleUserRound />
                <p>{partner.name}</p>
              </div>
            </CardHeader>
            <CardContent>
              <p>Email: {partner.email}</p>
              <p>Telephone: {partner.phoneNumber}</p>
              <p>
                Specialites:{" "}
                {partner?.workerPrices?.services.map(
                  (svc, idx) =>
                    services.find((service) => service.api === svc)?.name +
                    (idx < partner?.workerPrices?.services?.length! - 1
                      ? ", "
                      : "")
                )}
              </p>
              <p>
                Adresse:{" "}
                {
                  cities.find((city) => city.id === String(partner.wilaya))
                    ?.name
                }
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}

function CitySelector({ setValue }: any) {
  return (
    <Select
      onValueChange={(val) =>
        setValue((prev: WorkerAccount) => ({ ...prev, wilaya: Number(val) }))
      }
    >
      <SelectTrigger>
        <SelectValue placeholder="Ville" />
      </SelectTrigger>
      <SelectContent className="rounded-[8px]">
        {cities.map((city) => (
          <SelectItem
            key={city.id}
            value={city.id}
            className="rounded-[4px] cursor-pointer"
          >
            <p>
              {city.id}. {city.name}
            </p>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

function ServiceSelector({
  setValue,
  value,
}: {
  setValue: React.Dispatch<SetStateAction<WorkerAccount>>;
  value: WorkerAccount | undefined;
}) {
  const updateServices = (service: string) => {
    const newServices = value?.services.includes(service)
      ? value.services.filter((el) => el !== service)
      : [...(value?.services as any), service];

    setValue((prev) => ({
      ...prev,
      services: newServices,
    }));
  };

  return (
    <div className="flex flex-wrap gap-2">
      {services.map((svc) => (
        <Badge
          key={svc.api}
          className={
            (value?.services.includes(svc.api)
              ? "hover:bg-primary "
              : "bg-white text-black border ") + "cursor-pointer"
          }
          onClick={() => updateServices(svc.api)}
        >
          {svc.name}
        </Badge>
      ))}
    </div>
  );
}
