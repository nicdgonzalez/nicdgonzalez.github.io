import { RouteDefinition, Router } from "@solidjs/router";

import { RootLayout } from "./routes/layout";
import { lazy } from "solid-js";

/**
 * Defines all of the routes on our website.
 */
const routes: RouteDefinition[] = [
  {
    path: "/",
    component: lazy(() => import("./routes/page")),
  },
];

/**
 * The main entry point to the application.
 */
export function App() {
  return <Router root={RootLayout}>{routes}</Router>;
}
