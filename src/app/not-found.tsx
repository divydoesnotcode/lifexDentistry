import Link from "next/link";

export default function NotFound() {
  return (
    <article className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <p className="text-sm text-stone">Not found</p>
      <h1 className="mt-4 font-display text-4xl leading-tight text-pine md:text-5xl">
        That page isn&apos;t here.
      </h1>
      <p className="mt-6 max-w-[38rem] text-base leading-relaxed text-ink">
        It may have moved, or it never existed. Start from the beginning.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block text-sm text-pine underline decoration-sage underline-offset-4 hover:opacity-70"
      >
        Back home
      </Link>
    </article>
  );
}
