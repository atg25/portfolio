import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { swissSpec } from "@/lib/swiss-design-system";

type SwissPageHeaderProps = {
  label: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  labelClassName?: string;
};

export function SwissPageHeader({
  label,
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
  labelClassName,
}: SwissPageHeaderProps) {
  return (
    <header className={cn("col-span-12 lg:col-span-10 space-y-6", className)}>
      <div className={cn(swissSpec.titleLabelClass, labelClassName)}>
        {label}
      </div>
      <h1 className={cn(swissSpec.titleClass, titleClassName)}>{title}</h1>
      {description ? (
        <p
          className={cn(
            "max-w-3xl text-base md:text-lg leading-relaxed",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
