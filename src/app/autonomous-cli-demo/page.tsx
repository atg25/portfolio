import { AutonomousCliShowcase } from "@/components/autonomous-cli-showcase";

export default function AutonomousCliDemoPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-4 pt-20 pb-10 space-y-4">
        <h1 className="font-heading text-2xl md:text-3xl text-gradient-brand">
          Autonomous Development CLI Demo
        </h1>
        <p className="text-sm md:text-base text-muted-foreground max-w-3xl">
          Simulated terminal + generated markdown showcase for solid-cli.
        </p>
        <AutonomousCliShowcase />
      </section>
    </main>
  );
}
