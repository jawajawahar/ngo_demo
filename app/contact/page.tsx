import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/layout/Container";
import TextReveal from "@/components/animations/TextReveal";
import FadeUp from "@/components/animations/FadeUp";
import ContactForm from "@/components/forms/ContactForm";
import { orgContact } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Voice of Need Foundation.",
};

export default function ContactPage() {
  return (
    <section className="pt-36 pb-24 lg:pt-44 lg:pb-32">
      <Container>
        <div className="max-w-2xl">
          <FadeUp>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
              Contact
            </span>
          </FadeUp>
          <TextReveal
            as="h1"
            className="mt-4 text-balance font-display text-[2.25rem] leading-[1.1] text-ink sm:text-[3rem]"
          >
            We&apos;d like to hear from you.
          </TextReveal>
          <FadeUp delay={0.1}>
            <p className="mt-5 max-w-lg text-base text-muted">
              Questions about donating, volunteering, partnerships, or press — send us a
              note and the right person on our team will follow up.
            </p>
          </FadeUp>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <aside className="flex flex-col gap-10 lg:col-span-5">
            <div>
              <h2 className="font-display text-lg text-ink">Reach us directly</h2>
              <ul className="mt-5 flex flex-col gap-4 text-sm text-ink/80">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-forest" aria-hidden="true" />
                  <a href={`mailto:${orgContact.email}`} className="hover:text-ink">
                    {orgContact.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-forest" aria-hidden="true" />
                  <a
                    href={`tel:${orgContact.phone.replace(/[^+\d]/g, "")}`}
                    className="hover:text-ink"
                  >
                    {orgContact.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-forest" aria-hidden="true" />
                  <span>{orgContact.address}</span>
                </li>
              </ul>
            </div>

            <div
              className="flex aspect-[4/3] w-full items-center justify-center rounded-lg border border-dashed border-ink/20 bg-cream text-center text-sm text-muted"
              role="img"
              aria-label="Map placeholder showing the Voice of Need Foundation office location"
            >
              Map placeholder
              <br />
              (embed pending real address)
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
