import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  theme = "light",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-[13px] font-semibold uppercase tracking-wider mb-4",
            theme === "dark" ? "text-cyan-400" : "text-cyan-600"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] font-bold leading-[1.12] tracking-tight",
          theme === "dark" ? "text-white" : "text-navy-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            theme === "dark" ? "text-navy-300" : "text-navy-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
