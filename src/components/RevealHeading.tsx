"use client";

import { motion, useReducedMotion } from "framer-motion";

type Tag = "h1" | "h2" | "h3";

const ease = [0.16, 1, 0.3, 1] as const;

const heading = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
};

export function RevealHeading({
  as: Tag = "h2",
  className,
  children,
}: {
  as?: Tag;
  className?: string;
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  const Heading = heading[Tag];

  return (
    <Heading
      className={className}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.9, ease }}
    >
      {children}
    </Heading>
  );
}
