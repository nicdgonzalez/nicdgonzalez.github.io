import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export const Section = ({ children, className, ...props }: SectionProps) => {
  return (
    <>
      <section
        className={cn(
          "flex flex-col min-h-screen items-center w-full pt-24 pb-8",
          className,
        )}
        {...props}
      >
        {children}
      </section>
      <div className="w-full bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
    </>
  );
};
