"use client";

import { motion } from "framer-motion";
import { BookOpen, Pencil, Atom, GraduationCap } from "lucide-react";
import { academics } from "@/lib/data";

const icons = [BookOpen, Pencil, Atom, GraduationCap];

export default function Academics() {
  return (
    <section id="academics" className="scroll-section relative py-28 sm:py-36">
      <div className="bg-blob top-[30%] right-[-5%] h-[440px] w-[440px] bg-gold-300/12 animate-float-slow" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow mb-6 justify-center">Academics</div>
          <h2 className="heading-display text-display-xl mb-4">
            {academics.heading.split(" ").slice(0, 1).join(" ")}{" "}
            <span className="text-gradient-gold">that Inspires</span>
          </h2>
          <p className="text-base font-medium leading-relaxed text-muted sm:text-lg">
            {academics.subheading}
          </p>
        </div>

        {/* Programs grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {academics.programs.map((p, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="waterglass group relative flex h-full flex-col rounded-2xl p-7 transition-transform hover:translate-y-[-6px]"
              >
                <div className="relative z-10 flex h-full flex-col">
                  {/* Number marker */}
                  <span className="absolute right-0 top-0 text-3xl font-black text-gradient-gold opacity-30">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl glass-gold">
                    <Icon size={20} strokeWidth={2.5} className="text-gold-300" />
                  </div>

                  <h3 className="text-xl font-bold text-white">{p.title}</h3>
                  <p className="mt-1.5 text-xs font-bold uppercase tracking-[0.16em] text-gold-300">
                    {p.classes}
                  </p>

                  <p className="mt-5 flex-1 text-sm leading-relaxed text-muted">
                    {p.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
