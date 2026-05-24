"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { aboutContent } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="scroll-section relative py-28 sm:py-36">
      {/* Subtle blob */}
      <div className="bg-blob top-[20%] left-[-5%] h-[400px] w-[400px] bg-ice-400/8 animate-float-slow" />

      <div className="container-wide relative z-10">
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
              About Our School
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="heading-display text-display-xl mb-10"
            >
              {aboutContent.heading}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-5"
            >
              <p className="text-lg font-medium leading-relaxed text-soft sm:text-xl">
                {aboutContent.intro}
              </p>
              {aboutContent.paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-muted sm:text-lg">
                  {p}
                </p>
              ))}
            </motion.div>
          </div>

          {/* Right: Stats grid in glass */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="grid grid-cols-2 gap-4">
              {aboutContent.highlights.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                  className="waterglass relative rounded-2xl p-6 sm:p-7"
                >
                  <p className="relative z-10 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="relative z-10 mt-2 text-xs font-bold uppercase tracking-[0.16em] text-gold-300">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Glass quote card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 glass-gold rounded-2xl p-6"
            >
              <TrendingUp size={20} className="text-gold-300 mb-3" strokeWidth={2.5} />
              <p className="text-base font-semibold leading-relaxed text-white">
                Education is the kindling of a flame, not the filling of a vessel.
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-wider text-gold-300">
                — Socrates
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
