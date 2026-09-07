import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  theme?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
}

export function Logo({ theme = "light", showTagline = false, className }: LogoProps) {
  const gold = theme === "dark" ? "#e4b94a" : "#d4a028";
  const goldLight = theme === "dark" ? "#efd07d" : "#e4b94a";
  const dark = theme === "dark" ? "#0e1f3d" : "#132a52";

  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2.5 group", className)}
      aria-label="ASD Home Care LLC - Home"
    >
      {/* House with caregiver icon - matches brand flyer */}
      <div className="relative flex-shrink-0 w-10 h-10">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full transition-transform duration-300 group-hover:scale-105"
          aria-hidden="true"
        >
          {/* House body */}
          <path
            d="M15 45 L15 90 L85 90 L85 45"
            fill={gold}
          />
          {/* Roof */}
          <path
            d="M5 48 L50 10 L95 48 L85 48 L50 18 L15 48 Z"
            fill={goldLight}
          />
          {/* Person head */}
          <circle cx="50" cy="42" r="7" fill={dark} />
          {/* Person body with open arms (caregiver pose) */}
          <path
            d="M50 49 C50 49 38 55 35 60 L40 62 L46 56 L46 72 L54 72 L54 56 L60 62 L65 60 C62 55 50 49 50 49 Z"
            fill={dark}
          />
          {/* Heart on chest */}
          <path
            d="M50 58 C50 58 46.5 54 46.5 52.5 C46.5 51 47.8 50 49 50.8 C49.6 51.2 50 51.8 50 51.8 C50 51.8 50.4 51.2 51 50.8 C52.2 50 53.5 51 53.5 52.5 C53.5 54 50 58 50 58 Z"
            fill={goldLight}
          />
          {/* Door */}
          <rect x="40" y="72" width="20" height="18" rx="2" fill={dark} opacity="0.8" />
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
