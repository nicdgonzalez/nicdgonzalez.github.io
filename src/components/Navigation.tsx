import type React from "react";

interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export const Navigation = ({ children }: NavigationProps) => {
  return (
    <nav className="flex flex-col md:flex-row items-center justify-center text-center">
      {children}
    </nav>
  );
};

interface NavigationSectionProps
  extends React.HTMLAttributes<HTMLUListElement> {
  children?: React.ReactNode;
}

export const NavigationSection = ({ children }: NavigationSectionProps) => {
  return (
    // XXX: Why do I need `md:not-first:before:min-h-6` to make the separator show up?
    <ul className="flex flex-col md:flex-row items-center justify-center gap-8 not-first:before:content-[''] not-first:before:block not-first:before:w-[50vw] md:not-first:before:w-[1px] not-first:before:h-[1px] md:not-first:before:h-full not-first:before:bg-slate-500 not-first:before:mt-8 md:not-first:before:mt-0 md:not-first:before:ml-8 md:not-first:before:min-h-6">
      {children}
    </ul>
  );
};

interface NavigationItemProps extends React.HTMLAttributes<HTMLLIElement> {
  children?: React.ReactNode;
  active?: boolean;
}

export const NavigationItem = ({ children }: NavigationItemProps) => {
  return (
    <li className="flex flex-row items-center text-xl md:text-sm text-slate-700 hover:text-black dark:text-slate-300 hover:dark:text-white">
      {children}
    </li>
  );
};
