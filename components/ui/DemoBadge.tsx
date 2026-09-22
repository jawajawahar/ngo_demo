import { cn } from "@/lib/utils";

export default function DemoBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-current/30 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted",
        className
      )}
    >
      Demo data
    </span>
  );
}
