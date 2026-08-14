import { cn } from "@/lib/utils";
import Link from "next/link";
import { type ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "white";
type ButtonSize = "default" | "lg" | "sm";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-navy-600 text-white hover:bg-navy-700 active:bg-navy-800 shadow-sm shadow-navy-600/20",
  secondary:
    "bg-cyan-500 text-navy-950 hover:bg-cyan-400 active:bg-cyan-600 shadow-sm shadow-cyan-500/20",
  outline:
    "border-2 border-navy-200 text-navy-700 hover:border-navy-300 hover:bg-navy-50 active:bg-navy-100",
  ghost:
    "text-navy-700 hover:bg-navy-50 active:bg-navy-100",
  white:
    "bg-white text-navy-800 hover:bg-cream-50 active:bg-navy-50 shadow-sm",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  default: "px-6 py-3 text-sm",
  lg: "px-8 py-3.5 text-base",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

type ButtonAsButton = ButtonBaseProps &
  ComponentProps<"button"> & { href?: never };
type ButtonAsLink = ButtonBaseProps &
  ComponentProps<typeof Link>;

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "default",
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if ("href" in props && props.href) {
    return <Link className={classes} {...(props as ComponentProps<typeof Link>)} />;
  }

  return <button className={classes} {...(props as ComponentProps<"button">)} />;
}
