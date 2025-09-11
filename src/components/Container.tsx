import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cn(
        "flex flex-col container text-center px-8 lg:px-24",
        className,
      )}
    >
      {children}
    </div>
  );
};
