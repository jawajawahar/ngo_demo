import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/animations/FadeUp";
import { images } from "@/data/images";

const points = [
  "Your donation goes to the appeal you choose.",
  "Running costs are funded separately.",
  "Every project is reported back with photos and outcomes.",
];

export default function DonationPolicy() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeUp className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
          <Image
            src={images.handsReaching}
            alt="Two hands reaching toward each other in support"
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="font-display text-6xl text-gold sm:text-7xl">100%</p>
          <h2 className="mt-2 font-display text-[2rem] uppercase leading-tight text-forest sm:text-[2.5rem]">
            Donation policy
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            We keep project funds and running costs completely separate, so your
            generosity reaches the families who need it.
          </p>
          <ul className="mt-6 flex flex-col gap-3 border-l-4 border-forest pl-5">
            {points.map((point) => (
              <li key={point} className="font-medium text-ink/85">
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/donate" variant="donate" size="lg" showArrow={false}>
              Donate now
            </Button>
            <Button href="/impact" variant="secondary" size="lg" showArrow={false}>
              Our reports
            </Button>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
