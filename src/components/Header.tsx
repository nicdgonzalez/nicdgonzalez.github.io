import { MainNavigation } from "./Navigation";

export function Header() {
  return (
    <header className="sticky flex flex-row justify-between p-8 w-full top-0">
      <MainNavigation />
    </header>
  );
}
