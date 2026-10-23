import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center py-32">
      <Container className="mx-auto max-w-xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          404
        </span>
        <h1 className="mt-4 font-display text-[2.5rem] leading-[1.1] text-ink sm:text-[3.25rem]">
          This page hasn&apos;t been built yet.
        </h1>
        <p className="mt-5 text-base text-muted">
          The page you&apos;re looking for may have moved or doesn&apos;t exist. Let&apos;s
          get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="/">Back to home</Button>
          <Link
            href="/contact"
            className="text-sm font-medium text-ink/70 underline underline-offset-4 hover:text-ink"
          >
            Contact us
          </Link>
        </div>
      </Container>
    </section>
  );
}
