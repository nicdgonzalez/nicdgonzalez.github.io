/* @refresh reload */

import "./index.css";
import { render } from "solid-js/web";

import { App } from "./App";

/**
 * Represents an error that occurred while getting the *root element* from
 * the document. The root element is an HTML element containing the ID `root`.
 */
export class RootElementNotFoundError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = "RootElementNotFoundError";
  }
}

/**
 * Gets the element from the document that contains the ID `root`.
 *
 * @throws {RootElementNotFoundError}
 * No element with the ID `root` exists within the document.
 *
 * @returns The element that represents the main entry point to the website.
 */
function getEntryPoint(): HTMLElement {
  const root = document.getElementById("root");

  if (root === null) {
    throw new RootElementNotFoundError(
      "Root element not found. Did you forget to add it to your index.html?",
    );
  }

  return root;
}

render(() => <App />, getEntryPoint());
