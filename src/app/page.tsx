import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Hero } from "@/components/Hero";
import { RevealHeading } from "@/components/RevealHeading";
import { SectionLabel } from "@/components/SectionLabel";
import { ServiceList } from "@/components/ServiceList";
import { bio } from "@/data/bio";
import { homeGallery } from "@/data/gallery";
import { services } from "@/data/services";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-12 md:gap-8 md:px-10 md:py-28">
        <div className="md:col-span-6">
          <SectionLabel>About</SectionLabel>
          <RevealHeading className="mt-4 max-w-[22ch] font-display text-3xl leading-tight text-pine md:text-4xl">
            {bio.aboutLead}
          </RevealHeading>
          <p className="mt-6 max-w-[38rem] text-base leading-relaxed text-ink">
            {bio.aboutBody[0]}
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block text-sm text-pine underline decoration-sage underline-offset-4 transition-opacity hover:opacity-70"
          >
            More about me
          </Link>
        </div>
        <FadeIn className="relative aspect-[4/5] md:col-span-5 md:col-start-8">
          <Image
            src={site.photo}
            alt={`${site.firstName} on the beach, smiling toward the camera`}
            fill
            className="object-cover object-[center_70%]"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </FadeIn>
      </section>

      <section className="bg-sage/50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <SectionLabel>What I do</SectionLabel>
          <RevealHeading className="mt-4 max-w-[20ch] font-display text-3xl leading-tight text-pine md:text-4xl">
            Plain work, named plainly.
          </RevealHeading>
          <div className="mt-10">
            <ServiceList items={services.slice(0, 4)} />
          </div>
          <Link
            href="/services"
            className="mt-8 inline-block text-sm text-pine underline decoration-sage underline-offset-4 transition-opacity hover:opacity-70"
          >
            All of the care I offer
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <SectionLabel>From the week</SectionLabel>
        <div className="mt-4 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <RevealHeading className="max-w-[18ch] font-display text-3xl leading-tight text-pine md:text-4xl">
            A practice, and a life around it.
          </RevealHeading>
          <Link
            href="/gallery"
            className="text-sm text-pine underline decoration-sage underline-offset-4 transition-opacity hover:opacity-70"
          >
            Open the gallery
          </Link>
        </div>
        <div className="mt-10">
          <GalleryGrid items={homeGallery} />
        </div>
      </section>
    </>
  );
}
