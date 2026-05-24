"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
import { news } from "@/lib/data";

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function News() {
  return (
    <section id="news" className="scroll-section relative py-28 sm:py-36">
      <div className="bg-blob top-[20%] left-[5%] h-[380px] w-[380px] bg-gold-300/10 animate-float-medium" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <div className="eyebrow mb-6">News &amp; Announcements</div>
            <h2 className="heading-display text-display-xl">
              The Latest from <span className="text-gradient-gold">SSES</span>
            </h2>
          </div>
        </div>

        {/* News cards */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass group flex h-full flex-col rounded-2xl p-7 transition-transform hover:translate-y-[-4px]"
            >
              {/* Tag + Date */}
              <div className="flex items-center justify-between">
                <span className="rounded-full glass-gold px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-gold-300">
                  {item.tag}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-white/50">
                  <Calendar size={12} strokeWidth={2.5} />
                  {formatDate(item.date)}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-bold leading-snug text-white transition-colors group-hover:text-gold-300">
                {item.title}
              </h3>

              {/* Excerpt */}
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                {item.excerpt}
              </p>

              {/* Read more */}
              <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-gold-300">
                Read more
                <ArrowUpRight
                  size={14}
                  strokeWidth={2.5}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
