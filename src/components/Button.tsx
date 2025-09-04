import type React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const PrimaryButton = ({ children, className }: ButtonProps) => {
  return (
    <button
      type="button"
      className={cn(
        "flex flex-row min-h-12 text-xs md:text-sm text-white dark:text-black bg-slate-700 hover:bg-slate-900 dark:bg-slate-300 hover:dark:bg-slate-100 px-4 py-2 font-semibold rounded-full items-center justify-center hover:cursor-pointer",
        className,
      )}
    >
      {children}
    </button>
  );
};

export const SecondaryButton = ({ children, className }: ButtonProps) => {
  return (
    <button
      type="button"
      className={cn(
        "flex flex-row min-h-12 text-xs md:text-sm text-black dark:text-white bg-slate-200 hover:bg-slate-100 dark:bg-slate-800 hover:dark:bg-slate-700 px-4 py-2 font-semibold rounded-full items-center justify-center hover:cursor-pointer border border-slate-500",
        className,
      )}
    >
      {children}
    </button>
  );
};
