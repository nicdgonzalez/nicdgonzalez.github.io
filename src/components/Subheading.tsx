import { cn } from "@/lib/utils";

interface SubheadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode;
}

export const Subheading = (
  { children, className, ...props }: SubheadingProps,
) => {
  return (
    <FadeUpOnScroll>
      <h2
        className={cn(
          `text-wrap text-2xl lg:text-4xl font-extrabold`,
          className,
        )}
        {...props}
      >
        {children}
      </h2>
    </FadeUpOnScroll>
  );
};
