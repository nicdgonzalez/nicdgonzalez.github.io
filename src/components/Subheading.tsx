import { cn } from "@/lib/utils";
import { FadeUpOnScroll } from "./FadeUpOnScroll";

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
          `text-wrap text-2xl lg:text-4xl font-extrabold max-w-[75vw] sm:max-w-[60vw] lg:max-w-[50vw]`,
          className,
        )}
        {...props}
      >
        {children}
      </h2>
    </FadeUpOnScroll>
  );
};
