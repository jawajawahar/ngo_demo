"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import { mainNav, orgContact } from "@/data/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/our-work") {
      return (
        pathname === "/our-work" ||
        pathname.startsWith("/our-work/") ||
        pathname === "/appeals" ||
        pathname.startsWith("/appeals/")
      );
    }
    if (href === "/completed-projects") {
      return (
        pathname === "/completed-projects" ||
        pathname.startsWith("/completed-projects/") ||
        pathname === "/impact" ||
        pathname.startsWith("/impact/")
      );
    }
    if (href === "/get-involved") {
      return (
        pathname === "/get-involved" ||
        pathname.startsWith("/get-involved/") ||
        pathname === "/support-us" ||
        pathname.startsWith("/support-us/")
      );
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const isSolid = scrolled || mobileOpen;
  const isLightPage =
    pathname === "/contact" ||
    pathname === "/donate" ||
    pathname === "/terms" ||
    pathname === "/privacy-policy";
  const useDarkText = isSolid || isLightPage;

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-colors duration-300">
      {/* Main bar */}
      <div
        className={cn(
          "transition-all duration-300",
          isSolid
            ? "border-b border-ink/10 bg-white/95 backdrop-blur-md shadow-card"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <Container className="flex h-20 items-center justify-between gap-6">
          <Logo light={!useDarkText} />

          <nav className="hidden items-center gap-5 xl:gap-8 lg:flex" aria-label="Primary">
            {mainNav.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "group relative flex flex-col items-center py-2 text-[13px] font-bold uppercase tracking-wider transition-colors duration-200",
                    useDarkText
                      ? active
                        ? "text-ink"
                        : "text-forest hover:text-ink"
                      : active
                        ? "text-white"
                        : "text-white/85 hover:text-white"
                  )}
                >
                  <span>{link.label}</span>
                  <span
                    className={cn(
                      "absolute -bottom-1 size-1.5 rounded-full transition-all duration-200",
                      useDarkText ? "bg-forest" : "bg-gold",
                      active
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-75 group-hover:opacity-40 group-hover:scale-100"
                    )}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button href="/donate" variant="donate" showArrow={false}>
              Donate now
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/donate"
              className="rounded-md bg-gold px-4 py-2 text-sm font-bold uppercase text-white shadow-sm"
            >
              Donate
            </Link>
            <button
              type="button"
              className={cn(
                "flex size-10 items-center justify-center transition-colors",
                useDarkText ? "text-ink" : "text-white"
              )}
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </Container>

        {/* Mobile Dropdown */}
        <div
          id="mobile-menu"
          className={cn(
            "grid overflow-hidden bg-white transition-[grid-template-rows] duration-300 ease-out lg:hidden",
            mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          )}
        >
          <div className="overflow-hidden">
            <Container className="flex max-h-[calc(100svh-5rem)] flex-col gap-1 overflow-y-auto pb-8 pt-2">
              {mainNav.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center justify-between py-3 text-sm font-bold uppercase tracking-wider transition-colors",
                      active ? "text-forest" : "text-ink hover:text-forest"
                    )}
                  >
                    <span>{link.label}</span>
                  </Link>
                );
              })}
              <Button
                href="/donate"
                variant="donate"
                onClick={() => setMobileOpen(false)}
                className="mt-6 w-full"
                showArrow={false}
              >
                Donate now
              </Button>
              <p className="mt-4 text-center text-xs text-muted">
                Registered Charity No. {orgContact.charityNumber} · {orgContact.phone}
              </p>
            </Container>
          </div>
        </div>
      </div>
    </header>
  );
}
