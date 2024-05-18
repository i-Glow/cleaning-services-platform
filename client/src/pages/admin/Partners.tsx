import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CircleUserRound } from "lucide-react";
import { useState } from "react";
import CardButton from "../worker_dashboard/CardButton";

export default function Partners() {
  const [partners, setPartners] = useState([]);

  const getPartners = () => {};

  return (
    <main className="my-10">
      <div className="grid grid-cols-3 max-w-[1280px] mx-auto gap-x-4 gap-y-6">
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
