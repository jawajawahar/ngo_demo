"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { ChevronDown, Menu, X } from "lucide-react";
import { gsap } from "@/lib/gsap";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import { mainNav } from "@/data/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!isHome) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -16 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
  }, [isHome]);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
        transparent
          ? "bg-transparent"
          : "bg-cream/90 shadow-[0_1px_0_rgba(17,22,19,0.06)] backdrop-blur-md"
      )}
    >
      <Container className="flex h-20 items-center justify-between lg:h-24">
        <Logo light={transparent} />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {mainNav.map((link) =>
            link.children ? (
              <div key={link.href} className="group/nav relative">
                <button
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-colors",
                    transparent ? "text-white/90 hover:text-white" : "text-ink/80 hover:text-ink"
                  )}
                  aria-haspopup="true"
                >
                  {link.label}
                  <ChevronDown className="size-3.5" aria-hidden="true" />
                </button>
                <div className="invisible absolute left-1/2 top-full w-56 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover/nav:visible group-hover/nav:opacity-100 group-focus-within/nav:visible group-focus-within/nav:opacity-100">
                  <div className="rounded-2xl border border-ink/8 bg-white p-2 shadow-xl">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-xl px-4 py-2.5 text-sm text-ink/80 transition-colors hover:bg-cream hover:text-ink"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  transparent ? "text-white/90 hover:text-white" : "text-ink/80 hover:text-ink"
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Button href="/donate" variant={transparent ? "outline-light" : "primary"} size="md" showArrow={false}>
            Donate
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            "flex size-10 items-center justify-center rounded-full transition-colors lg:hidden",
            transparent ? "text-white" : "text-ink"
          )}
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={cn(
          "grid overflow-hidden bg-cream transition-[grid-template-rows] duration-300 ease-out lg:hidden",
          mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <Container className="flex flex-col gap-1 pb-8 pt-2">
            {mainNav.map((link) => (
              <div key={link.href} className="border-b border-ink/8 py-3">
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-ink"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="mt-3 flex flex-col gap-3 pl-3">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-sm text-muted transition-colors hover:text-ink"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button
              href="/donate"
              onClick={() => setMobileOpen(false)}
              className="mt-6 w-full"
              showArrow={false}
            >
              Donate
            </Button>
          </Container>
        </div>
      </div>
    </header>
  );
}
