"use client";

import { motion } from "framer-motion";
import { BookOpen, Pencil, Atom, GraduationCap } from "lucide-react";
import { academics } from "@/lib/data";

const icons = [BookOpen, Pencil, Atom, GraduationCap];

export default function Academics() {
  return (
    <section id="academics" className="scroll-section relative bg-cream-50 py-24 sm:py-32">
      <div className="container-editorial">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow mb-6 justify-center">Programmes</div>
          <h2 className="heading-section mb-4">{academics.heading}</h2>
          <p className="prose-editorial mx-auto max-w-xl">
            {academics.subheading}
          </p>
          <div className="divider-ornamental mt-8">
            <span className="font-serif italic">&sect;</span>
          </div>
        </div>

        {/* Programs grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {academics.programs.map((p, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="card-editorial group relative flex h-full flex-col"
              >
                {/* Number marker */}
                <span className="absolute right-6 top-6 font-serif text-3xl italic text-gold-200 transition-colors group-hover:text-gold-300">
                  {String(idx + 1).padStart(2, "0")}
                </span>

                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-sm border border-navy/15 text-navy transition-colors group-hover:border-gold-300 group-hover:text-gold-400">
                  <Icon size={20} strokeWidth={1.5} />
                </div>

                <h3 className="font-serif text-xl font-medium text-navy">
                  {p.title}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-gold-400">
                  {p.classes}
                </p>

                <p className="mt-5 flex-1 text-sm leading-relaxed text-ink-soft">
                  {p.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
