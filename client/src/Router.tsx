import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientAccount from "./pages/client_account/ClientAccount";
import ClientReservations from "./pages/client_reservations/ClientReservations";
import Landing from "./pages/landing/Landing";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Service from "./pages/services/service/Service";
import Services from "./pages/services/Services";
import WorkerAccount from "./pages/worker_account/WorkerAccount";
import WrokerDashboard from "./pages/worker_dashboard/WrokerDashboard";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:service" element={<Service />} />
        <Route path="/w/account" element={<WorkerAccount />} />
        <Route path="/w" element={<WrokerDashboard />} />
        <Route path="/u/account" element={<ClientAccount />} />
        <Route path="/u/reservations" element={<ClientReservations />} />
      </Routes>
    </BrowserRouter>
  );
}
