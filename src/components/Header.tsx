import { ExternalLink } from "lucide-react";
import { MainNavigation } from "./Navigation";

export function Header() {
  return (
    <header className="fixed flex flex-row justify-between p-8 w-full">
      <MainNavigation />
    </header>
  );
}
