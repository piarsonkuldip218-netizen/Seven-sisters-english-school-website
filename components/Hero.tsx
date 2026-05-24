"use client";

import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Star, Sparkles } from "lucide-react";
import { school } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16 lg:pt-0 lg:pb-0"
    >
      {/* Background blobs */}
      <div className="bg-blob top-[-15%] left-[-10%] h-[480px] w-[480px] bg-gold-300/20 animate-float-slow" />
      <div className="bg-blob bottom-[-15%] right-[-10%] h-[520px] w-[520px] bg-ice-400/15 animate-float-medium" />
      <div className="bg-blob top-[40%] left-[35%] h-[320px] w-[320px] bg-gold-200/10 animate-float-fast" />

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-60" />

      <div className="container-wide relative z-10 grid items-center gap-16 lg:grid-cols-12">
        {/* Left content */}
        <div className="lg:col-span-7">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2"
          >
            <Sparkles size={14} className="text-gold-300" strokeWidth={2.5} />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-white">
              Established {school.established}
            </span>
            <span className="text-white/30">|</span>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-gold-300">
              Reg. {school.registration}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-8 heading-display text-display-2xl"
          >
            <span className="block">Seven Sister&rsquo;s</span>
            <span className="block text-gradient-gold">English School</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-soft sm:text-xl"
          >
            {school.tagline}. A trusted name in education from the heart of Assam — shaping confident young minds since {school.established}.
          </motion.p>

          {/* Meta info pills */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            {[
              { icon: GraduationCap, text: school.classesOffered },
              { icon: Star, text: "SEBA Affiliated" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-semibold text-white"
              >
                <item.icon size={14} className="text-gold-300" strokeWidth={2.5} />
                {item.text}
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#admissions" className="btn-gold group">
              Apply for Admission
              <ArrowRight
                size={18}
                strokeWidth={2.5}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a href="#about" className="btn-glass">
              Discover Our Story
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-14 grid max-w-2xl grid-cols-3 gap-4 sm:gap-8"
          >
            {[
              { value: "35+", label: "Years" },
              { value: "5000+", label: "Alumni" },
              { value: "98%", label: "Pass Rate" },
            ].map((stat) => (
              <div key={stat.label} className="border-l-2 border-gold-300/40 pl-4">
                <p className="text-2xl font-extrabold text-white sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Decorative crest */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hidden lg:col-span-5 lg:block"
        >
          <div className="relative mx-auto aspect-square max-w-md">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 rounded-full border border-gold-300/20 animate-spin-slow" />
            <div className="absolute inset-6 rounded-full border border-gold-300/15" />

            {/* Glass medallion */}
            <div className="absolute inset-12 flex flex-col items-center justify-center overflow-hidden rounded-full waterglass">
              <div className="relative z-10 flex flex-col items-center text-center">
                <span className="text-[80px] font-black leading-none tracking-tighter text-gradient-gold">
                  7S
                </span>
                <span className="mt-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/70">
                  Since {school.established}
                </span>
                <div className="mt-3 h-px w-20 bg-gold-300/40" />
                <span className="mt-3 text-xs font-bold uppercase tracking-wider text-gold-300">
                  Excellentia
                </span>
              </div>
            </div>

            {/* Floating accent dots */}
            <div className="absolute right-0 top-1/4 h-3 w-3 rounded-full bg-gold-300 shadow-glow-gold animate-pulse-glow desktop-only" />
            <div className="absolute bottom-1/4 left-0 h-2 w-2 rounded-full bg-ice-300 shadow-glow-ice animate-pulse-glow desktop-only" style={{ animationDelay: "0.8s" }} />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
          Scroll
        </span>
        <div className="relative h-12 w-5 overflow-hidden rounded-full border border-white/20">
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1.5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-gold-300"
          />
        </div>
      </div>
    </section>
  );
}
