"use client";

import { motion } from "framer-motion";
import { faculty } from "@/lib/data";
import { asset } from "@/lib/path";

export default function Faculty() {
  return (
    <section id="faculty" className="scroll-section relative bg-cream-50 py-24 sm:py-32">
      <div className="container-editorial">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow mb-6 justify-center">Our Educators</div>
          <h2 className="heading-section mb-4">
            Meet the <span className="italic">Faculty</span>
          </h2>
          <p className="prose-editorial">
            Experienced, passionate teachers committed to bringing out the best in every student.
          </p>
        </div>

        {/* Faculty grid */}
        <div className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {faculty.map((member, idx) => (
            <motion.div
              key={member.name + idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.08 }}
              className="group"
            >
              {/* Photo */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-navy/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(member.photo)}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Subject tag */}
                <div className="absolute bottom-4 left-4 rounded-sm bg-cream/95 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-navy">
                  {member.subject}
                </div>
              </div>

              {/* Info */}
              <div className="mt-5 border-t border-navy/10 pt-5">
                <h3 className="font-serif text-lg font-medium text-navy">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-gold-400">
                  {member.qualification}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
