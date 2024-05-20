import { addWorker } from "@/api/admin";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
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
import { FormEvent, SetStateAction, useState } from "react";
import CardButton from "../worker_dashboard/CardButton";

export default function Partners() {
  const { toast } = useToast();

  const [partners, setPartners] = useState([]);
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

  const getPartners = async () => {};

  const handleNewWorker = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await addWorker(details);
      console.log(res);
      // setPartners((prev) => [...prev, res.data.worker])
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
                <div className="flex flex-col gap-2 flex-1">
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
                      placeholder={svc}
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
              <DialogFooter>
                <Button variant="outline" type="reset">
                  Annuler
                </Button>
                <Button type="submit">Creer</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
        {[...Array(5)].map((el) => (
          <Card className="overflow-hidden" key={el}>
            <CardHeader>
              <div className="flex gap-2">
                <CircleUserRound />
                <p>Mohammed</p>
              </div>
            </CardHeader>
            <CardContent>
              <p>Sexe: Homme</p>
              <p>Email: mou256@gmail.com</p>
              <p>Telephone: 0987654321</p>
              <p>Specialites: Voiture, maison</p>
              <p>Adresse: Oran</p>
            </CardContent>
            <CardFooter className="p-0">
              <CardButton variant="danger">Supprimer</CardButton>
            </CardFooter>
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
