import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { SectionLabel } from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Booking",
  description:
    "Online booking is on its way. For now, reach out directly.",
};

export default function BookingPage() {
  return (
    <article className="mx-auto max-w-6xl px-6 pb-20 pt-4 md:px-10 md:pb-28">
      <SectionLabel>Booking</SectionLabel>
      <h1 className="mt-4 max-w-[20ch] font-display text-4xl leading-tight text-pine md:text-6xl">
        Online booking is on its way.
      </h1>
      <p className="mt-6 max-w-[38rem] text-base leading-relaxed text-ink">
        For now, reach out directly below. I&apos;ll reply with times that
        actually exist — not a calendar full of ghosts.
      </p>
      <p className="mt-4 max-w-[38rem] text-sm text-stone">
        Prefer email?{" "}
        <Link
          href="/contact"
          className="text-pine underline decoration-sage underline-offset-4 hover:opacity-70"
        >
          Go to contact
        </Link>
        .
      </p>
      <div className="mt-12">
        <ContactForm />
      </div>
    </article>
  );
}
