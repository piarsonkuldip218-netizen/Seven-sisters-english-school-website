"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { principalMessage } from "@/lib/data";
import { asset } from "@/lib/path";

export default function PrincipalMessage() {
  return (
    <section className="scroll-section relative bg-cream py-24 sm:py-32">
      <div className="container-narrow">
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
              {/* Photo frame */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-navy">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(principalMessage.photo)}
                  alt={principalMessage.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                {/* Editorial corner stamps */}
                <div className="absolute left-3 top-3 h-8 w-8 border-l border-t border-gold-300/60" />
                <div className="absolute bottom-3 right-3 h-8 w-8 border-b border-r border-gold-300/60" />
              </div>

              {/* Name plaque */}
              <div className="mt-6 border-l-2 border-gold-300 pl-4">
                <p className="font-serif text-xl font-medium text-navy">
                  {principalMessage.name}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.22em] text-gold-400">
                  Principal &middot; {principalMessage.qualification}
                </p>
              </div>
            </div>
          </div>

          {/* Message column */}
          <div className="lg:col-span-7">
            <div className="eyebrow mb-6">From the Principal&rsquo;s Desk</div>

            <Quote
              size={48}
              className="mb-6 text-gold-300"
              strokeWidth={1}
              aria-hidden
            />

            <h2 className="mb-8 font-serif text-display-lg font-medium text-navy">
              A Message of <span className="italic">Welcome</span>
            </h2>

            <p className="prose-editorial text-lg leading-relaxed text-ink">
              {principalMessage.message}
            </p>

            {/* Signature line */}
            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-16 bg-gold-300" />
              <p className="font-serif text-base italic text-ink-soft">
                — {principalMessage.name}, Principal
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
