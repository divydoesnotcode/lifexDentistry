"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site } from "@/data/site";

function NavItem({
  href,
  label,
  active,
  onClick,
}: {
  href: string;
  label: string;
  active: boolean;
  onClick?: () => void;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div className="relative" whileHover="hover" initial="rest">
      <Link
        href={href}
        onClick={onClick}
        aria-current={active ? "page" : undefined}
        className={`inline-block text-sm ${
          active ? "text-pine" : "text-stone"
        }`}
      >
        {label}
      </Link>
      <motion.span
        aria-hidden="true"
        className="absolute inset-x-0 -bottom-1 h-px origin-left bg-pine"
        variants={{
          rest: { scaleX: active ? 1 : 0 },
          hover: { scaleX: 1 },
        }}
        transition={{ duration: reduce ? 0 : 0.2 }}
      />
    </motion.div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <header
      className="px-6 md:px-10"
      style={{ viewTransitionName: "site-header" }}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-baseline justify-between gap-6 py-8"
      >
        <Link
          href="/"
          className="font-display text-xl text-pine no-underline hover:opacity-70"
        >
          {site.firstName}
        </Link>

        <div className="relative md:hidden">
          <button
            type="button"
            className="cursor-pointer text-sm text-stone"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
          <AnimatePresence>
            {open ? (
              <motion.ul
                id="mobile-nav"
                initial={reduce ? false : { opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 z-30 mt-3 min-w-44 bg-porcelain px-4 py-3"
              >
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={
                        pathname === link.href ||
                        pathname.startsWith(`${link.href}/`)
                          ? "page"
                          : undefined
                      }
                      className={`block py-2 text-sm hover:text-pine ${
                        pathname === link.href ||
                        pathname.startsWith(`${link.href}/`)
                          ? "text-pine"
                          : "text-stone"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            ) : null}
          </AnimatePresence>
        </div>

        <ul className="hidden items-baseline gap-8 md:flex">
          {navLinks.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <li key={link.href}>
                <NavItem href={link.href} label={link.label} active={active} />
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
