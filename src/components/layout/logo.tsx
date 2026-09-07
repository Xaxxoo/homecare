import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  theme?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
}

export function Logo({ theme = "light", showTagline = false, className }: LogoProps) {
  const gold = theme === "dark" ? "#e4b94a" : "#c49a1f";
  const goldLight = theme === "dark" ? "#efd07d" : "#d4a028";

  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2.5 group", className)}
      aria-label="ASD Home Care LLC - Home"
    >
      {/* House outline with person and heart - matches brand flyer */}
      <div className="relative flex-shrink-0 w-10 h-10">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full transition-transform duration-300 group-hover:scale-105"
          fill="none"
          aria-hidden="true"
        >
          {/* House walls outline */}
          <path
            d="M20 48 L20 88 L80 88 L80 48"
            stroke={gold}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Roof outline */}
          <path
            d="M12 52 L50 14 L88 52"
            stroke={gold}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Person head */}
          <circle
            cx="50" cy="44"
            r="7"
            stroke={gold}
            strokeWidth="3.5"
          />
          {/* Person body */}
          <path
            d="M50 51 L50 72"
            stroke={gold}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Person arms */}
          <path
            d="M38 60 L50 55 L62 60"
            stroke={gold}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Person legs */}
          <path
            d="M50 72 L40 84"
            stroke={gold}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M50 72 L60 84"
            stroke={gold}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Heart at top of house / near person */}
          <path
            d="M50 34 C50 34 45 28 42 28 C38.5 28 36.5 31 38 34 C39.5 37 50 42 50 42 C50 42 60.5 37 62 34 C63.5 31 61.5 28 58 28 C55 28 50 34 50 34 Z"
            fill={goldLight}
            stroke={gold}
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <div className="flex flex-col">
        <span
          className={cn(
            "text-[17px] font-bold leading-none tracking-tight",
            theme === "dark" ? "text-white" : "text-navy-900"
          )}
        >
          ASD Home Care
        </span>
        {showTagline && (
          <span
            className={cn(
              "text-[10px] font-semibold tracking-widest uppercase mt-1",
              theme === "dark" ? "text-gold-300" : "text-gold-600"
            )}
          >
            Compassion. Dignity. Excellence.
          </span>
        )}
      </div>
    </Link>
  );
}
