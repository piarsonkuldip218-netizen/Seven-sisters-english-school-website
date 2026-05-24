"use client";

import { motion } from "framer-motion";
import { ArrowRight, GraduationCap } from "lucide-react";
import { school } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-navy text-cream"
    >
      {/* Decorative ornamental pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #C9A961 1px, transparent 1px), radial-gradient(circle at 75% 75%, #C9A961 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Top-left ornamental frame */}
      <div className="pointer-events-none absolute left-6 top-28 hidden h-32 w-32 border-l border-t border-gold-300/30 lg:block" />
      {/* Bottom-right ornamental frame */}
      <div className="pointer-events-none absolute bottom-12 right-6 hidden h-32 w-32 border-b border-r border-gold-300/30 lg:block" />

      <div className="container-editorial relative z-10 grid items-center gap-12 py-24 lg:grid-cols-12 lg:py-0">
        {/* Left content */}
        <div className="lg:col-span-7">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-gold-300"
          >
            <span className="block h-px w-10 bg-gold-300" />
            Established {school.established}
            <span className="opacity-50">·</span>
            Reg. No. {school.registration}
          </motion.div>

          {/* School Name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-display-2xl font-medium leading-[0.98] text-cream"
          >
            Seven Sister&rsquo;s
            <br />
            <span className="italic text-gold-300">English School</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-cream/80 sm:text-xl"
          >
            {school.tagline}. A legacy of academic excellence, cultural pride, and character — nurturing young minds in the heart of Assam since {school.established}.
          </motion.p>

          {/* Meta info */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-cream/70"
          >
            <span className="flex items-center gap-2">
              <GraduationCap size={16} className="text-gold-300" />
              {school.classesOffered}
            </span>
            <span className="hidden h-4 w-px bg-cream/20 sm:block" />
            <span>Affiliated with SEBA</span>
            <span className="hidden h-4 w-px bg-cream/20 sm:block" />
            <span>{school.address.line2}, {school.address.state}</span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <a
              href="#admissions"
              className="group inline-flex items-center gap-2 rounded-sm bg-gold-300 px-7 py-4 font-sans text-sm font-medium uppercase tracking-wider text-navy transition-all hover:bg-gold-400"
            >
              Apply for Admission
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-sm border border-cream/30 px-7 py-4 font-sans text-sm font-medium uppercase tracking-wider text-cream transition-all hover:border-cream hover:bg-cream hover:text-navy"
            >
              Discover Our Story
            </a>
          </motion.div>
        </div>

        {/* Right ornamental medallion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hidden lg:col-span-5 lg:block"
        >
          <div className="relative mx-auto aspect-square max-w-md">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border border-gold-300/30" />
            <div className="absolute inset-6 rounded-full border border-gold-300/20" />
            {/* Inner medallion */}
            <div className="absolute inset-12 flex flex-col items-center justify-center rounded-full border border-gold-300/40 bg-navy-700/40 text-center">
              <span className="font-serif text-7xl font-medium italic text-gold-300">
                7S
              </span>
              <span className="mt-3 text-[10px] font-medium uppercase tracking-[0.3em] text-cream/60">
                Since {school.established}
              </span>
              <div className="mt-3 h-px w-16 bg-gold-300/40" />
              <span className="mt-3 font-serif text-xs italic text-cream/60">
                Excellentia
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-cream/50">
          Scroll
        </span>
        <span className="block h-12 w-px bg-gradient-to-b from-gold-300/60 to-transparent" />
      </div>
    </section>
  );
}
