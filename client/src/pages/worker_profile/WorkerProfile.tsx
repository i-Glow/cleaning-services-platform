import Nav from "@/components/Nav";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function WorkerProfile() {
  const location = useLocation();
  const [partner, setPartner] = useState<Partner>();
  const [error, setError] = useState(false);

  const getWorker = (id: string) => {
    const result = {
      id,
      name: "Ali Benselman",
      services: ["Maison", "Aprés chantier"],
      jobsDone: 39,
      city: "Annaba",
    };
    setPartner(result);

    if (!result) setError(false);
  };

  useEffect(() => {
    const id = location.pathname.split("/").at(-1) as string;
    getWorker(id);
  }, []);

  if (error) return <p>Partenaire non trouvé</p>;

  return (
    <div>
      <Nav />
      <main className="max-w-[1280px] mx-auto">
        {!!partner ? (
          <>
            <p>Nom: {partner?.name}</p>
            <p>
              Services:{" "}
              {partner?.services.map(
                (service, key) =>
                  service + (key !== partner.services.length - 1 ? ", " : "")
              )}
            </p>
            <p>Jobs done: {partner?.jobsDone}</p>
            <p>Ville d'operation: {partner?.city}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </div>
  );
}
