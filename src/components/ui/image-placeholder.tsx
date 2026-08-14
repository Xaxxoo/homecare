import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  alt: string;
  className?: string;
  aspectRatio?: "video" | "square" | "portrait" | "wide";
}

const aspectStyles = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[2/1]",
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
        "relative flex items-center justify-center bg-gradient-to-br from-cream-100 via-cyan-50 to-navy-50 rounded-2xl overflow-hidden",
        aspectStyles[aspectRatio],
        className
      )}
    >
      <div className="flex flex-col items-center gap-3 text-navy-300">
        <ImageIcon className="w-10 h-10" strokeWidth={1.5} />
        <span className="text-xs font-medium text-navy-400 max-w-[200px] text-center leading-snug px-4">
          {alt}
        </span>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-200/20 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-navy-200/15 rounded-full translate-y-1/2 -translate-x-1/2" />
    </div>
  );
}
