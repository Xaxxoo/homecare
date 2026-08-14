import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  theme?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
}

export function Logo({ theme = "light", showTagline = false, className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2.5 group", className)}
      aria-label="ASD Homecare - Home"
    >
      {/* Refined geometric mark - healthcare cross in rounded square */}
      <div className="relative flex-shrink-0 w-9 h-9">
        <div
          className={cn(
            "absolute inset-0 rounded-[10px] transition-all duration-300 group-hover:rounded-[12px]",
            theme === "dark"
              ? "bg-gradient-to-br from-cyan-400 to-cyan-500"
              : "bg-gradient-to-br from-navy-600 to-navy-700"
          )}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            viewBox="0 0 20 20"
            className={cn(
              "w-[18px] h-[18px]",
              theme === "dark" ? "text-navy-950" : "text-white"
            )}
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8.5 4a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v4.5H16a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-4.5V16a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-4.5H4a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h4.5V4z" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col">
        <span
          className={cn(
            "text-[17px] font-bold leading-none tracking-tight",
            theme === "dark" ? "text-white" : "text-navy-900"
          )}
        >
          ASD Homecare
        </span>
        {showTagline && (
          <span
            className={cn(
              "text-[10.5px] font-medium tracking-wide uppercase mt-1",
              theme === "dark" ? "text-navy-300" : "text-navy-500"
            )}
          >
            Empowering Your Health &amp; Home
          </span>
        )}
      </div>
    </Link>
  );
}
