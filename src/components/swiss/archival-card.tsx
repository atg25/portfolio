import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { swissSpec } from "@/lib/swiss-design-system";

type SwissArchivalCardProps = {
  no: string;
  year: string;
  category?: string;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
  interactive?: boolean;
};

export function SwissArchivalCard({
  no,
  year,
  category,
  children,
  className,
  bodyClassName,
  interactive = false,
}: SwissArchivalCardProps) {
  return (
    <article
      className={cn(
        swissSpec.cardShellClass,
        interactive && swissSpec.interactiveClass,
        className,
      )}
    >
      <div className={swissSpec.cardHeaderBandClass}>
        <span className={swissSpec.cardHeaderMetaClass}>NO. {no}</span>
        <div className="flex items-center gap-4">
          {category ? (
            <span className={swissSpec.cardHeaderMetaClass}>{category}</span>
          ) : null}
          <span className={swissSpec.cardHeaderMetaClass}>{year}</span>
        </div>
      </div>
      <div className={cn(swissSpec.cardBodyClass, bodyClassName)}>
        {children}
      </div>
    </article>
  );
}
