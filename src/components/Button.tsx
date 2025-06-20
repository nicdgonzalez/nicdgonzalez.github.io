import { merge } from "../lib/merge";

interface ButtonProps {
  href: string;
  text: string;
  variant?: ButtonVariant;
}

export enum ButtonVariant {
  Primary = "primary",
  Secondary = "secondary",
  Destructive = "destructive",
  Outline = "outline",
  Ghost = "ghost",
  Link = "link",
  Default = Secondary,
}

const variants = {
  primary: [
    "border",
    "text-white",
    "border-zinc-900",
    "bg-zinc-800",
    "hover:bg-zinc-900",
  ],
  secondary: [
    "border",
    "text-black",
    "border-zinc-200",
    "bg-zinc-50",
    "hover:bg-zinc-200",
  ],
  destructive: [],
  outline: [],
  ghost: [],
  link: [
    "underline",
  ],
};

export function Button(props: ButtonProps) {
  const variant = props.variant ?? ButtonVariant.Default;
  const style = merge(variants[variant]);

  return (
    <a href={props.href}>
      <button
        class={`px-8 py-2 rounded-md font-medium hover:cursor-pointer ${style}`}
      >
        <span class="text-sm">{props.text}</span>
      </button>
    </a>
  );
}
