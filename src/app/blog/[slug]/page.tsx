import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionLabel } from "@/components/SectionLabel";
import { getPost, journal } from "@/data/journal";

export function generateStaticParams() {
  return journal.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Journal" };
  return { title: post.title, description: post.excerpt };
}

export default async function JournalPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-6xl px-6 pb-20 pt-4 md:px-10 md:pb-28">
      <SectionLabel>Journal</SectionLabel>
      <p className="mt-6 text-sm text-stone">{post.date}</p>
      <h1 className="mt-3 max-w-[20ch] font-display text-4xl leading-tight text-pine md:text-6xl">
        {post.title}
      </h1>
      <div className="mt-12 max-w-[40rem]">
        {post.body.map((paragraph) => (
          <p
            key={paragraph}
            className="mb-6 text-base leading-relaxed text-ink"
          >
            {paragraph}
          </p>
        ))}
      </div>
      <Link
        href="/blog"
        className="mt-4 inline-block text-sm text-pine underline decoration-sage underline-offset-4 hover:opacity-70"
      >
        All notes
      </Link>
    </article>
  );
}
