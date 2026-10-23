import Link from "next/link";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/layout/Container";
import Logo from "@/components/ui/Logo";
import NewsletterForm from "@/components/forms/NewsletterForm";
import { footerNav, orgContact } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-forest pb-20 text-white lg:pb-0">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-20">
        <div className="flex flex-col gap-6 sm:col-span-2 lg:col-span-4">
          <Logo light showText />
          <p className="max-w-sm text-sm leading-relaxed text-white/70">
            {orgContact.tagline} We work on education, healthcare, clean water and
            emergency relief — for the long term.
          </p>
          <p className="text-sm text-white/80">
            Registered Charity No. {orgContact.charityNumber}
          </p>
          <div className="flex gap-2">
            {orgContact.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex size-10 items-center justify-center rounded-md border border-white/30 text-xs font-bold text-white transition-colors hover:bg-white hover:text-forest"
              >
                {social.label.slice(0, 2).toUpperCase()}
              </a>
            ))}
          </div>
        </div>

        <FooterLinks title="Organisation" links={footerNav.organization} className="lg:col-span-2" />
        <FooterLinks title="Get Involved" links={footerNav.getInvolved} className="lg:col-span-2" />

        <div className="sm:col-span-2 lg:col-span-4">
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">Contact us</h3>
          <ul className="mt-5 flex flex-col gap-3 text-sm text-white/75">
            <li className="flex items-center gap-3">
              <Phone className="size-4" aria-hidden="true" />
              <a href={`tel:${orgContact.phone.replace(/[^+\d]/g, "")}`} className="hover:text-white">
                {orgContact.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4" aria-hidden="true" />
              <a href={`mailto:${orgContact.email}`} className="hover:text-white">
                {orgContact.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-4" aria-hidden="true" />
              {orgContact.address}
            </li>
          </ul>
          <h3 className="mt-8 text-sm font-bold uppercase tracking-[0.16em] text-white">Newsletter</h3>
          <p className="mt-3 text-sm text-white/70">Project updates once a month. No noise.</p>
          <div className="mt-4">
            <NewsletterForm light />
          </div>
        </div>
      </Container>

      <div className="border-t border-white/20">
        <Container className="flex flex-col gap-4 py-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} {orgContact.name}. All rights reserved.
          </span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {footerNav.legal.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
            <a
              href="#main-content"
              className="flex items-center gap-1.5 font-semibold text-white/80 hover:text-white"
            >
              <ArrowUp className="size-3.5" aria-hidden="true" />
              Back to top
            </a>
          </div>
        </Container>
        <Container className="pb-6">
          <p className="text-center text-xs text-white/60">
            Statistics, stories and figures on this site are placeholder content pending
            real information.
          </p>
        </Container>
      </div>
    </footer>
  );
}

function FooterLinks({
  title,
  links,
  className,
}: {
  title: string;
  links: { label: string; href: string }[];
  className?: string;
}) {
  return (
    <nav aria-label={title} className={className}>
      <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">{title}</h3>
      <ul className="mt-5 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-white/80 transition-colors hover:text-white hover:underline hover:underline-offset-4"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
