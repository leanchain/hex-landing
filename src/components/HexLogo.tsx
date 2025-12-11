import { cn } from "@/lib/utils";

interface HexLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "h-8 w-8",
  md: "h-12 w-12",
  lg: "h-16 w-16",
};

export const HexLogo = ({ className, size = "md" }: HexLogoProps) => {
  return (
    <div className={cn("relative flex items-center gap-3", className)}>
      <div
        className={cn(
          "relative flex items-center justify-center rounded-lg bg-primary/10 glow-primary",
          sizeMap[size]
        )}
      >
        <svg
          viewBox="0 0 32 32"
          className="h-3/4 w-3/4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 6v20M6 16h20"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            className="text-primary"
          />
        </svg>
      </div>
      <span className="font-display text-2xl font-bold tracking-tight text-foreground">
        Hex<span className="text-primary">+</span>
      </span>
    </div>
  );
};

export default HexLogo;