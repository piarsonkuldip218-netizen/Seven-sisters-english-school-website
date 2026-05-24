"use client";

import { motion } from "framer-motion";
import { Compass, Target, Sparkles } from "lucide-react";
import { visionMission } from "@/lib/data";

export default function VisionMission() {
  return (
    <section className="scroll-section relative py-28 sm:py-36">
      {/* Background accent */}
      <div className="bg-blob top-[10%] right-[-10%] h-[440px] w-[440px] bg-gold-300/10 animate-float-medium" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow mb-6 justify-center">
            Guiding Principles
          </div>
          <h2 className="heading-display text-display-xl">
            Vision &amp; <span className="text-gradient-gold">Mission</span>
          </h2>
        </div>

        {/* Vision + Mission glass cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
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
              className="waterglass rounded-3xl p-8 sm:p-10"
            >
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl waterglass-gold">
                  <item.icon size={22} strokeWidth={2.5} className="text-midnight-900 relative z-10" />
                </div>
                <h3 className="heading-section mb-4 text-2xl sm:text-3xl">
                  {item.label}
                </h3>
                <p className="text-base font-medium leading-relaxed text-soft sm:text-lg">
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Values */}
        <div className="mt-20">
          <div className="mx-auto mb-12 flex max-w-md flex-col items-center text-center">
            <Sparkles size={24} className="mb-3 text-gold-300" strokeWidth={2} />
            <h3 className="heading-section text-2xl sm:text-3xl">
              Core Values
            </h3>
            <p className="mt-2 text-sm font-medium text-muted">
              The principles that shape every classroom, every conversation, every choice.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {visionMission.values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass rounded-2xl p-6 transition-transform hover:translate-y-[-4px]"
              >
                <div className="mb-4 text-2xl font-extrabold text-gradient-gold">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <h4 className="mb-2 text-lg font-bold text-white">
                  {value.title}
                </h4>
                <p className="text-sm leading-relaxed text-muted">
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
