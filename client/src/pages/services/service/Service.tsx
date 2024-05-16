import Nav from "@/components/Nav";
import { useLocation } from "react-router-dom";

export default function Service() {
  const location = useLocation();

  return (
    <main>
      <Nav />
      <div className="max-w-[1280px] mx-auto">
        <h2>{location.pathname.split("/").at(-1)}</h2>
        <div></div>
      </div>
    </main>
  );
}
