export const swissSpec = {
  pagePadding: "px-8 md:px-12 lg:px-16",
  pageSpacing: "pt-32 pb-24",
  pageGrid: "grid grid-cols-12 gap-x-6 gap-y-16",
  titleLabelClass: "swiss-label text-brand",
  titleClass:
    "font-heading font-black uppercase tracking-swiss leading-[0.88] text-5xl md:text-7xl lg:text-8xl",
  cardShellClass: "border-2 border-muted bg-card",
  cardHeaderBandClass:
    "bg-brand text-black p-3 flex items-center justify-between border-b-2 border-black",
  cardHeaderMetaClass: "font-mono text-xs font-bold uppercase tracking-label",
  cardBodyClass: "p-6 space-y-4",
  interactiveClass:
    "transition-all duration-100 hover:border-brand focus-visible:border-brand",
} as const;

export const swissCardMetaOrder = ["no", "year", "category"] as const;

export type SwissCardMetaKey = (typeof swissCardMetaOrder)[number];
