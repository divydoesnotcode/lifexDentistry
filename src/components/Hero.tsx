"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { bio } from "@/data/bio";
import { site } from "@/data/site";
import { useIntroReady } from "./Intro";
import { MotionLink } from "./MotionLink";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const introReady = useIntroReady();
  const play = reduce || introReady;

  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-20 pt-4 md:grid-cols-12 md:gap-8 md:px-10 md:pb-28 md:pt-8">
      <motion.div
        className="relative aspect-[4/5] overflow-hidden md:col-span-6"
        initial={reduce ? false : { opacity: 0, scale: 1.04 }}
        animate={play ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.04 }}
        transition={{ duration: 1.1, ease }}
      >
        <Image
          src="/images/Etishree-bondi.png"
          alt={`${site.firstName} at the beach, in a pink linen shirt by a beach sign`}
          fill
          priority
          className="object-cover object-[center_82%]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
      <motion.div
        className="md:col-span-5 md:col-start-8"
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={play ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.8, delay: 0.3, ease }}
      >
        <p className="text-sm text-stone">{site.location}</p>
        <h1 className="mt-4 font-display text-4xl leading-[1.15] text-pine md:text-5xl">
          I&apos;m {site.firstName}. Dentistry is the{" "}
          <em className="italic">careful</em> part of my day.
        </h1>
        <p className="mt-6 max-w-[38rem] text-base leading-relaxed text-ink">
          {bio.heroSupport}
        </p>
        <MotionLink
          href={bio.heroCta.href}
          className="mt-8 inline-flex items-center gap-2 bg-coral px-5 py-3 text-sm text-porcelain"
        >
          {bio.heroCta.label}
          <span aria-hidden="true">→</span>
        </MotionLink>
      </motion.div>
    </section>
  );
}
