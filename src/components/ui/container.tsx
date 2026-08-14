import { cn } from "@/lib/utils";
import { type ComponentProps } from "react";

interface ContainerProps extends ComponentProps<"div"> {
  size?: "default" | "narrow" | "wide";
}

export function Container({
  size = "default",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-6 lg:px-8",
        size === "narrow" && "max-w-4xl",
        size === "default" && "max-w-7xl",
        size === "wide" && "max-w-[1400px]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
