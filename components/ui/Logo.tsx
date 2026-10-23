import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  light?: boolean;
  showText?: boolean;
  className?: string;
}

export default function Logo({
  light = false,
  showText = false,
  className,
}: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-3", className)}
      aria-label="Voice of Need Foundation — Home"
    >
      <span
        className="relative flex size-12 sm:size-14 items-center justify-center overflow-hidden rounded-full bg-white shadow-md ring-2 ring-gold/40 transition-all duration-300 group-hover:scale-105 group-hover:ring-gold group-hover:shadow-lg"
        aria-hidden="true"
      >
        <Image
          src="/logo-mark.png"
          alt="Voice of Need Foundation Logo"
          width={56}
          height={56}
          className="size-full scale-[1.12] object-cover"
          priority
        />
      </span>

      {showText && (
        <span className="flex flex-col leading-none">
          <span className={cn("font-display text-[1.2rem] tracking-tight", light ? "text-white" : "text-ink")}>
            Voice of <span className={light ? "text-white" : "text-gold"}>Need</span>
          </span>
          <span
            className={cn(
              "mt-1 hidden text-[10px] font-semibold uppercase tracking-[0.22em] sm:block",
              light ? "text-white/60" : "text-muted"
            )}
          >
            Serving Humanity
          </span>
        </span>
      )}
    </Link>
  );
}
