import type { Metadata } from "next";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Voice of Need Foundation's privacy policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-36 pb-24 lg:pt-44 lg:pb-32">
      <Container className="mx-auto max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
          Legal
        </span>
        <h1 className="mt-4 font-display text-[2.25rem] text-ink sm:text-[3rem]">
          Privacy Policy
        </h1>
        <div className="mt-8 flex flex-col gap-5 text-base leading-relaxed text-muted">
          <p>
            This is a demonstration website built for Voice of Need Foundation, a fictional
            organization created for template purposes. No real personal data is
            collected, stored, or processed by this site — all forms are non-functional
            demos.
          </p>
          <p>
            In a production deployment, this page would describe what information is
            collected from donors, volunteers, and site visitors; how it is used and
            protected; and how individuals can request access to or deletion of their
            data, in line with applicable regulations such as GDPR or CCPA.
          </p>
        </div>
      </Container>
    </section>
  );
}
