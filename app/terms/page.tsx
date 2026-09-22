import type { Metadata } from "next";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Voice of Need Foundation's terms of use.",
};

export default function TermsPage() {
  return (
    <section className="pt-36 pb-24 lg:pt-44 lg:pb-32">
      <Container className="mx-auto max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
          Legal
        </span>
        <h1 className="mt-4 font-display text-[2.25rem] text-ink sm:text-[3rem]">
          Terms of Use
        </h1>
        <div className="mt-8 flex flex-col gap-5 text-base leading-relaxed text-muted">
          <p>
            This is a demonstration website built for Voice of Need Foundation, a fictional
            organization created for template purposes. All statistics, stories,
            partnerships, and figures shown across this site are placeholder demo
            content and do not represent a real organization.
          </p>
          <p>
            In a production deployment, this page would set out the terms governing use
            of the site, donation processing, intended use of donated funds, and
            applicable limitations of liability.
          </p>
        </div>
      </Container>
    </section>
  );
}
