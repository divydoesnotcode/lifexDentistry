"use client";

import { animate, AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { site } from "@/data/site";

const IntroContext = createContext(true);

export function useIntroReady() {
  return useContext(IntroContext);
}

const ease = [0.16, 1, 0.3, 1] as const;
const LOAD_MS = 2000;
const STORAGE_KEY = "intro-played";

let introPlayed = false;

function hasPlayedIntro() {
  if (introPlayed) return true;
  if (typeof window === "undefined") return false;
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function markIntroPlayed() {
  introPlayed = true;
  try {
    sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    /* ignore */
  }
}

function Counter() {
  const [display, setDisplay] = useState("00");

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: LOAD_MS / 1000,
      ease: "linear",
      onUpdate: (value) =>
        setDisplay(String(Math.round(value)).padStart(2, "0")),
    });

    return () => controls.stop();
  }, []);

  return (
    <span className="font-sans text-6xl tabular-nums leading-none text-porcelain md:text-8xl">
      {display}
    </span>
  );
}

export function Intro({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const [timedOut, setTimedOut] = useState(hasPlayedIntro);
  const show = !reduce && !timedOut;
  const ready = reduce === true || timedOut;

  useEffect(() => {
    if (timedOut) return;

    const timer = window.setTimeout(() => {
      markIntroPlayed();
      setTimedOut(true);
    }, LOAD_MS);

    return () => window.clearTimeout(timer);
  }, [timedOut]);

  useEffect(() => {
    if (!show) {
      document.body.style.overflow = "";
      return;
    }

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [show]);

  return (
    <IntroContext.Provider value={ready}>
      {reduce ? null : (
        <div className="sr-only" role="status" aria-live="polite">
          {show ? "Loading" : "Content loaded"}
        </div>
      )}
      <AnimatePresence>
        {show ? (
          <motion.div
            className="intro-overlay fixed inset-0 z-[60] flex flex-col bg-pine text-porcelain"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.75, ease }}
            aria-hidden="true"
          >
            <div className="flex flex-1 flex-col justify-between px-6 py-8 md:px-10 md:py-10">
              <p className="text-sm text-sage">{site.location}</p>
              <div className="flex items-end justify-between gap-6">
                <p className="font-display text-6xl leading-none md:text-8xl">
                  {site.firstName}
                </p>
                <Counter />
              </div>
            </div>
            <motion.div
              className="h-0.5 origin-left bg-coral"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: LOAD_MS / 1000, ease: "linear" }}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
      {children}
    </IntroContext.Provider>
  );
}
