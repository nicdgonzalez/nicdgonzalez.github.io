import { ParentProps } from "solid-js";

import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";

/**
 * A component that wraps the contents of *every other page*.
 */
export function RootLayout(props: ParentProps) {
  return (
    <div class="text-black dark:text-white bg-zinc-100 dark:bg-zinc-900">
      <Header />
      <div class="flex flex-col items-center">
        <div class="container w-full overflow-x-hidden">
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
