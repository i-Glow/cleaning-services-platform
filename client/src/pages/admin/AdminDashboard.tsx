import { Link, Outlet, useNavigate } from "react-router-dom";
import { Home, LogOut, Menu, Package2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/lib/context/auth";

export default function AdminDashboard() {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    setUser(undefined);
    navigate("/");
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Home className="h-6 w-6" />
          </Link>
          <Link
            to="/a/partenaires"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Partenaires
          </Link>
          <Link
            to="/a/offres"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Offres
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                to="/"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
              </Link>
              <Link
                to="/a/partenaires"
                className="text-muted-foreground hover:text-foreground"
              >
                Partenaires
              </Link>
              <Link
                to="/a/offres"
                className="text-muted-foreground hover:text-foreground"
              >
                Offres
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-max items-center gap-4 ml-auto md:ml-auto md:gap-2 lg:gap-4">
          <Button variant="secondary" className="flex gap-2" onClick={logout}>
            <LogOut className="h-5 w-5" />
            <p>se déconnecter</p>
          </Button>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
