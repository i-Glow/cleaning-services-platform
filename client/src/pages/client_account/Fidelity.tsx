import { getLoyalty } from "@/api/client";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/context/auth";
import { Gift } from "lucide-react";
import { useEffect, useState } from "react";

export default function Fidelity() {
  const { user } = useAuth();
  const [progress, setProgress] = useState(0);

  const getFidelityCount = async (userId: string) => {
    try {
      const res = await getLoyalty(userId);

      setProgress(res.data.count);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFidelityCount(user?.id!);
  }, []);

  return (
    <div className="border rounded-sm p-4 flex flex-col items-center gap-4">
      <p>Utiliser nos services et gagner un cadeau</p>
      <div className="flex gap-1 w-max">
        <div className="h-6 min-w-64 rounded-lg border overflow-hidden">
          <div
            className={"h-full bg-primary pt-1 pl-3"}
            style={{ width: (progress / 6) * 100 + "%" }}
          >
            <div className="w-1/2 h-1/3 bg-white/40 rounded-full"></div>
          </div>
        </div>
        <p>{progress}/6</p>
      </div>
      <div>
        <Gift size={128} />
      </div>
      <Button disabled={progress !== 6}>Collecter</Button>
    </div>
  );
}
