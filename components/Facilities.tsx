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
    <section className="scroll-section relative bg-cream py-24 sm:py-32">
      <div className="container-editorial">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-6">Campus Life</div>
            <h2 className="heading-section">
              Facilities Designed for <span className="italic">Holistic Growth</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="prose-editorial">
              From smart classrooms to sports fields, every corner of our campus is built to inspire learning, creativity, and well-being.
            </p>
          </div>
        </div>

        {/* Facilities grid */}
        <div className="mt-16 grid gap-px bg-navy/10 border border-navy/10 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="group flex flex-col gap-4 bg-cream-50 p-10 transition-colors hover:bg-cream-100"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-sm bg-navy text-gold-300 transition-transform group-hover:scale-105">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-medium text-navy">
                  {facility.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-soft">
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
