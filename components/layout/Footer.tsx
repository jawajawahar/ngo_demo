import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Container from "@/components/layout/Container";
import Logo from "@/components/ui/Logo";
import NewsletterForm from "@/components/forms/NewsletterForm";
import { footerNav, orgContact } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-white">
      <Container className="grid grid-cols-1 gap-14 py-20 lg:grid-cols-12 lg:gap-8 lg:py-28">
        <div className="flex flex-col gap-6 lg:col-span-4">
          <Logo light />
          <p className="max-w-sm text-sm leading-relaxed text-white/70">
            {orgContact.tagline} We partner with communities on education, clean water,
            healthcare, the environment, and emergency relief — for the long term.
          </p>
          <div className="flex gap-3">
            {orgContact.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex size-10 items-center justify-center rounded-full border border-white/15 text-xs font-semibold text-white/80 transition-colors hover:border-white/40 hover:text-white"
              >
                {social.label.slice(0, 2).toUpperCase()}
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Organization" className="lg:col-span-2">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
            Organization
          </h3>
          <ul className="mt-5 flex flex-col gap-3">
            {footerNav.organization.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/75 transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Get Involved" className="lg:col-span-2">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
            Get Involved
          </h3>
          <ul className="mt-5 flex flex-col gap-3">
            {footerNav.getInvolved.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/75 transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
            Stay close to the work
          </h3>
          <p className="mt-5 text-sm text-white/70">
            One email a month. Field updates, no noise.
          </p>
          <div className="mt-4">
            <NewsletterForm light />
          </div>
        </div>
      </Container>

      <Container className="flex flex-col gap-6 border-t border-white/10 py-8 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
        <ul className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
          <li className="flex items-center gap-2">
            <Mail className="size-3.5" aria-hidden="true" />
            <a href={`mailto:${orgContact.email}`} className="hover:text-white">
              {orgContact.email}
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Phone className="size-3.5" aria-hidden="true" />
            <a href={`tel:${orgContact.phone.replace(/[^+\d]/g, "")}`} className="hover:text-white">
              {orgContact.phone}
            </a>
          </li>
          <li className="flex items-center gap-2">
            <MapPin className="size-3.5" aria-hidden="true" />
            {orgContact.address}
          </li>
        </ul>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {footerNav.legal.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
          <span>© {new Date().getFullYear()} {orgContact.name}</span>
        </div>
      </Container>

      <div className="border-t border-white/10 bg-forest-dark/60 py-3">
        <Container>
          <p className="text-center text-xs text-white/45">
            Demonstration website. Voice of Need Foundation is a fictional organization; all
            statistics, stories, and figures are placeholder content pending real
            information.
          </p>
        </Container>
      </div>
    </footer>
  );
}
