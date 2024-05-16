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

export default function Nav() {
  const isLoggedIn = true;
  const isWorker = false;

  return (
    <nav className="w-full">
      <div className="flex items-center justify-center gap-32 py-4">
        <h2>Clino</h2>
        <div className="flex gap-4 items-center">
          <Link to="/">Accueil</Link>
          <Link to="/services">Services</Link>
        </div>
        <div className="flex gap-4">
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="p-1">
                  <div className="h-full aspect-square rounded-full flex justify-center items-center bg-primary-low mr-2">
                    P
                  </div>
                  <p className="mr-4">Account</p>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                  <p>My Account</p>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link to={(isWorker ? "/w" : "/u") + "/account"}>
                  <DropdownMenuItem>
                    <p>Paramètres</p>
                  </DropdownMenuItem>
                </Link>
                <Link to={isWorker ? "/w" : "/u/reservations"}>
                  <DropdownMenuItem>
                    <p>Reservations</p>
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <p>Logout</p>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
