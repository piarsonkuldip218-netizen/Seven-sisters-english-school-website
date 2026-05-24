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
      className="scroll-section relative isolate overflow-hidden bg-navy py-24 text-cream sm:py-32"
    >
      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #C9A961 0, #C9A961 1px, transparent 0, transparent 50%)",
          backgroundSize: "16px 16px",
        }}
      />

      <div className="container-editorial relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow mb-6 justify-center text-gold-300 [&::before]:bg-gold-300/40">
            Apply Now &middot; 2026-27
          </div>
          <h2 className="font-serif text-display-xl font-medium text-cream">
            {admissions.heading}
          </h2>
          <p className="mt-6 font-sans text-lg text-cream/80">
            {admissions.subheading}
          </p>
        </div>

        {/* Process steps */}
        <div className="mt-16 grid gap-px border border-cream/10 bg-cream/10 sm:grid-cols-2 lg:grid-cols-4">
          {admissions.steps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-navy p-8 transition-colors hover:bg-navy-700 sm:p-10"
            >
              <div className="mb-4 font-serif text-4xl italic text-gold-300">
                {step.step}
              </div>
              <h3 className="mb-3 font-serif text-xl font-medium text-cream">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-cream/70">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Documents + CTA grid */}
        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Documents required */}
          <div className="lg:col-span-7">
            <div className="mb-6 flex items-center gap-3">
              <FileCheck2 size={20} className="text-gold-300" strokeWidth={1.5} />
              <h3 className="font-serif text-2xl font-medium text-cream">
                Documents Required
              </h3>
            </div>
            <ul className="space-y-4 border-l border-gold-300/40 pl-6">
              {admissions.documents.map((doc) => (
                <li
                  key={doc}
                  className="relative font-sans text-base text-cream/85 before:absolute before:-left-[27px] before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gold-300"
                >
                  {doc}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="rounded-sm border border-gold-300/40 bg-navy-700/40 p-8 sm:p-10"
            >
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold-300">
                Ready to Apply?
              </p>
              <h3 className="mt-3 font-serif text-2xl font-medium text-cream">
                Begin your child&rsquo;s journey at SSES
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-cream/80">
                Tap the button below to send an inquiry on WhatsApp. Our admissions team will respond within 24 hours.
              </p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-gold-300 px-7 py-4 font-sans text-sm font-medium uppercase tracking-wider text-navy transition-all hover:bg-gold-400"
              >
                <MessageCircle size={16} />
                Inquire on WhatsApp
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <p className="mt-4 text-center text-xs text-cream/50">
                or call us: {school.phone}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
