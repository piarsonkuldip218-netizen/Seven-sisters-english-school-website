"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { principalMessage } from "@/lib/data";
import { asset } from "@/lib/path";

export default function PrincipalMessage() {
  return (
    <section className="scroll-section relative py-28 sm:py-36">
      <div className="bg-blob bottom-[-10%] left-[20%] h-[400px] w-[400px] bg-ice-400/10 animate-float-medium" />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid gap-12 lg:grid-cols-12 lg:items-center"
        >
          {/* Photo column */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm">
              <div className="waterglass relative aspect-[4/5] overflow-hidden rounded-3xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(principalMessage.photo)}
                  alt={principalMessage.name}
                  className="relative z-10 h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Floating name plaque */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 waterglass-gold rounded-2xl px-6 py-4 text-center"
              >
                <p className="relative z-10 text-base font-extrabold text-midnight-900">
                  {principalMessage.name}
                </p>
                <p className="relative z-10 mt-0.5 text-[10px] font-bold uppercase tracking-[0.2em] text-midnight-700">
                  Principal &middot; {principalMessage.qualification}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Message column */}
          <div className="lg:col-span-7">
            <div className="eyebrow mb-6">From the Principal&rsquo;s Desk</div>

            <Quote size={48} className="mb-6 text-gold-300" strokeWidth={2} aria-hidden />

            <h2 className="heading-display text-display-xl mb-8">
              A Message of <span className="text-gradient-gold">Welcome</span>
            </h2>

            <p className="text-lg font-medium leading-relaxed text-soft sm:text-xl">
              {principalMessage.message}
            </p>

            {/* Signature line */}
            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-16 bg-gold-300" />
              <p className="text-base font-bold text-white">
                {principalMessage.name},
                <span className="text-gold-300"> Principal</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
