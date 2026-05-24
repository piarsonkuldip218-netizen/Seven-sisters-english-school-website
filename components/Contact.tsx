"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { school } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="scroll-section relative py-28 sm:py-36">
      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow mb-6 justify-center">Get In Touch</div>
          <h2 className="heading-display text-display-xl mb-4">
            Visit, Call, or <span className="text-gradient-gold">Write</span>
          </h2>
          <p className="text-base font-medium leading-relaxed text-muted sm:text-lg">
            We are always happy to hear from prospective parents, alumni, and the community.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="grid gap-4">
              {[
                {
                  icon: MapPin,
                  label: "Address",
                  lines: [
                    school.address.line1,
                    school.address.line2,
                    `${school.address.state} ${school.address.pincode}`,
                  ],
                },
                {
                  icon: Phone,
                  label: "Phone",
                  lines: [school.phone, `WhatsApp: ${school.whatsapp}`],
                },
                {
                  icon: Mail,
                  label: "Email",
                  lines: [school.email],
                },
                {
                  icon: Clock,
                  label: "School Hours",
                  lines: ["Monday — Saturday", "8:15 AM — 4:00 PM"],
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glass flex gap-5 rounded-2xl p-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl glass-gold">
                    <item.icon size={18} className="text-gold-300" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-300">
                      {item.label}
                    </p>
                    <div className="mt-2 space-y-0.5">
                      {item.lines.map((line, j) => (
                        <p key={j} className="text-base font-semibold text-white">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Map column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="waterglass relative aspect-[4/3] overflow-hidden rounded-3xl">
              <iframe
                src={school.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${school.name} location map`}
                className="absolute inset-0 z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
