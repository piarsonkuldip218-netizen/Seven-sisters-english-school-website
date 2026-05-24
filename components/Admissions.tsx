"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, FileCheck2 } from "lucide-react";
import { admissions, school } from "@/lib/data";

export default function Admissions() {
  const waMessage = encodeURIComponent(
    `Namaste! Mujhe ${school.name} mein admission ke baare mein information chahiye. Kripya details bhejein.`
  );
  const waLink = `https://wa.me/${school.whatsappRaw}?text=${waMessage}`;

  return (
    <section
      id="admissions"
      className="scroll-section relative py-28 sm:py-36"
    >
      {/* Background blobs */}
      <div className="bg-blob top-[10%] right-[5%] h-[480px] w-[480px] bg-gold-300/15 animate-float-slow" />
      <div className="bg-blob bottom-[5%] left-[5%] h-[420px] w-[420px] bg-ice-400/10 animate-float-medium" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow mb-6 justify-center">
            Admissions Open &middot; 2026-27
          </div>
          <h2 className="heading-display text-display-xl">
            Join the <span className="text-gradient-gold">SSES Family</span>
          </h2>
          <p className="mt-6 text-base font-medium leading-relaxed text-muted sm:text-lg">
            {admissions.subheading}
          </p>
        </div>

        {/* Process steps */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {admissions.steps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass relative rounded-2xl p-7 transition-transform hover:translate-y-[-4px]"
            >
              <div className="mb-4 text-3xl font-black text-gradient-gold">
                {step.step}
              </div>
              <h3 className="mb-3 text-lg font-bold text-white">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Documents + CTA grid */}
        <div className="mt-16 grid gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Documents required */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 lg:col-span-7"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl glass-gold">
                <FileCheck2 size={18} className="text-gold-300" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold text-white">
                Documents Required
              </h3>
            </div>
            <ul className="space-y-3">
              {admissions.documents.map((doc) => (
                <li
                  key={doc}
                  className="flex items-start gap-3 text-base font-medium text-soft"
                >
                  <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-gold-300" />
                  {doc}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="waterglass relative rounded-2xl p-8 lg:col-span-5"
          >
            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-300">
                Ready to Apply?
              </p>
              <h3 className="mt-3 text-2xl font-bold text-white">
                Begin your child&rsquo;s journey at SSES
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Tap the button below to send an inquiry on WhatsApp. Our admissions team will respond within 24 hours.
              </p>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-gold group mt-6 w-full">
                <MessageCircle size={18} strokeWidth={2.5} />
                Inquire on WhatsApp
                <ArrowRight
                  size={16}
                  strokeWidth={2.5}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <p className="mt-4 text-center text-xs font-semibold text-white/50">
                or call us: {school.phone}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
