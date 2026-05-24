"use client";

import { motion } from "framer-motion";
import { Compass, Target, Sparkles } from "lucide-react";
import { visionMission } from "@/lib/data";

export default function VisionMission() {
  return (
    <section className="scroll-section relative isolate overflow-hidden bg-navy py-24 text-cream sm:py-32">
      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(45deg, #C9A961 25%, transparent 25%), linear-gradient(-45deg, #C9A961 25%, transparent 25%)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container-editorial relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow mb-6 justify-center text-gold-300 [&::before]:bg-gold-300/40">
            Guiding Principles
          </div>
          <h2 className="font-serif text-display-xl font-medium text-cream">
            Vision &amp; Mission
          </h2>
        </div>

        {/* Vision + Mission cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {[
            { icon: Compass, label: "Our Vision", body: visionMission.vision },
            { icon: Target, label: "Our Mission", body: visionMission.mission },
          ].map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="group relative overflow-hidden rounded-sm border border-cream/10 bg-navy-700/40 p-10 transition-all hover:border-gold-300/40"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-sm border border-gold-300/40 text-gold-300">
                <item.icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="mb-4 font-serif text-2xl font-medium text-cream">
                {item.label}
              </h3>
              <p className="font-sans text-base leading-relaxed text-cream/80">
                {item.body}
              </p>
              {/* Decorative corner */}
              <div className="absolute right-6 top-6 h-6 w-6 border-r border-t border-gold-300/30" />
            </motion.div>
          ))}
        </div>

        {/* Core Values */}
        <div className="mt-20">
          <div className="mx-auto mb-12 flex max-w-md flex-col items-center text-center">
            <Sparkles size={20} className="mb-3 text-gold-300" strokeWidth={1.5} />
            <h3 className="font-serif text-2xl font-medium text-cream">
              Core Values
            </h3>
            <p className="mt-2 text-sm text-cream/60">
              The principles that shape every classroom, every conversation, every choice.
            </p>
          </div>

          <div className="grid gap-px bg-cream/10 sm:grid-cols-2 lg:grid-cols-4">
            {visionMission.values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-navy p-8 transition-colors hover:bg-navy-700"
              >
                <div className="mb-4 font-serif text-3xl italic text-gold-300">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <h4 className="mb-3 font-serif text-xl font-medium text-cream">
                  {value.title}
                </h4>
                <p className="text-sm leading-relaxed text-cream/70">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
