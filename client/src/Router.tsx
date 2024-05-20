import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./lib/context/auth";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Fidelity from "./pages/admin/Fidelity";
import Offers from "./pages/admin/Offers";
import Partners from "./pages/admin/Partners";
import ClientAccount from "./pages/client_account/ClientAccount";
import ClientReservations from "./pages/client_reservations/ClientReservations";
import Landing from "./pages/landing/Landing";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Service from "./pages/services/service/Service";
import Services from "./pages/services/Services";
import Skeleton from "./pages/services/Skeleton";
import WorkerAccount from "./pages/worker_account/WorkerAccount";
import WrokerDashboard from "./pages/worker_dashboard/WrokerDashboard";
import WorkerProfile from "./pages/worker_profile/WorkerProfile";

export default function Router() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/services" element={<Services />}>
            <Route index element={<Skeleton />} />
            <Route path=":service" element={<Service />} />
          </Route>
          <Route path="/partenaire/:id" element={<WorkerProfile />} />
          <Route element={<ProtectedRoute role="admin" />}>
            <Route path="/a" element={<AdminDashboard />}>
              <Route index path="partenaires" element={<Partners />} />
              <Route path="offres" element={<Offers />} />
              <Route path="fidelite" element={<Fidelity />} />
            </Route>
          </Route>
          <Route element={<ProtectedRoute role="worker" />}>
            <Route path="/w/account" element={<WorkerAccount />} />
            <Route path="/w" element={<WrokerDashboard />} />
          </Route>
          <Route element={<ProtectedRoute role="client" />}>
            <Route path="/u/account" element={<ClientAccount />} />
            <Route path="/u/reservations" element={<ClientReservations />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

function ProtectedRoute({
  redirectPath = "/login",
  role,
}: {
  redirectPath?: string;
  role: string;
}) {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return user?.role === role ? (
    <Outlet />
  ) : (
    <Navigate to={redirectPath} replace />
  );
}
