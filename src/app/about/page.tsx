import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { SectionLabel } from "@/components/SectionLabel";
import { bio } from "@/data/bio";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: bio.aboutLead,
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-6xl px-6 pb-20 pt-4 md:px-10 md:pb-28">
      <SectionLabel>About</SectionLabel>
      <h1 className="mt-4 max-w-[20ch] font-display text-4xl leading-tight text-pine md:text-6xl">
        {bio.aboutLead}
      </h1>

      <div className="mt-14 grid items-start gap-12 md:grid-cols-12">
        <FadeIn className="relative aspect-[3/4] md:col-span-5">
          <Image
            src={site.photo}
            alt={`${site.firstName} at the beach`}
            fill
            className="object-cover object-[center_70%]"
            sizes="(max-width: 768px) 100vw, 42vw"
            loading="eager"
            fetchPriority="high"
          />
        </FadeIn>
        <div className="md:col-span-6 md:col-start-7">
          {bio.aboutBody.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-0 mb-6 max-w-[38rem] text-base leading-relaxed text-ink"
            >
              {paragraph}
            </p>
          ))}
          <p className="max-w-[38rem] font-display text-2xl leading-snug text-pine">
            {bio.aboutAside}
          </p>
          <p className="mt-8 max-w-[38rem] text-base leading-relaxed text-ink">
            I work as a general dentist in {site.location}. The practice is
            small on purpose. If that sounds like the kind of room you want to
            sit in, write to me — I&apos;ll tell you what a first visit looks
            like.
          </p>
        </div>
      </div>
    </article>
  );
}
