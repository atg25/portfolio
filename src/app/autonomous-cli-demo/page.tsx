import { AutonomousCliShowcase } from "@/components/autonomous-cli-showcase";
import { SwissArchivalCard } from "@/components/swiss/archival-card";
import { SwissPageHeader } from "@/components/swiss/page-header";
import { SwissPageShell } from "@/components/swiss/page-shell";

export default function AutonomousCliDemoPage() {
  return (
    <SwissPageShell mainClassName="gap-y-12">
      <SwissPageHeader
        label="TOOL DEMO — 2026"
        title={
          <>
            AUTONOMOUS
            <br />
            CLI SHOWCASE
          </>
        }
        description="Simulated terminal + generated markdown output for solid-cli."
      />

      <section className="col-span-12">
        <SwissArchivalCard no="01" year="2026" category="DEVELOPER TOOLING">
          <AutonomousCliShowcase />
        </SwissArchivalCard>
      </section>
    </SwissPageShell>
  );
}
