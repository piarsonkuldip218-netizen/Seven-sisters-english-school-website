"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
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
          scrolled
            ? "bg-cream/95 shadow-[0_2px_24px_-12px_rgba(10,22,40,0.2)] backdrop-blur"
            : "bg-transparent"
        )}
      >
        <div className="container-editorial flex h-20 items-center justify-between">
          {/* Logo / Brand */}
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-navy text-cream">
              <span className="font-serif text-lg font-semibold tracking-wider">7S</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-serif text-base font-semibold leading-tight text-navy">
                {school.shortName}
              </p>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-gold-400">
                Est. {school.established}
              </p>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-sans text-sm font-medium text-navy/80 transition-colors hover:text-navy"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#admissions"
              className="hidden rounded-sm bg-navy px-5 py-2.5 font-sans text-xs font-medium uppercase tracking-wider text-cream transition-all hover:bg-navy-700 lg:inline-flex"
            >
              Apply Now
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="flex h-11 w-11 items-center justify-center rounded-sm border border-navy/20 text-navy transition-colors hover:bg-navy hover:text-cream lg:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
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
              className="absolute inset-0 bg-navy/30 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35 }}
              className="absolute right-0 top-0 flex h-full w-72 flex-col bg-cream pt-24 pb-8"
            >
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-navy/10 px-8 py-4 font-serif text-lg text-navy transition-colors hover:bg-cream-200"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#admissions"
                onClick={() => setOpen(false)}
                className="mx-8 mt-6 inline-flex items-center justify-center rounded-sm bg-navy px-6 py-3.5 font-sans text-sm font-medium uppercase tracking-wider text-cream"
              >
                Apply Now
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
