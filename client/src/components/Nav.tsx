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
  };

  return (
    <nav className="w-full">
      <div className="flex items-center justify-center gap-32 py-4">
        <div className="flex">
          <h2 className="text-primary">ANC</h2>
          <h2>Clean</h2>
        </div>
        <div className="flex gap-4 items-center">
          <Link to="/">Accueil</Link>
          <Link to="/services">Services</Link>
        </div>
        <div className="flex gap-4">
          {!!user ? (
            user.role === "a" ? (
              <Link to="/a/partenaires">
                <Button variant="ghost" className="p-1">
                  <div className="h-full aspect-square rounded-full flex justify-center items-center bg-primary-low mr-2">
                    <p>{user.lastname?.at(0) + "" + user.firstname?.at(0)}</p>
                  </div>
                  <p className="mr-4">Compte</p>
                </Button>
              </Link>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="p-1">
                    <div className="h-full aspect-square rounded-full flex justify-center items-center bg-primary-low mr-2">
                      <p>{user.lastname?.at(0) + "" + user.firstname?.at(0)}</p>
                    </div>
                    <p className="mr-4">Compte</p>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>
                    <p>My Account</p>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <Link to={(user?.role === "w" ? "/w" : "/u") + "/account"}>
                    <DropdownMenuItem>
                      <p>Paramètres</p>
                    </DropdownMenuItem>
                  </Link>
                  <Link to={user?.role === "w" ? "/w" : "/u/reservations"}>
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
                <Button className="px-6">Login</Button>
              </Link>
              <Link to="/register">
                <Button className="px-6">Register</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
