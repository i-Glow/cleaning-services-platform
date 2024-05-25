import { Link, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login } from "@/api/auth";
import { FormEvent, useRef } from "react";
import { useAuth } from "@/lib/context/auth";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

export default function Login() {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const formRef = useRef(null);

  const handleLogin = async (e: FormEvent) => {
    // prevent the page from reloading
    e.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const data: any = Object.fromEntries(formData.entries());

    try {
      // make request to API
      const res: any = await login(data);
      if (res.data.user == null) {
        toast({
          title: res.data.message,
          type: "foreground",
          className: "bg-red-500 text-white",
        });
        return;
      }
      // save user details in memory
      setUser(res.data.user);
      // save user details in disk
      localStorage.setItem("user", JSON.stringify(res.data.user));
      // navigate to the home page

      switch (res.data.user.role) {
        case "client":
          navigate("/");
          break;
        case "worker":
          navigate("/w");
          break;
        case "admin":
          navigate("/a/partenaires");
          break;
        default:
          navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <form ref={formRef} onSubmit={handleLogin} className="grid gap-4">
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
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input name="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Vous n'avez pas un compte?{" "}
            <Link to="/register" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <div className="h-full bg-white w-full object-contain dark:brightness-[0.2] dark:grayscale">
          <img src="src/assets/login.jpg" alt="" />
        </div>
        <Toaster />
      </div>
    </div>
  );
}
