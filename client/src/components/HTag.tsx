export default function HTag({
  children,
  className,
}: {
  children: JSX.Element[] | string;
  className?: string;
}) {
  return (
    <div
      className={
        "text-primary tracking-wider px-4 py-1 rounded-[4px] text-sm w-max bg-primary-low" +
        " " +
        className
      }
    >
      {children}
    </div>
  );
}
