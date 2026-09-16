import { MotionLink } from "@/components/MotionLink";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer
      className="mt-24 bg-pine text-porcelain"
      style={{ viewTransitionName: "site-footer" }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 md:flex-row md:items-end md:justify-between md:px-10">
        <div className="max-w-md">
          <p className="text-sm text-sage">Get in touch</p>
          <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
            A note is enough. I read them myself.
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-sage">
            {site.location}. For now, write or call — online booking is on its
            way.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <MotionLink
            href="/contact"
            className="bg-coral px-5 py-3 text-sm text-porcelain"
          >
            Get in touch
          </MotionLink>
          <a
            href={`mailto:${site.email}`}
            className="text-sm text-sage underline-offset-4 hover:underline"
          >
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
