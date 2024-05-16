import Nav from "@/components/Nav";
import Fidelity from "../client_account/Fidelity";

export default function ClientReservations() {
  return (
    <main>
      <Nav />
      <div className="max-w-[1280px] mx-auto my-10">
        <Fidelity />
        <div></div>
      </div>
    </main>
  );
}
