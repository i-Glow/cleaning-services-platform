import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import services from "@/utils/services";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function Services() {
  const location = useLocation();

  return (
    <main>
      <Nav />
      <div className="max-w-[1280px] mx-4 lg:mx-auto">
        <h2 className="font-primary mb-4">Services</h2>
        <div className="flex flex-wrap gap-4">
          {services.map((service, key) => (
            <Link key={key} to={service.link}>
              <div
                className={`border rounded-sm px-4 py-1 hover:bg-gray-100 
                    ${
                      location.pathname.split("/").at(-1) === service.link
                        ? "bg-gray-100"
                        : "bg-white"
                    }`}
              >
                <p>{service.name}</p>
              </div>
            </Link>
          ))}
        </div>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
