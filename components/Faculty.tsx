"use client";

import { motion } from "framer-motion";
import { faculty, vicePrincipal } from "@/lib/data";
import { asset } from "@/lib/path";

export default function Faculty() {
  return (
    <section id="faculty" className="scroll-section relative py-28 sm:py-36">
      <div className="bg-blob bottom-[10%] right-[10%] h-[400px] w-[400px] bg-ice-400/10 animate-float-slow" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow mb-6 justify-center">Our Educators</div>
          <h2 className="heading-display text-display-xl mb-4">
            Leadership &amp; <span className="text-gradient-gold">Faculty</span>
          </h2>
          <p className="text-base font-medium leading-relaxed text-muted sm:text-lg">
            Experienced, passionate teachers committed to bringing out the best in every student.
          </p>
        </div>

        {/* Vice Principal — Featured Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="waterglass relative mt-16 grid gap-0 overflow-hidden rounded-3xl sm:grid-cols-12"
        >
          {/* VP Photo */}
          <div className="relative aspect-[3/4] sm:col-span-4 sm:aspect-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset(vicePrincipal.photo)}
              alt={vicePrincipal.name}
              className="relative z-10 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute left-4 top-4 z-20 rounded-full waterglass-gold px-4 py-1.5">
              <span className="relative z-10 text-[10px] font-extrabold uppercase tracking-[0.2em] text-midnight-900">
                Vice Principal
              </span>
            </div>
          </div>

          {/* VP Info */}
          <div className="relative z-10 flex flex-col justify-center px-8 py-10 sm:col-span-8 sm:py-14 sm:pr-14">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-gold-300">
              Office of the Vice Principal
            </p>
            <h3 className="heading-display text-display-lg">
              {vicePrincipal.name}
            </h3>
            <p className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-white/70">
              {vicePrincipal.qualification}
              {vicePrincipal.subject && (
                <>
                  <span className="mx-2 text-gold-300">&middot;</span>
                  {vicePrincipal.subject}
                </>
              )}
            </p>
            <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-soft sm:text-lg">
              {vicePrincipal.message}
            </p>
          </div>
        </motion.div>

        {/* Teaching Faculty heading */}
        <div className="mb-10 mt-20 flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-4">
          <h3 className="heading-section text-2xl sm:text-3xl">
            Teaching Faculty
          </h3>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-300">
            Subject Specialists
          </p>
        </div>

        {/* Faculty grid */}
        <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
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
              <div className="waterglass relative aspect-[3/4] overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(member.photo)}
                  alt={member.name}
                  className="relative z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Subject pill */}
                <div className="absolute bottom-4 left-4 z-20 rounded-full glass-strong px-3 py-1.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-white">
                    {member.subject}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="mt-5">
                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-gold-300">
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
