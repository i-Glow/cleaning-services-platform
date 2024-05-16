import Nav from "@/components/Nav";
import services from "@/utils/services";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <main>
      <Nav />
      <div className="max-w-[1280px] mx-auto">
        <h2>Services</h2>
        <div>
          {services.map((service) => (
            <Link to={service}>
              <p>{service}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
