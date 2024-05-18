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
import {
  CircleUserRound,
  Mail,
  MapPin,
  Phone,
  UserRound,
  UsersRound,
} from "lucide-react";
import CardButton from "@/pages/worker_dashboard/CardButton";
import { useState } from "react";
import services from "@/utils/services";
import { useAuth } from "@/lib/context/auth";

export default function Service() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [posts, setPosts] = useState([]);

  const getServicePosts = (service: string, city: string) => {};

  const placeOrder = () => {
    if (!user) return navigate("/login");
  };

  return (
    <main>
      <div className="max-w-[1280px] mx-auto">
        <h2 className="font-primary mb-4 mt-8">
          {
            services.find(
              (svc) => svc.link === location.pathname.split("/").at(-1)
            )?.name
          }
        </h2>
        <div className="mb-4">
          <Select>
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
        <div className="grid grid-cols-2 gap-4 mb-10">
          {[...Array(3)].map((el) => (
            <Card className="overflow-hidden" key={el}>
              <CardHeader>
                <div className="flex gap-2 items-center">
                  <CircleUserRound size={28} />
                  <p>Equipe vaissele</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col flex-wrap h-20 gap-x-4">
                  <div className="flex gap-2">
                    <UsersRound size={20} />
                    <p>Nombre: </p>
                    <p>6</p>
                  </div>
                  <div className="flex gap-2">
                    <UserRound size={20} />
                    <p>Sexe: </p>
                    <p>Homme</p>
                  </div>

                  <div className="flex gap-2">
                    <MapPin size={20} />
                    <p>Adresse: </p>
                    <p>Oran</p>
                  </div>
                  <div className="flex gap-2">
                    <Mail size={20} />
                    <p>Email: </p>
                    <p>mou256@gmail.com</p>
                  </div>
                  <div className="flex gap-2">
                    <Phone size={20} />
                    <p>Telephone: </p>
                    <p>0987654321</p>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <p>Prix: </p>
                  <p>200/m²</p>
                </div>
              </CardContent>
              <CardFooter className="p-0">
                <CardButton variant="success" onClick={placeOrder}>
                  Demander
                </CardButton>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
