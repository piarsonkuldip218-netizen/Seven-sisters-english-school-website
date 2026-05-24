"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  FlaskConical,
  Cpu,
  Library,
  Trophy,
  Bus,
} from "lucide-react";
import { facilities } from "@/lib/data";

const icons = [Monitor, FlaskConical, Cpu, Library, Trophy, Bus];

export default function Facilities() {
  return (
    <section className="scroll-section relative py-28 sm:py-36">
      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-6">Campus Life</div>
            <h2 className="heading-display text-display-xl">
              Facilities for{" "}
              <span className="text-gradient-gold">Holistic Growth</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base font-medium leading-relaxed text-muted sm:text-lg">
              From smart classrooms to sports fields, every corner of our campus is built to inspire learning, creativity, and well-being.
            </p>
          </div>
        </div>

        {/* Facilities grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="glass group flex flex-col gap-4 rounded-2xl p-7 transition-transform hover:translate-y-[-4px]"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center waterglass-gold rounded-xl transition-transform group-hover:scale-105">
                  <Icon size={22} strokeWidth={2.5} className="relative z-10 text-midnight-900" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {facility.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {facility.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
