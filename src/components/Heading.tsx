import { cn } from "@/lib/utils";
import { FadeUpOnScroll } from "./FadeUpOnScroll";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode;
}

export const Heading = ({ children, className, ...props }: HeadingProps) => {
  return (
    <FadeUpOnScroll>
      <h1
        className={cn(
          "text-wrap text-cyan-500 text-xl lg:text-2xl font-semibold",
          className,
        )}
        {...props}
      >
        {children}
      </h1>
    </FadeUpOnScroll>
  );
};
