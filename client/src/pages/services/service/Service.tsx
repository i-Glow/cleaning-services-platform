import { useLocation, useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import cities from "@/utils/cities";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CircleUserRound, Mail, MapPin, Phone, UsersRound } from "lucide-react";
import CardButton from "@/pages/worker_dashboard/CardButton";
import { FormEvent, useEffect, useRef, useState } from "react";
import services from "@/utils/services";
import { useAuth } from "@/lib/context/auth";
import { getWorkers } from "@/api/worker";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { placeOrder } from "@/api/client";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

export default function Service() {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();

  const formRef = useRef(null);

  const [selectedCity, setSelectedCity] = useState(user?.wilaya! || 0);
  const [posts, setPosts] = useState<Partner[]>([]);
  const [total, setTotal] = useState<Number>(0);

  const prices = {
    priceForDish: "prix pour la vaisselle",
    priceForRoom: "prix pour la chambre",
    priceForWindow: "prix pour la fenêtre",
    priceForMeter: "prix pour le mètre carré",
    priceForAllCar: "prix pour toute la voiture",
    priceForInsideCar: "prix pour l'intérieur de la voiture",
    priceForOutsideCar: "prix pour l'extérieur de la voiture",
  };
  const servicesForms = {
    house: ["priceForDish", "priceForRoom", "priceForWindow"],
    dish: ["priceForDish"],
    afterEvent: ["priceForDish", "priceForMeter"],
    window: ["priceForWindow"],
    restaurant: ["priceForMeter", "priceForDish"],
    pool: ["priceForMeter"],
    car: ["priceForInsideCar", "priceForOutsideCar", "priceForAllCar"],
  };
  const servicesNames = {
    maison: "house",
    restaurant: "restaurant",
    piscine: "pool",
    vitre: "window",
    vaisseles: "dish",
    "apres-evenement": "afterEvent",
    voiture: "car",
  };

  const countTotal = (workerId: string) => {
    const formData = new FormData(formRef?.current!);
    const data: any = Object.fromEntries(formData.entries());
    const numberXprice = {
      priceForDish: "numberOfDishes",
      priceForRoom: "numberOfRooms",
      priceForWindow: "numberOfWindows",
      priceForMeter: "meters",
    };
    const serviceName =
      servicesNames[
        location.pathname.split("/")[2] as keyof typeof servicesNames
      ];
    const worker = posts.find((post) => post.id === workerId);
    const fields = servicesForms[serviceName as keyof typeof servicesForms];
    let totalPrice = 0;

    fields.map((field) => {
      let workerPrice = worker?.workerPrices[field as keyof typeof prices] ?? 0;
      let userInput =
        data[
          numberXprice[field as keyof typeof numberXprice] as keyof typeof data
        ];
      totalPrice += Number(workerPrice) * Number(userInput);
    });
    if (serviceName == "car") {
      switch (String(data.carCleaning)) {
        case "outside":
          totalPrice = Number(worker?.workerPrices["priceForOutsideCar"]);
          break;
        case "all":
          totalPrice = Number(worker?.workerPrices["priceForAllCar"]);
          break;
        case "inside":
          totalPrice = Number(worker?.workerPrices["priceForInsideCar"]);
          break;
      }
    }
    setTotal(totalPrice);
  };

  const getServicePosts = async (service: string, city: number) => {
    try {
      const res = await getWorkers(service, city);

      setPosts(res.data.workers);
    } catch (error) {
      console.error(error);
    }
  };

  const service = location.pathname.split("/").at(-1);
  const apiServiceName = services.find((svc) => svc.link === service)?.api;

  const getApiServiceName = (): string => {
    return apiServiceName as string;
  };

  useEffect(() => {
    const serviceName = getApiServiceName();

    getServicePosts(serviceName, selectedCity);
  }, [user, location.pathname, selectedCity]);

  const handlePlaceOrder = async (e: FormEvent, workerId: string) => {
    e.preventDefault();
    if (!user) return navigate("/login");

    const formData = new FormData(formRef?.current!);
    const data: any = Object.fromEntries(formData.entries());
    countTotal(workerId);

    const payload: OrderDetails = {
      ...data,
      price: Number(total),
      numberOfDishes: Number(data.numberOfDishes),
      numberOfRooms: Number(data.numberOfRooms),
      numberOfWindows: Number(data.numberOfWindows),
      meters: Number(data.meters),
      type: getApiServiceName(),
      clientId: user.id!,
      workerId,
    };
    if (data.carCleaning != null) {
      payload.carCleaning = String(data.carCleaning);
    }

    try {
      await placeOrder(payload);

      toast({
        title: "Commande place",
        type: "foreground",
        duration: 5000,
        className: "bg-green-500 text-white",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <Toaster />
      <div className="max-w-[1280px] mx-auto">
        <h2 className="font-primary mb-4 mt-8">
          {
            services.find(
              (svc) => svc.link === location.pathname.split("/").at(-1)
            )?.name
          }
        </h2>
        <div className="mb-4">
          <Select onValueChange={(val) => setSelectedCity(Number(val))}>
            <SelectTrigger className="w-[180px]">
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
        </div>
        {posts.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 mb-10">
            {posts.map((post, idx) => (
              <Card className="overflow-hidden flex flex-col" key={idx}>
                <CardHeader>
                  <div className="flex gap-2 items-center">
                    <CircleUserRound size={28} />
                    <p>{post.name}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <UsersRound size={20} />
                    <p>Nombre: </p>
                    <p>{post.teamMemberCount}</p>
                  </div>
                  <div className="flex gap-2">
                    <MapPin size={20} />
                    <p>Adresse: </p>
                    <p>
                      {
                        cities.find((city) => city.id === String(post.wilaya))
                          ?.name
                      }
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Mail size={20} />
                    <p>Email: </p>
                    <p>{post.email}</p>
                  </div>
                  <div className="flex gap-2">
                    <Phone size={20} />
                    <p>Telephone: </p>
                    <p>{post.phoneNumber}</p>
                  </div>
                  <div className="mt-4">
                    {Object.entries(post.workerPrices).map(
                      ([key, price]) =>
                        key !== "id" &&
                        key !== "services" &&
                        price && (
                          <p key={key}>
                            {prices[key as keyof typeof prices]}: {price} DA
                          </p>
                        )
                    )}
                  </div>
                </CardContent>
                <CardFooter className="p-0 mt-auto">
                  <Dialog>
                    <DialogTrigger className="w-full">
                      <CardButton variant="success">Demander</CardButton>
                    </DialogTrigger>
                    <DialogContent>
                      <form
                        ref={formRef}
                        className="[&>*]:mb-2"
                        onSubmit={(e) => handlePlaceOrder(e, post.id)}
                      >
                        <DialogHeader>
                          <p>Placer commande</p>
                        </DialogHeader>
                        <Input name="date" type="date" required />
                        {
                          // @ts-ignore
                          location.pathname.split("/")[2] === "maison" && (
                            <>
                              <Input
                                name="numberOfDishes"
                                type="number"
                                required
                                placeholder="Nombre de vaisselle"
                                onChange={() => {
                                  countTotal(post.id);
                                }}
                              />
                              <Input
                                name="numberOfRooms"
                                type="number"
                                required
                                placeholder="Nombre de chambres"
                                onChange={() => {
                                  countTotal(post.id);
                                }}
                              />
                              <Input
                                name="numberOfWindows"
                                type="number"
                                required
                                placeholder="Nombre de fenêtres"
                                onChange={() => {
                                  countTotal(post.id);
                                }}
                              />
                            </>
                          )
                        }
                        {
                          // @ts-ignore
                          location.pathname.split("/")[2] ===
                            "apres-evenement" && (
                            <>
                              <Input
                                name="numberOfDishes"
                                type="number"
                                required
                                placeholder="Nombre de vaisselle"
                                onChange={() => {
                                  countTotal(post.id);
                                }}
                              />
                              <Input
                                name="meters"
                                type="number"
                                required
                                placeholder="Nombre de mètres carrés"
                                onChange={() => {
                                  countTotal(post.id);
                                }}
                              />
                            </>
                          )
                        }
                        {
                          // @ts-ignore
                          location.pathname.split("/")[2] === "vaisseles" && (
                            <Input
                              name="numberOfDishes"
                              type="number"
                              required
                              placeholder="Nombre de vaisselle"
                              onChange={() => {
                                countTotal(post.id);
                              }}
                            />
                          )
                        }
                        {
                          // @ts-ignore
                          location.pathname.split("/")[2] === "restaurant" && (
                            <>
                              <Input
                                name="meters"
                                type="number"
                                required
                                placeholder="Nombre de mètres carrés"
                                onChange={() => {
                                  countTotal(post.id);
                                }}
                              />
                              <Input
                                name="numberOfDishes"
                                type="number"
                                required
                                placeholder="Nombre de vaisselle"
                                onChange={() => {
                                  countTotal(post.id);
                                }}
                              />
                            </>
                          )
                        }
                        {
                          // @ts-ignore
                          location.pathname.split("/")[2] ===
                            "apres-evenment" && (
                            <>
                              <Input
                                name="numberOfDishes"
                                type="number"
                                required
                                placeholder="Nombre de vaisselle"
                                onChange={() => {
                                  countTotal(post.id);
                                }}
                              />
                              <Input
                                name="meters"
                                type="number"
                                required
                                placeholder="Nombre de mètres carrés"
                                onChange={() => {
                                  countTotal(post.id);
                                }}
                              />
                            </>
                          )
                        }
                        {
                          // @ts-ignore
                          location.pathname.split("/")[2] === "piscine" && (
                            <Input
                              name="meters"
                              type="number"
                              required
                              placeholder="Nombre de mètres carrés"
                              onChange={() => {
                                countTotal(post.id);
                              }}
                            />
                          )
                        }
                        {
                          // @ts-ignore
                          location.pathname.split("/")[2] === "vitre" && (
                            <Input
                              name="numberOfWindows"
                              type="number"
                              required
                              placeholder="Nombre de fenêtres"
                              onChange={() => {
                                countTotal(post.id);
                              }}
                            />
                          )
                        }
                        {location.pathname.split("/")[2] === "voiture" && (
                          <Select name="carCleaning">
                            <SelectTrigger>
                              <SelectValue placeholder="type de nettoyage" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="inside">intérieur</SelectItem>
                              <SelectItem value="outside">extérieur</SelectItem>
                              <SelectItem value="all">tous</SelectItem>
                            </SelectContent>
                          </Select>
                        )}

                        <p className="pl-3">
                          prix totale: {total.toString()}DA
                        </p>
                        <DialogFooter>
                          <Button type="submit">Commander</Button>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center my-20">Aucun partenaire trouvé</p>
        )}
      </div>
    </main>
  );
}
