import { addOffer } from "@/api/admin";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { FormEvent, useRef } from "react";

export default function Offers() {
  const formRef = useRef(null);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    const formdata = new FormData(formRef.current);
    const data: any = Object.fromEntries(formdata.entries());
    data.reductionPercentage = Number(data.reductionPercentage);

    try {
      await addOffer(data);

      toast({
        title: "Offre Ajouté",
        type: "foreground",
        duration: 5000,
        className: "bg-green-500 text-white",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <Toaster />
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="[&>label]:ml-3 max-w-96 border rounded-sm px-4 py-8 mx-auto mt-20 flex flex-col gap-2"
      >
        <p className="text-xl font-bold mb-4 ml-3">Ajouter Offre</p>
        <Label>Réduction (0 - 100)</Label>
        <Input name="reductionPercentage" />
        <Label>Date de début</Label>
        <Input type="date" name="startDate" />
        <Label>Date de fin</Label>
        <Input type="date" name="endDate" />
        <Label>Description</Label>
        <Textarea name="description" />
        <Button type="submit" className="mt-4">
          Ajouter
        </Button>
      </form>
    </main>
  );
}
