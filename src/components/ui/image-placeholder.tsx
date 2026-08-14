import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  alt: string;
  className?: string;
  aspectRatio?: "video" | "square" | "portrait" | "wide" | "photo";
}

const aspectStyles = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[2/1]",
  photo: "aspect-[4/5]",
};

export function ImagePlaceholder({
  alt,
  className,
  aspectRatio = "video",
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        aspectStyles[aspectRatio],
        className
      )}
    >
      {/* Layered gradient for warmth and depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-50 via-cream-50 to-cyan-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(85,195,230,0.12),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(36,72,143,0.06),transparent_60%)]" />

      {/* Organic shapes instead of circles */}
      <div
        className="absolute -top-8 -right-8 w-40 h-40 rounded-[40%_60%_60%_40%/50%_40%_60%_50%] bg-cyan-200/15 rotate-12"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-6 -left-6 w-32 h-32 rounded-[60%_40%_50%_50%/40%_60%_50%_50%] bg-navy-200/10 -rotate-12"
        aria-hidden="true"
      />

      {/* Subtle grid pattern for texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-navy-400) 1px, transparent 1px), linear-gradient(to right, var(--color-navy-400) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col items-center gap-2 text-navy-300/70 px-6">
        <svg
          viewBox="0 0 48 48"
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="6" y="10" width="36" height="28" rx="4" />
          <circle cx="18" cy="22" r="4" />
          <path d="M42 32l-8-8-6 6-4-4-10 10" />
        </svg>
        <span className="text-[11px] font-medium text-navy-400/60 max-w-[180px] text-center leading-snug">
          {alt}
        </span>
      </div>
    </div>
  );
}
