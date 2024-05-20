import { Link, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/lib/context/auth";
import { register } from "@/api/auth";
import { FormEvent, useRef } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import cities from "@/utils/cities";

export default function Register() {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const formRef = useRef(null);

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const data: any = Object.fromEntries(formData.entries());

    data.wilaya = Number(data.wilaya);

    try {
      // make request to API
      const res = (await register(data as User)) as any;
      // save user details in memory
      setUser(res.data.user);
      // save user details in disk
      localStorage.setItem("user", JSON.stringify(res.data.user));
      // navigate to the home page
      navigate("/");
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Register</h1>
            <p className="text-balance text-muted-foreground">
              Enter your information below to login to your account
            </p>
          </div>
          <form ref={formRef} className="grid gap-4" onSubmit={handleRegister}>
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input name="name" type="text" placeholder="John" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="address">Adresse</Label>
              <Input
                name="address"
                type="text"
                placeholder="Rue 123"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phoneNumber">Téléphone</Label>
              <Input
                name="phoneNumber"
                type="text"
                placeholder="0512345678"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label>Wilaya</Label>
              <Select name="wilaya">
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
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input name="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Register
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Vous avez deja un compte?{" "}
            <Link to="/login" className="underline">
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <div className="h-full w-full bg-white object-cover dark:brightness-[0.2] dark:grayscale">
          <img src="/src/assets/signup.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
