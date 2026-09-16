"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const reduce = useReducedMotion();

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <p className="max-w-[38rem] text-base leading-relaxed text-ink">
        Thanks — I&apos;ll write back soon.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex max-w-lg flex-col gap-6">
      <label className="flex flex-col gap-2 text-sm text-stone">
        Name
        <input
          required
          name="name"
          type="text"
          autoComplete="name"
          className="border-0 border-b border-sage bg-transparent py-2 text-base text-ink outline-none focus-visible:border-pine"
        />
      </label>
      <label className="flex flex-col gap-2 text-sm text-stone">
        Email
        <input
          required
          name="email"
          type="email"
          autoComplete="email"
          className="border-0 border-b border-sage bg-transparent py-2 text-base text-ink outline-none focus-visible:border-pine"
        />
      </label>
      <label className="flex flex-col gap-2 text-sm text-stone">
        Message
        <textarea
          required
          name="message"
          rows={5}
          className="resize-y border-0 border-b border-sage bg-transparent py-2 text-base text-ink outline-none focus-visible:border-pine"
        />
      </label>
      <motion.button
        type="submit"
        className="self-start bg-pine px-5 py-3 text-sm text-porcelain"
        whileHover={reduce ? undefined : { scale: 1.02 }}
        whileTap={reduce ? undefined : { scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        Send the note
      </motion.button>
    </form>
  );
}
