import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import { SectionLabel } from "@/components/SectionLabel";
import { gallery } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A personal photo journal — the practice, and the days around the chair.",
};

export default function GalleryPage() {
  return (
    <article className="mx-auto max-w-6xl px-6 pb-20 pt-4 md:px-10 md:pb-28">
      <SectionLabel>Gallery</SectionLabel>
      <h1 className="mt-4 max-w-[16ch] font-display text-4xl leading-tight text-pine md:text-6xl">
        From the week, and the ones around it.
      </h1>
      <p className="mt-6 max-w-[38rem] text-base leading-relaxed text-ink">
        Not a portfolio wall. Just the rooms, the coast, and the person you
        would be sitting with.
      </p>
      <div className="mt-12">
        <GalleryGrid items={gallery} />
      </div>
    </article>
  );
}
