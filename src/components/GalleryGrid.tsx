"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import type { GalleryItem } from "@/data/gallery";

const ease = [0.16, 1, 0.3, 1] as const;

const list = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const reduce = useReducedMotion();

  return (
    <motion.ul
      className="grid grid-cols-1 gap-3 sm:grid-cols-6 sm:gap-4"
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={reduce ? undefined : list}
    >
      {items.map((entry) => (
        <motion.li
          key={`${entry.src}-${entry.span}`}
          className={`col-span-1 ${entry.span}`}
          variants={reduce ? undefined : item}
        >
          <figure>
            <div
              className={`relative overflow-hidden bg-sage ${entry.aspect}`}
            >
              <motion.div
                className="absolute inset-0"
                whileHover={reduce ? undefined : { scale: 1.03 }}
                transition={{ duration: 0.45, ease }}
              >
                <Image
                  src={entry.src}
                  alt={entry.alt}
                  fill
                  className={`object-cover ${entry.object ?? "object-center"}`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 1100px"
                />
              </motion.div>
            </div>
            <figcaption className="mt-3 text-sm text-stone">
              {entry.caption}
            </figcaption>
          </figure>
        </motion.li>
      ))}
    </motion.ul>
  );
}
