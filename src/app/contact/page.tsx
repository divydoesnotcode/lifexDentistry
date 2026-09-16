import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SectionLabel } from "@/components/SectionLabel";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Write to Etishree — a note is enough.",
};

export default function ContactPage() {
  return (
    <article className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-4 md:grid-cols-12 md:px-10 md:pb-28">
      <div className="md:col-span-5">
        <SectionLabel>Contact</SectionLabel>
        <h1 className="mt-4 font-display text-4xl leading-tight text-pine md:text-6xl">
          Write to me.
        </h1>
        <p className="mt-6 max-w-[38rem] text-base leading-relaxed text-ink">
          Say what&apos;s going on in your mouth, or just that you&apos;d like a
          first visit. I read these myself.
        </p>
        <p className="mt-6 text-sm text-stone">
          {site.location}
          <br />
          <a
            href={`mailto:${site.email}`}
            className="text-pine underline decoration-sage underline-offset-4 hover:opacity-70"
          >
            {site.email}
          </a>
        </p>
      </div>
      <div className="md:col-span-6 md:col-start-7 md:pt-12">
        <ContactForm />
      </div>
    </article>
  );
}
