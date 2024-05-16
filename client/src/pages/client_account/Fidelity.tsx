import { cn } from "@/lib/utils";
import { Gift } from "lucide-react";
import { useState } from "react";

export default function Fidelity() {
  const [progress, setProgress] = useState(4);

  return (
    <div className="border rounded-sm p-4">
      <p>Utiliser nos services et gagner un cadeau</p>
      <div className="relative w-max">
        <div className="h-6 min-w-64 rounded-lg border overflow-hidden">
          <div className={cn("h-full bg-primary pt-1 pl-3", `w-${progress}/6`)}>
            <div className="w-1/2 h-1/3 bg-white/40 rounded-full"></div>
          </div>
        </div>
        <div className="absolute -right-2 -top-1">
          <Gift size={32} fill={progress === 6 ? "gold" : "transparent"} />
        </div>
      </div>
    </div>
  );
}
