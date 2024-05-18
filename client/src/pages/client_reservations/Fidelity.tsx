import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Gift } from "lucide-react";
import { useState } from "react";

export default function Fidelity() {
  const [progress, setProgress] = useState(4);

  return (
    <div className="w-max border rounded-sm p-4 flex justify-between gap-10">
      <div className="flex flex-col gap-2 py-2">
        <p>Utiliser nos services et gagner un cadeau</p>
        <div className="flex gap-2 relative w-max">
          <div className="h-6 min-w-64 rounded-lg border overflow-hidden">
            <div className={cn("h-full bg-primary pt-1 pl-3", `w-4/6`)}>
              <div className="w-1/2 h-1/3 bg-white/40 rounded-full"></div>
            </div>
          </div>
          <p>{progress}/6</p>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div>
          <Gift size={64} />
        </div>
        <Button disabled={progress !== 6}>Collecter</Button>
      </div>
    </div>
  );
}
