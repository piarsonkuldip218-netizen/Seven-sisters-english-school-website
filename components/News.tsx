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
    <section id="news" className="scroll-section relative bg-cream-50 py-24 sm:py-32">
      <div className="container-editorial">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <div className="eyebrow mb-6">News &amp; Announcements</div>
            <h2 className="heading-section">
              The Latest from <span className="italic">SSES</span>
            </h2>
          </div>
        </div>

        {/* News cards */}
        <div className="mt-16 grid gap-px border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group flex h-full flex-col bg-cream-50 p-8 transition-colors hover:bg-cream-100 sm:p-10"
            >
              {/* Tag + Date */}
              <div className="flex items-center justify-between">
                <span className="rounded-sm border border-gold-300 bg-cream-50 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-gold-400">
                  {item.tag}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-ink-muted">
                  <Calendar size={12} />
                  {formatDate(item.date)}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-6 font-serif text-xl font-medium leading-snug text-navy transition-colors group-hover:text-gold-500">
                {item.title}
              </h3>

              {/* Excerpt */}
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
                {item.excerpt}
              </p>

              {/* Read more */}
              <div className="mt-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-navy">
                Read more
                <ArrowUpRight
                  size={14}
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
