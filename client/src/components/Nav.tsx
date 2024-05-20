import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAuth } from "@/lib/context/auth";

export default function Nav() {
  const { user, setUser } = useAuth();

  const logout = () => {
    setUser(undefined);
    localStorage.removeItem("user");
  };

  return (
    <nav className="w-full">
      <div className="flex items-center justify-center lg:gap-32 gap-4 py-4">
        <Link to="/">
          <div className="flex items-center">
            <h2 className="text-primary text-lg sm:text-2xl">ANC</h2>
            <h2 className="text-lg sm:text-2xl">Clean</h2>
          </div>
        </Link>
        <div className="flex gap-1 md:gap-4 items-center">
          <Link to="/">Accueil</Link>
          <Link to="/services">Services</Link>
        </div>
        <div className="flex gap-1 md:gap-4">
          {!!user ? (
            user.role === "admin" ? (
              <Link to="/a/partenaires">
                <Button variant="ghost" className="p-1">
                  <div className="h-full aspect-square rounded-full flex justify-center items-center bg-primary-low mr-2">
                    <p>
                      {user.name.split(" ")[0].at(0) +
                        "" +
                        (user.name.split(" ")[1]?.at(0) || "")}
                    </p>
                  </div>
                  <p className="mr-4">Compte</p>
                </Button>
              </Link>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="p-1">
                    <div className="h-full aspect-square rounded-full flex justify-center items-center bg-primary-low mr-2">
                      <p>
                        {user.name.split(" ")[0].at(0) +
                          "" +
                          (user.name.split(" ")[1]?.at(0) || "")}
                      </p>
                    </div>
                    <p className="mr-4">Compte</p>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>
                    <p>My Account</p>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <Link
                    to={(user?.role === "worker" ? "/w" : "/u") + "/account"}
                  >
                    <DropdownMenuItem>
                      <p>Paramètres</p>
                    </DropdownMenuItem>
                  </Link>
                  <Link to={user?.role === "worker" ? "/w" : "/u/reservations"}>
                    <DropdownMenuItem>
                      <p>Reservations</p>
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout}>
                    <p>Logout</p>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )
          ) : (
            <>
              <Link to="/login">
                <Button className="px-4 sm:px-6">Login</Button>
              </Link>
              <Link to="/register">
                <Button className="px-4 sm:px-6">Register</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
