import { TabsContent } from "@/components/ui/tabs";

export default function Tab({ type }: { type: string }) {
  return (
    <TabsContent
      value={type}
      className="w-full min-h-[300px] bg-muted border rounded-sm p-4"
    >
      {type} Make changes to your account here.
    </TabsContent>
  );
}
