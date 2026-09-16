import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";
import { journal } from "@/data/journal";

export const metadata: Metadata = {
  title: "Journal",
  description: "Notes from the practice, and from the days around it.",
};

export default function JournalPage() {
  return (
    <article className="mx-auto max-w-6xl px-6 pb-20 pt-4 md:px-10 md:pb-28">
      <SectionLabel>Journal</SectionLabel>
      <h1 className="mt-4 max-w-[16ch] font-display text-4xl leading-tight text-pine md:text-6xl">
        Notes from around the chair.
      </h1>
      <ul className="mt-14 divide-y divide-sage border-y border-sage">
        {journal.map((post) => (
          <li key={post.slug} className="py-10">
            <p className="text-sm text-stone">{post.date}</p>
            <h2 className="mt-2 font-display text-2xl leading-snug text-pine md:text-3xl">
              <Link href={`/blog/${post.slug}`} className="hover:opacity-70">
                {post.title}
              </Link>
            </h2>
            <p className="mt-4 max-w-[38rem] text-base leading-relaxed text-ink">
              {post.excerpt}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}
