import { updateUser } from "@/api/client";
import Nav from "@/components/Nav";
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
import { useRef, useState } from "react";
import Fidelity from "./Fidelity";

export default function ClientAccount() {
  const { user, setUser } = useAuth();
  const { toast } = useToast();

  const [editMode, setEditMode] = useState(false);
  const firstInput = useRef<HTMLInputElement>(null);
  const [details, setDetails] = useState<User | undefined>(user);

  const updateDetails = async () => {
    if (!details) return;

    try {
      const res = await updateUser(details);

      setUser(res.data.updatedUser);
      localStorage.setItem("user", JSON.stringify(res.data.updatedUser));
      setEditMode(false);
      toast({
        title: "information bien modifie",
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
      <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3 max-w-[1280px] mx-auto my-10">
        <div className="col-span-2 border rounded-sm h-max p-4">
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
                    (prev) => ({ ...prev, name: e.target.value } as User)
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
                    (prev) => ({ ...prev, email: e.target.value } as User)
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
                    (prev) => ({ ...prev, password: e.target.value } as User)
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
                    (prev) => ({ ...prev, address: e.target.value } as User)
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
                    (prev) => ({ ...prev, phoneNumber: e.target.value } as User)
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
                    (prev) => ({ ...prev, wilaya: Number(val) } as User)
                  )
                }
              >
                <SelectTrigger>
                  <SelectValue
                    placeholder={
                      details?.wilaya +
                      ". " +
                      cities.find((w) => w.id === String(details?.wilaya))?.name
                    }
                  >
                    {details?.wilaya}.{" "}
                    {cities.find((w) => w.id === String(details?.wilaya))?.name}
                  </SelectValue>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city.id} value={city.id}>
                        {city.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </SelectTrigger>
              </Select>
              {/* <Input
                value={
                  cities.find((w) => w.id === String(details?.wilaya))?.name
                }
                readOnly={!editMode}
                type="text"
                onChange={(e) =>
                  setDetails(
                    (prev) => ({ ...prev, lastname: e.target.value } as User)
                  )
                }
              /> */}
            </div>
          </div>
        </div>
        <Fidelity />
      </div>
    </main>
  );
}
