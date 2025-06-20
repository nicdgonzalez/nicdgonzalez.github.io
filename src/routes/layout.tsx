import { ParentProps } from "solid-js";

import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";

/**
 * A component that wraps the contents of *every other page*.
 */
export function RootLayout(props: ParentProps) {
  return (
    <>
      <Header />
      <div class="flex flex-col items-center">
        <div class="container w-full overflow-x-hidden">
          {props.children}
        </div>
      </div>
      <Footer />
    </>
  );
}
