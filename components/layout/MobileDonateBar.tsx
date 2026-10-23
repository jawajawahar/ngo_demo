"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

/** Sticky bottom Donate bar on small screens, shown after the visitor scrolls past the hero. */
export default function MobileDonateBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/donate") return null;

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-white/95 px-4 py-3 backdrop-blur-md transition-transform duration-300 lg:hidden",
        visible ? "translate-y-0" : "translate-y-full"
      )}
      aria-hidden={!visible}
    >
      <div className="flex items-center gap-3">
        <p className="flex-1 text-xs leading-snug text-muted">
          <span className="block text-sm font-bold text-ink">100% Donation Policy</span>
          Every gift reaches the field.
        </p>
        <Link
          href="/donate"
          tabIndex={visible ? 0 : -1}
          className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-bold uppercase text-white"
        >
          Donate now
        </Link>
      </div>
    </div>
  );
}
