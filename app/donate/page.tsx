import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import Container from "@/components/layout/Container";
import TextReveal from "@/components/animations/TextReveal";
import FadeUp from "@/components/animations/FadeUp";
import DemoBadge from "@/components/ui/DemoBadge";
import DonateForm from "@/components/forms/DonateForm";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Make a one-time or monthly donation to Voice of Need Foundation. Demo checkout — no real payment is processed.",
};

const giftImpact = [
  { amount: "$25", impact: "Provides school supplies for one student for a term (demo data)." },
  { amount: "$50", impact: "Funds a mobile clinic visit to one village (demo data)." },
  { amount: "$100", impact: "Plants 500 native trees through our reforestation program (demo data)." },
  { amount: "$250", impact: "Supports a family through emergency shelter and food relief (demo data)." },
];

export default function DonatePage() {
  return (
    <section className="pt-36 pb-24 lg:pt-44 lg:pb-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <FadeUp>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
              Donate
            </span>
          </FadeUp>
          <TextReveal
            as="h1"
            className="mt-4 text-balance font-display text-[2.25rem] leading-[1.1] text-ink sm:text-[3rem]"
          >
            Your gift, directed by the community that needs it.
          </TextReveal>
          <FadeUp delay={0.1}>
            <p className="mx-auto mt-5 max-w-lg text-base text-muted">
              89% of program funds go directly to the field (demo data). This checkout
              is a demonstration — no real payment is processed.
            </p>
          </FadeUp>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <DonateForm />
          </div>

          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <div className="flex items-center gap-2">
                <h2 className="font-display text-lg text-ink">Where your gift goes</h2>
                <DemoBadge />
              </div>
              <ul className="mt-5 flex flex-col divide-y divide-ink/10 border-t border-ink/10">
                {giftImpact.map((item) => (
                  <li key={item.amount} className="flex gap-4 py-4">
                    <span className="w-14 shrink-0 font-display text-xl text-forest">
                      {item.amount}
                    </span>
                    <p className="text-sm leading-relaxed text-muted">{item.impact}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-start gap-3 rounded-md border border-ink/10 bg-white px-4 py-4 text-xs text-muted">
                <ShieldCheck className="mt-0.5 size-4 shrink-0 text-forest" aria-hidden="true" />
                <p>
                  This is a demo checkout for a fictional organization. See our{" "}
                  <Link href="/impact" className="underline underline-offset-2 hover:text-ink">
                    impact and financial reports
                  </Link>{" "}
                  page for how real transparency reporting would appear here.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
