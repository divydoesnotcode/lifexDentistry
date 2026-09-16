# Motion & Interaction Spec — Framer Motion + GSAP

Reference: [landonorris.com](https://landonorris.com) — cinematic scroll-driven site with a pinned horizontal photo rail, big animated type reveals, a locked-viewport "load in" moment, and a logo marquee. This spec adapts those interaction patterns to the dentist site's content and tone (warm/personal, not motorsport-aggressive) — same techniques, different voice.

This is a motion layer added on top of the existing `dentist-website-spec.md` (structure) and `dentist-website-frontend-design.md` (visual tokens). Keep the color/type tokens from that file; this doc only adds animation.

## Install

```bash
npm install framer-motion gsap
```

GSAP's `ScrollTrigger` plugin needs registering once, client-side only (it touches the DOM):

```bash
# no separate install — ScrollTrigger ships inside the gsap package
```

Create `src/lib/gsap.ts`:
```ts
"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
```

## Division of labor

Don't let both libraries fight over the same element. Split responsibilities:

- **Framer Motion** — component-level UI motion: page/route transitions, entrance reveals on mount, hover/tap micro-interactions, layout animations (elements reflowing), the mobile nav opening.
- **GSAP + ScrollTrigger** — scroll-driven timelines: pinning a section while horizontal content scrolls past, scrubbing an animation's progress to scroll position, parallax layers. This is what Framer Motion is weaker at.

Rule of thumb: if it happens because the user scrolled, it's GSAP. If it happens because a component mounted, changed state, or was hovered/tapped, it's Framer Motion.

## Patterns to build (mapped from the reference site)

### 1. Locked-viewport hero load-in (Framer Motion)
On first load, the hero photo and headline settle into place together — a single orchestrated entrance, not a cascade of fade-ups on every element.

```tsx
"use client";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        {/* hero photo */}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* headline + CTA */}
      </motion.div>
    </section>
  );
}
```

### 2. Pinned horizontal scroll gallery (GSAP ScrollTrigger)
The reference site's signature move: the section pins in place while a row of photos scrolls horizontally as the user scrolls down. Use this for the Gallery/portfolio section — a run of case photos or lifestyle shots.

```tsx
"use client";
import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function HorizontalGallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const section = sectionRef.current;
    if (!track || !section) return;

    const scrollLength = track.scrollWidth - section.offsetWidth;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: -scrollLength,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${scrollLength}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden">
      <div ref={trackRef} className="flex gap-6 w-max">
        {/* gallery images, each a fixed-width card */}
      </div>
    </section>
  );
}
```

### 3. Scroll-scrubbed text reveal (GSAP ScrollTrigger)
Section headlines (e.g. "About," "Services") fade/slide in tied directly to scroll position rather than a fixed timed entrance — mirrors the reference site's headline treatment as you scroll into "On Track" / "Off Track" sections.

```tsx
useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from(".reveal-heading", {
      opacity: 0,
      y: 40,
      scrollTrigger: {
        trigger: ".reveal-heading",
        start: "top 80%",
        end: "top 40%",
        scrub: true,
      },
    });
  });
  return () => ctx.revert();
}, []);
```

### 4. Partner/press marquee (GSAP, infinite loop)
The reference site's logo row translates directly: use for a "Featured in" / "Trusted by" row (dental associations, local press, review platforms) if the dentist has any to show. Skip this section entirely if there's nothing real to put in it — don't invent placeholder logos.

```tsx
useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.to(".marquee-track", {
      xPercent: -50,
      repeat: -1,
      duration: 24,
      ease: "linear",
    });
  });
  return () => ctx.revert();
}, []);
```
Track content duplicated once (`[...logos, ...logos]`) so the loop is seamless.

### 5. Hover/tap micro-interactions (Framer Motion)
Nav links, gallery thumbnails, and the CTA button get small, confident hover responses — not lifts/shadows (keep to the earlier design brief's restraint), but a slight scale or underline reveal.

```tsx
<motion.a
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  transition={{ duration: 0.2 }}
  className="..."
>
  See my work
</motion.a>
```

### 6. Page transitions (Framer Motion `AnimatePresence`)
Soft cross-fade between routes (About → Services → Gallery) so navigation doesn't feel like a hard reload.

```tsx
"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
```

## What to adapt, not copy, from the reference

- **Skip the forced portrait/rotate-device lock.** That's an F1-specific stylistic flex; a dentist site needs to just work on mobile, not gate it.
- **Skip aggressive scroll-jacking on every section.** The reference pins almost the whole page. For this site, reserve pinning for one section (the gallery) — everything else scrolls normally. Motion should support finding information fast, not slow the visitor down.
- **Tone down the color intensity.** The reference uses stark black + lime-green for drama. Keep this site on the warm palette from the design brief (Porcelain / Deep Pine Teal / Living Coral) — same *mechanics*, different *mood*.
- **Keep copy-forward moments calm.** The reference's bold, punchy headline animation works for a sports brand's energy; here, headline reveals should feel confident but unhurried.

## Performance & accessibility

- Wrap all GSAP ScrollTrigger setup in `useEffect` with `gsap.context()` + cleanup (`ctx.revert()`) to avoid leaks on route change, as shown above.
- Respect `prefers-reduced-motion`: disable the hero entrance, horizontal pin-scroll, and marquee for users with it set — fall back to a static grid/list for the gallery instead of the pinned scroll.
```ts
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
```
- Lazy-load gallery images (`next/image` handles this) so the horizontal scroll section doesn't tank initial load.
- Test the pinned horizontal section specifically on mobile — pin-and-scrub patterns can feel janky on touch; consider swapping it for a simple horizontal swipe carousel (no pin) below a certain breakpoint.
- Keep total animated libraries to these two — don't add a third (e.g. Lenis smooth-scroll) unless a specific need shows up, to keep the bundle and the interaction model simple.

## Notes for the Coding Agent

- Register `ScrollTrigger` once in `src/lib/gsap.ts` and import from there everywhere — don't re-register per component.
- All GSAP/Framer Motion components need `"use client"` — they don't work in server components.
- Build the pinned horizontal gallery last, after the rest of the site's static layout is working — it's the highest-risk piece to get janky, so test it in isolation before wiring it into the full page.
- Apply the reduced-motion fallback described above before considering this section done.
