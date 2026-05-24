"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { school, navigation } from "@/lib/data";
import clsx from "clsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "py-2" : "py-4"
        )}
      >
        <div className="container-wide">
          <div
            className={clsx(
              "flex items-center justify-between rounded-2xl transition-all duration-500",
              scrolled ? "glass-strong px-4 py-2" : "px-2 py-2"
            )}
          >
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3">
              <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl waterglass-gold">
                <span className="relative z-10 font-extrabold text-base tracking-tight text-midnight-900">
                  7S
                </span>
              </div>
              <div className="hidden sm:block">
                <p className="font-bold text-base leading-tight text-white">
                  {school.shortName}
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-300">
                  Est. {school.established}
                </p>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 lg:flex">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-4 py-2 text-sm font-semibold text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-2">
              <a
                href="#admissions"
                className="hidden items-center gap-1.5 rounded-xl waterglass-gold px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-midnight-900 transition-transform hover:translate-y-[-1px] lg:inline-flex"
              >
                Apply
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </a>
              <button
                onClick={() => setOpen((o) => !o)}
                className="flex h-11 w-11 items-center justify-center rounded-xl glass text-white transition-colors hover:bg-white/10 lg:hidden"
                aria-label="Toggle menu"
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-midnight-950/70 backdrop-blur-md"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-0 flex h-full w-80 flex-col glass-strong pt-24 pb-8"
            >
              {navigation.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.04 }}
                  className="flex items-center justify-between border-b border-white/5 px-8 py-4 font-bold text-lg text-white transition-colors hover:bg-white/5"
                >
                  {item.label}
                  <ArrowUpRight size={16} className="text-gold-300" strokeWidth={2.5} />
                </motion.a>
              ))}
              <a
                href="#admissions"
                onClick={() => setOpen(false)}
                className="mx-8 mt-8 inline-flex items-center justify-center gap-2 rounded-xl waterglass-gold px-6 py-4 font-bold uppercase tracking-wider text-midnight-900"
              >
                Apply Now
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
