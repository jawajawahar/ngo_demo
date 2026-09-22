import { FileText } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import DemoBadge from "@/components/ui/DemoBadge";
import FadeUp from "@/components/animations/FadeUp";
import { impactReports } from "@/data/impact";

export default function ReportsSection() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <Container>
        <div className="mb-14 flex flex-wrap items-center gap-3">
          <SectionHeading
            eyebrow="Transparency"
            title="Reports & financials"
            className="max-w-xl"
          />
          <DemoBadge />
        </div>

        <div className="flex flex-col divide-y divide-ink/10 border-y border-ink/10">
          {impactReports.map((report, index) => (
            <FadeUp
              key={`${report.year}-${report.title}`}
              delay={index * 0.05}
              className="flex flex-col items-start justify-between gap-3 py-6 sm:flex-row sm:items-center"
            >
              <div className="flex items-start gap-4">
                <FileText className="mt-1 size-5 shrink-0 text-forest" aria-hidden="true" />
                <div>
                  <p className="font-display text-lg text-ink">
                    {report.year} {report.title}
                  </p>
                  <p className="mt-1 max-w-md text-sm text-muted">{report.description}</p>
                </div>
              </div>
              <span
                className="shrink-0 rounded-full border border-ink/20 px-4 py-2 text-xs font-medium text-muted"
                title="Placeholder — real report not yet available"
              >
                {report.fileLabel} (sample)
              </span>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
