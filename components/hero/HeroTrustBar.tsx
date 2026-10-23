"use client";

import { BadgeCheck, Mail, Phone } from "lucide-react";
import Container from "@/components/layout/Container";
import { orgContact } from "@/data/navigation";
import { cn } from "@/lib/utils";

interface HeroTrustBarProps {
  className?: string;
}

export default function HeroTrustBar({ className }: HeroTrustBarProps) {
  return (
    <div className={cn("relative z-20 w-full px-4", className)}>
      <Container>
        <div className="mx-auto max-w-4xl rounded-2xl md:rounded-full bg-forest-dark/85 backdrop-blur-xl border border-white/20 px-5 py-2.5 sm:px-8 sm:py-3 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.5)] ring-1 ring-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-white/90">
            {/* Charity Registration */}
            <div className="flex items-center gap-2.5">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white/15 text-emerald-300 ring-1 ring-white/20">
                <BadgeCheck className="size-3.5" aria-hidden="true" />
              </span>
              <span className="text-white/80">
                Registered Charity No.{" "}
                <span className="font-semibold text-white tracking-wide">
                  {orgContact.charityNumber}
                </span>
              </span>
            </div>

            {/* Subtle Divider (Desktop) */}
            <span className="hidden sm:block h-4 w-px bg-white/20" aria-hidden="true" />

            {/* Phone */}
            <a
              href={`tel:${orgContact.phone.replace(/[^+\d]/g, "")}`}
              className="group flex items-center gap-2 text-white/90 transition-colors hover:text-white"
            >
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-emerald-300 transition-colors group-hover:bg-white group-hover:text-forest">
                <Phone className="size-3" aria-hidden="true" />
              </span>
              <span className="font-medium tracking-tight">{orgContact.phone}</span>
            </a>

            {/* Subtle Divider (Desktop) */}
            <span className="hidden sm:block h-4 w-px bg-white/20" aria-hidden="true" />

            {/* Email */}
            <a
              href={`mailto:${orgContact.email}`}
              className="group flex items-center gap-2 text-white/90 transition-colors hover:text-white"
            >
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-emerald-300 transition-colors group-hover:bg-white group-hover:text-forest">
                <Mail className="size-3" aria-hidden="true" />
              </span>
              <span className="font-medium tracking-tight">{orgContact.email}</span>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
