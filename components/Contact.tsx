"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { school } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="scroll-section relative bg-cream py-24 sm:py-32">
      <div className="container-editorial">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow mb-6 justify-center">Get In Touch</div>
          <h2 className="heading-section mb-4">
            Visit, Call, or <span className="italic">Write</span>
          </h2>
          <p className="prose-editorial">
            We&rsquo;re always happy to hear from prospective parents, alumni, and the community.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="space-y-8">
              {[
                {
                  icon: MapPin,
                  label: "Address",
                  lines: [school.address.line1, school.address.line2, `${school.address.state} ${school.address.pincode}`],
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
              ].map((item) => (
                <div key={item.label} className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-navy/15 text-navy">
                    <item.icon size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold-400">
                      {item.label}
                    </p>
                    <div className="mt-2 space-y-1">
                      {item.lines.map((line, i) => (
                        <p key={i} className="font-sans text-base text-ink">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
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
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-navy/10 bg-navy/5">
              <iframe
                src={school.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${school.name} location map`}
                className="absolute inset-0"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
