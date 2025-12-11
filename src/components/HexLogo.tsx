import { cn } from "@/lib/utils";

interface HexLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: { container: "h-9 w-9", stroke: "1.5", plus: "2" },
  md: { container: "h-12 w-12", stroke: "1.5", plus: "2" },
  lg: { container: "h-20 w-20", stroke: "2", plus: "2.5" },
};

export const HexLogo = ({ className, size = "md" }: HexLogoProps) => {
  const s = sizeMap[size];
  
  return (
    <div className={cn("relative flex items-center gap-3", className)}>
      <div className={cn("relative", s.container)}>
        <svg
          viewBox="0 0 32 32"
          className="h-full w-full animate-glow-rotate"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="hex-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(280 100% 70%)" />
              <stop offset="50%" stopColor="hsl(270 91% 65%)" />
              <stop offset="100%" stopColor="hsl(240 75% 60%)" />
            </linearGradient>
          </defs>
          {/* Hexagon */}
          <path
            d="M16 2L28 9v14l-12 7L4 23V9l12-7z"
            fill="none"
            stroke="url(#hex-gradient)"
            strokeWidth={s.stroke}
            className="drop-shadow-[0_0_8px_hsl(270_91%_65%/0.5)]"
          />
          {/* Plus */}
          <path
            d="M16 10v12M10 16h12"
            stroke="url(#hex-gradient)"
            strokeWidth={s.plus}
            strokeLinecap="round"
            className="drop-shadow-[0_0_6px_hsl(270_91%_65%/0.8)]"
          />
        </svg>
      </div>
      <span className="font-mono text-xl font-bold tracking-tight">
        <span className="text-foreground">Hex</span>
        <span className="text-gradient">+</span>
      </span>
    </div>
  );
};

export default HexLogo;