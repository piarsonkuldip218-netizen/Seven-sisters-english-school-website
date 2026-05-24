"use client";

import { motion } from "framer-motion";
import { gallery } from "@/lib/data";
import { asset } from "@/lib/path";

export default function Gallery() {
  return (
    <section id="gallery" className="scroll-section relative py-28 sm:py-36">
      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-6">Moments at SSES</div>
            <h2 className="heading-display text-display-xl">
              Life on Campus,{" "}
              <span className="text-gradient-gold">in Pictures</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base font-medium leading-relaxed text-muted sm:text-lg">
              Snapshots from classrooms, celebrations, and corridors — a glimpse into the spirit that shapes our students every day.
            </p>
          </div>
        </div>

        {/* Gallery grid */}
        <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {gallery.map((item, idx) => {
            const aspect =
              idx % 5 === 0
                ? "aspect-[4/5] lg:row-span-2"
                : idx % 3 === 0
                  ? "aspect-square"
                  : "aspect-[4/3]";

            return (
              <motion.figure
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: (idx % 4) * 0.08 }}
                className={`waterglass group relative overflow-hidden rounded-2xl ${aspect}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(item.src)}
                  alt={item.alt}
                  className="relative z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Caption overlay */}
                <figcaption className="absolute inset-0 z-20 flex items-end bg-gradient-to-t from-midnight-900/85 via-midnight-900/0 to-midnight-900/0 p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="text-sm font-bold text-white">
                    {item.caption}
                  </span>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
