import clsx, { type ClassValue } from "clsx";
import { twMerge as tailwindMerge } from "tailwind-merge";

/**
 * Combine class names while removing duplicate entries.
 */
export function merge(...input: ClassValue[]) {
  return tailwindMerge(clsx(...input));
}
