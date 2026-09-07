import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  theme?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
}

export function Logo({ theme = "light", showTagline = false, className }: LogoProps) {
  const navy = theme === "dark" ? "#a5c4e8" : "#1a2d4d";
  const gold = theme === "dark" ? "#e4b94a" : "#c9982a";

  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2.5 group", className)}
      aria-label="ASD Home Care LLC - Home"
    >
      {/* Logo mark matching brand flyer */}
      <div className="relative flex-shrink-0 w-10 h-10">
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full transition-transform duration-300 group-hover:scale-105"
          fill="none"
          aria-hidden="true"
        >
          {/* House roof */}
          <path
            d="M60 6 L105 42 L97 42 L60 14 L23 42 L15 42 Z"
            fill={navy}
          />
          {/* House walls */}
          <path
            d="M27 42 L27 72 L93 72 L93 42"
            fill="none"
            stroke={navy}
            strokeWidth="5"
          />
          {/* Chimney */}
          <rect x="80" y="16" width="8" height="22" fill={navy} />
          {/* Large heart overlapping bottom of house */}
          <path
            d="M60 108 C60 108 20 78 20 60 C20 48 30 42 40 46 C48 49 56 56 60 62 C64 56 72 49 80 46 C90 42 100 48 100 60 C100 78 60 108 60 108 Z"
            fill={navy}
          />
          {/* Person - head */}
          <circle cx="60" cy="56" r="6.5" fill={gold} />
          {/* Person - body with arms raised up */}
          <path
            d="M60 62 C60 62 48 58 42 52"
            stroke={gold}
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <path
            d="M60 62 C60 62 72 58 78 52"
            stroke={gold}
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <path
            d="M60 62 L60 80"
            stroke={gold}
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          {/* Person - legs */}
          <path
            d="M60 80 L52 92"
            stroke={gold}
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <path
            d="M60 80 L68 92"
            stroke={gold}
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          {/* Decorative leaf/flourish below person */}
          <path
            d="M54 94 C54 94 58 88 60 94 C62 88 66 94 66 94"
            stroke={gold}
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="60" cy="98" r="2" fill={gold} />
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
