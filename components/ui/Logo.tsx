import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-3 font-display text-xl tracking-tight group",
        light ? "text-white" : "text-ink",
        className
      )}
      aria-label="Voice of Need Foundation — Home"
    >
      <span
        className={cn(
          "relative flex size-9 items-center justify-center overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-105 shadow-sm",
          light ? "ring-2 ring-gold/40" : "ring-2 ring-gold/30"
        )}
        aria-hidden="true"
      >
        <Image
          src="/logo.png"
          alt="Voice of Need Logo"
          width={36}
          height={36}
          className="size-full object-cover"
        />
      </span>
      <span className="font-serif text-xl font-bold tracking-tight">
        Voice of Need
      </span>
    </Link>
  );
}
