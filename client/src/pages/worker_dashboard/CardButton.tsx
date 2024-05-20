import { Button } from "@/components/ui/button";

export default function CardButton(props: {
  children: any;
  variant: "danger" | "success";
  onClick?: () => any;
}) {
  const styles =
    props.variant === "danger"
      ? "text-red-500 rounded-none flex-1 hover:bg-red-200 w-full"
      : "text-green-500 rounded-none flex-1 hover:bg-green-200 w-full";

  return (
    <Button onClick={props.onClick} variant="ghost" className={styles}>
      {props.children}
    </Button>
  );
}
