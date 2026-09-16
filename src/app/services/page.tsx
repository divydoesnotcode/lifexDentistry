import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";
import { ServiceList } from "@/components/ServiceList";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Plain-language care: unhurried cleanings, careful fillings, whitening, aligners, and same-week help when something hurts.",
};

export default function ServicesPage() {
  return (
    <article className="mx-auto max-w-6xl px-6 pb-20 pt-4 md:px-10 md:pb-28">
      <SectionLabel>Services</SectionLabel>
      <h1 className="mt-4 max-w-[18ch] font-display text-4xl leading-tight text-pine md:text-6xl">
        What you actually get.
      </h1>
      <p className="mt-6 max-w-[38rem] text-base leading-relaxed text-ink">
        I don&apos;t name procedures after billing codes. Below is the work I do,
        in the language I use in the chair.
      </p>
      <div className="mt-12">
        <ServiceList />
      </div>
      <p className="mt-12 max-w-[38rem] text-base leading-relaxed text-ink">
        If you&apos;re not sure which of these you need, that&apos;s a reason to
        write — not a reason to guess.{" "}
        <Link
          href="/contact"
          className="text-pine underline decoration-sage underline-offset-4 hover:opacity-70"
        >
          Get in touch
        </Link>{" "}
        and tell me what&apos;s going on.
      </p>
    </article>
  );
}
