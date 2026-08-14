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
      className={cn("flex items-center gap-3 group", className)}
      aria-label="ASD Homecare - Home"
    >
      {/* Geometric mark inspired by healthcare cross/square motif */}
      <div className="relative flex-shrink-0 w-10 h-10">
        <div
          className={cn(
            "absolute inset-0 rounded-lg rotate-45 transition-transform duration-300 group-hover:rotate-[50deg]",
            theme === "dark" ? "bg-cyan-500" : "bg-navy-600"
          )}
        />
        <div
          className={cn(
            "absolute inset-[5px] rounded-md rotate-45 transition-transform duration-300 group-hover:rotate-[50deg]",
            theme === "dark" ? "bg-navy-900" : "bg-white"
          )}
        />
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center text-xs font-black tracking-tight",
            theme === "dark" ? "text-cyan-400" : "text-navy-600"
          )}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 6v12M6 12h12" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col">
        <span
          className={cn(
            "text-lg font-bold leading-tight tracking-tight",
            theme === "dark" ? "text-white" : "text-navy-900"
          )}
        >
          ASD Homecare
        </span>
        {showTagline && (
          <span
            className={cn(
              "text-[11px] font-medium tracking-wide uppercase",
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
