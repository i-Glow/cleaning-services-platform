import { updateUser } from "@/api/worker";
import Nav from "@/components/Nav";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/lib/context/auth";
import cities from "@/utils/cities";
import services from "@/utils/services";
import { SetStateAction, useRef, useState } from "react";

export default function WorkerAccount() {
  const { user, setUser } = useAuth();
  const { toast } = useToast();

  const [editMode, setEditMode] = useState(false);
  const firstInput = useRef<HTMLInputElement>(null);
  const [details, setDetails] = useState<WorkerAccount | undefined>({
    ...user,
    services: user?.workerPrices?.services!,
    prices: user?.workerPrices,
  } as any);

  const updateDetails = async () => {
    if (!details) return;

    try {
      const res = await updateUser(details);

      setUser(res.data.user);
      localStorage.setItem(
        "user",
        JSON.stringify({
          ...details,
          workerPrices: {
            ...details.prices,
            services: details.services,
          },
        })
      );
      setEditMode(false);
      toast({
        title: "information bien modifié",
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
      <Nav />
      <div className="p-4 sm:px-6 sm:py-0 max-w-[1280px] mx-auto my-10">
        <div className="border rounded-sm h-max p-4">
          <div className="flex justify-between items-center">
            <p className="font-bold">Compte</p>
            {editMode ? (
              <div className="flex gap-1">
                <Button variant="outline" onClick={() => setEditMode(false)}>
                  Annuler
                </Button>
                <Button onClick={updateDetails}>Sauvgarder</Button>
              </div>
            ) : (
              <Button
                onClick={() => {
                  setEditMode(true);
                  firstInput?.current?.focus();
                }}
              >
                Modifier
              </Button>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <Label className="pl-3">Nom</Label>
              <Input
                ref={firstInput}
                value={details?.name}
                readOnly={!editMode}
                onChange={(e) =>
                  setDetails(
                    (prev) =>
                      ({ ...prev, name: e.target.value } as WorkerAccount)
                  )
                }
              />
            </div>
            <div>
              <Label className="pl-3">Email</Label>
              <Input
                value={details?.email}
                readOnly={!editMode}
                onChange={(e) =>
                  setDetails(
                    (prev) =>
                      ({ ...prev, email: e.target.value } as WorkerAccount)
                  )
                }
              />
            </div>
            <div>
              <Label className="pl-3">Mot de passe</Label>
              <Input
                value={details?.password}
                readOnly={!editMode}
                type={editMode ? "text" : "password"}
                onChange={(e) =>
                  setDetails(
                    (prev) =>
                      ({ ...prev, password: e.target.value } as WorkerAccount)
                  )
                }
              />
            </div>
            <div>
              <Label className="pl-3">Adresse</Label>
              <Input
                value={details?.address}
                readOnly={!editMode}
                type="text"
                onChange={(e) =>
                  setDetails(
                    (prev) =>
                      ({ ...prev, address: e.target.value } as WorkerAccount)
                  )
                }
              />
            </div>
            <div>
              <Label className="pl-3">Telephone</Label>
              <Input
                value={details?.phoneNumber}
                readOnly={!editMode}
                type="text"
                onChange={(e) =>
                  setDetails(
                    (prev) =>
                      ({
                        ...prev,
                        phoneNumber: e.target.value,
                      } as WorkerAccount)
                  )
                }
              />
            </div>
            <div>
              <Label className="pl-3">Wilaya</Label>
              <Select
                disabled={!editMode}
                onValueChange={(val) =>
                  setDetails(
                    (prev) =>
                      ({ ...prev, wilaya: Number(val) } as WorkerAccount)
                  )
                }
              >
                <SelectTrigger>
                  <SelectValue
                    placeholder={
                      cities.find((city) => city.id === String(details?.wilaya))
                        ?.name
                    }
                  >
                    {
                      cities.find((city) => city.id === String(details?.wilaya))
                        ?.name
                    }
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem value={city.id} key={city.id}>
                      {city.id + ". " + city.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <ServiceSelector
              readOnly={editMode}
              value={details}
              setValue={setDetails}
            />
            <p>Prices: </p>
            <div>
              <Input
                placeholder="Voiture"
                value={details?.workerPrices?.priceForAllCar}
                readOnly={!editMode}
                type="number"
                onChange={(e) =>
                  setDetails(
                    (prev) =>
                      ({
                        ...prev,

                        prices: {
                          ...prev?.prices,
                          priceForAllCar: e.target.valueAsNumber,
                        },
                      } as WorkerAccount)
                  )
                }
              />
            </div>

            <div>
              <Input
                placeholder="Interieur de voiture"
                value={details?.prices?.priceForInsideCar}
                readOnly={!editMode}
                type="number"
                onChange={(e) =>
                  setDetails(
                    (prev) =>
                      ({
                        ...prev,
                        prices: {
                          ...prev?.prices,
                          priceForInsideCar: e.target.valueAsNumber,
                        },
                      } as WorkerAccount)
                  )
                }
              />
            </div>
            <div>
              <Input
                placeholder="Exterieur de voiture"
                value={details?.prices?.priceForOutsideCar}
                readOnly={!editMode}
                type="number"
                onChange={(e) =>
                  setDetails(
                    (prev) =>
                      ({
                        ...prev,
                        prices: {
                          ...prev?.prices,
                          priceForOutsideCar: e.target.valueAsNumber,
                        },
                      } as WorkerAccount)
                  )
                }
              />
            </div>
            <div>
              <Input
                placeholder="Metre"
                value={details?.prices?.priceForMeter}
                readOnly={!editMode}
                type="number"
                onChange={(e) =>
                  setDetails(
                    (prev) =>
                      ({
                        ...prev,
                        prices: {
                          ...prev?.prices,
                          priceForMeter: e.target.valueAsNumber,
                        },
                      } as WorkerAccount)
                  )
                }
              />
            </div>

            <div>
              <Input
                placeholder="Vaissailes"
                value={details?.prices?.priceForDish}
                readOnly={!editMode}
                type="number"
                onChange={(e) =>
                  setDetails(
                    (prev) =>
                      ({
                        ...prev,
                        prices: {
                          ...prev?.prices,
                          priceForDish: e.target.valueAsNumber,
                        },
                      } as WorkerAccount)
                  )
                }
              />
            </div>
            <div>
              <Input
                placeholder="Chambre"
                value={details?.prices?.priceForRoom}
                readOnly={!editMode}
                type="number"
                onChange={(e) =>
                  setDetails(
                    (prev) =>
                      ({
                        ...prev,
                        prices: {
                          ...prev?.prices,
                          priceForRoom: e.target.valueAsNumber,
                        },
                      } as WorkerAccount)
                  )
                }
              />
            </div>
            <div>
              <Input
                placeholder="Vitre"
                value={details?.prices?.priceForWindow}
                readOnly={!editMode}
                type="number"
                onChange={(e) =>
                  setDetails(
                    (prev) =>
                      ({
                        ...prev,
                        prices: {
                          ...prev?.prices,
                          priceForWindow: e.target.valueAsNumber,
                        },
                      } as WorkerAccount)
                  )
                }
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function ServiceSelector({
  setValue,
  value,
  readOnly,
}: {
  setValue: React.Dispatch<SetStateAction<WorkerAccount | undefined>>;
  value: WorkerAccount | undefined;
  readOnly: boolean;
}) {
  const updateServices = (service: string) => {
    if (!readOnly) return;

    const newServices = value?.services?.includes(service)
      ? value?.services?.filter((el) => el !== service)
      : [...(value?.services || []), service];

    setValue(
      (prev) =>
        ({
          ...prev,
          services: newServices,
        } as WorkerAccount)
    );
  };

  return (
    <div className="flex flex-wrap gap-2">
      {services?.map((svc) => (
        <Badge
          key={svc.api}
          className={
            (value?.services?.includes(svc.api)
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
