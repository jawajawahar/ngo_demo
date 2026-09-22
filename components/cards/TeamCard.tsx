import Image from "next/image";
import ImageReveal from "@/components/animations/ImageReveal";
import type { TeamMember } from "@/types";

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div>
      <ImageReveal className="relative aspect-[4/5] w-full rounded-lg">
        <Image
          src={member.image}
          alt={member.imageAlt}
          fill
          sizes="(min-width: 1024px) 22vw, 45vw"
          className="object-cover"
        />
      </ImageReveal>
      <h3 className="mt-4 font-display text-lg text-ink">{member.name}</h3>
      <p className="mt-1 text-sm font-semibold uppercase tracking-[0.08em] text-sage">
        {member.role}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{member.bio}</p>
    </div>
  );
}
