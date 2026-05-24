"use client";

import { motion } from "framer-motion";
import { aboutContent } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="scroll-section relative bg-cream py-24 sm:py-32">
      <div className="container-editorial">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Left: Heading + content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="eyebrow mb-6"
            >
              Our Story
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="heading-section mb-10"
            >
              {aboutContent.heading}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="prose-editorial text-xl text-ink first-letter:font-serif first-letter:text-5xl first-letter:font-medium first-letter:text-navy first-letter:mr-2 first-letter:float-left first-letter:leading-[0.85] first-letter:mt-1">
                {aboutContent.intro}
              </p>
              {aboutContent.paragraphs.map((p, i) => (
                <p key={i} className="prose-editorial">
                  {p}
                </p>
              ))}
            </motion.div>
          </div>

          {/* Right: Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="grid grid-cols-2 gap-px bg-navy/10 border border-navy/10">
              {aboutContent.highlights.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-cream-50 p-8 transition-colors hover:bg-cream-100 sm:p-10"
                >
                  <p className="font-serif text-4xl font-medium text-navy sm:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-ink-soft">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Editorial caption block */}
            <div className="mt-8 flex items-start gap-4 border-l-2 border-gold-300 pl-6">
              <p className="font-serif text-lg italic leading-relaxed text-ink-soft">
                &ldquo;Education is the kindling of a flame, not the filling of a vessel.&rdquo;
                <span className="mt-2 block text-sm not-italic text-ink-muted">— Socrates</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
