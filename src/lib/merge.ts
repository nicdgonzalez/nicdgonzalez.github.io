import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combine class names while removing conflicting entries.
 */
export function merge(...input: ClassValue[]) {
  return twMerge(clsx(...input));
}
