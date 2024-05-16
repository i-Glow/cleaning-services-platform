import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef, useState } from "react";
import Fidelity from "./Fidelity";

export default function ClientAccount() {
  const [editMode, setEditMode] = useState(false);
  const firstInput = useRef<HTMLInputElement>(null);

  return (
    <main>
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
                <Button>Sauvgarder</Button>
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
              <Input ref={firstInput} value="John" readOnly={editMode} />
            </div>
            <div>
              <Label className="pl-3">Prenom</Label>
              <Input value="Doe" readOnly={editMode} />
            </div>
            <div>
              <Label className="pl-3">Email</Label>
              <Input value="johndoe@email.net" readOnly={editMode} />
            </div>
          </div>
        </div>
        <Fidelity />
      </div>
    </main>
  );
}
