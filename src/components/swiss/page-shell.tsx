import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { swissSpec } from "@/lib/swiss-design-system";

type SwissPageShellProps = {
  children: ReactNode;
  className?: string;
  mainClassName?: string;
};

export function SwissPageShell({
  children,
  className,
  mainClassName,
}: SwissPageShellProps) {
  return (
    <div className={cn("min-h-screen bg-background", className)}>
      <main
        className={cn(
          swissSpec.pagePadding,
          swissSpec.pageSpacing,
          swissSpec.pageGrid,
          mainClassName,
        )}
      >
        {children}
      </main>
    </div>
  );
}
