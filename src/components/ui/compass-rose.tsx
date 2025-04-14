import { cn } from "@/lib/utils";

interface CompassRoseProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "accent";
}

export function CompassRose({
  className,
  size = "md",
  variant = "primary",
}: CompassRoseProps) {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
  };

  const variantClasses = {
    primary:
      "text-primary-500 dark:text-primary-400 dark:drop-shadow-[0_0_8px_rgba(24,144,255,0.5)]",
    secondary:
      "text-secondary-500 dark:text-secondary-400 dark:drop-shadow-[0_0_8px_rgba(250,140,22,0.5)]",
    accent:
      "text-accent-500 dark:text-accent-400 dark:drop-shadow-[0_0_8px_rgba(82,196,26,0.5)]",
  };

  return (
    <div
      className={cn(
        "relative animate-spin-slow transition-all duration-300",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transition-transform duration-700 hover:scale-110"
      >
        <path
          d="M50 0L60 40L100 50L60 60L50 100L40 60L0 50L40 40L50 0Z"
          fill="currentColor"
          fillOpacity="0.2"
          className="dark:fill-opacity-[0.15]"
        />
        <path
          d="M50 10L57 40L90 50L57 60L50 90L43 60L10 50L43 40L50 10Z"
          fill="currentColor"
          fillOpacity="0.4"
          className="dark:fill-opacity-[0.3]"
        />
        <path
          d="M50 20L54 40L80 50L54 60L50 80L46 60L20 50L46 40L50 20Z"
          fill="currentColor"
          fillOpacity="0.6"
          className="dark:fill-opacity-[0.5]"
        />
        <circle
          cx="50"
          cy="50"
          r="5"
          fill="currentColor"
          className="dark:filter dark:brightness-125"
        />
      </svg>
    </div>
  );
}
