"use client";

import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { school, navigation } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10">
      {/* Top gold accent line */}
      <div className="container-wide">
        <div className="h-px bg-gradient-to-r from-transparent via-gold-300/50 to-transparent" />
      </div>

      <div className="container-wide pt-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl waterglass-gold">
                <span className="relative z-10 text-base font-extrabold text-midnight-900">
                  7S
                </span>
              </div>
              <div>
                <p className="text-base font-bold text-white">
                  {school.name}
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold-300">
                  Established {school.established} &middot; Reg. {school.registration}
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
              {school.tagline}. A trusted name in education from {school.address.line2}, serving generations of students with academic excellence and value-based learning.
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: Facebook, href: school.social.facebook },
                { Icon: Instagram, href: school.social.instagram },
                { Icon: Youtube, href: school.social.youtube },
              ]
                .filter((s) => s.href)
                .map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center glass rounded-xl text-white transition-colors hover:bg-white/10"
                    aria-label="Social link"
                  >
                    <Icon size={16} strokeWidth={2.5} />
                  </a>
                ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-300">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm font-semibold text-white/75 transition-colors hover:text-gold-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-300">
              Reach Us
            </p>
            <ul className="mt-5 space-y-4 text-sm font-medium text-white/75">
              <li className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold-300" strokeWidth={2.5} />
                <span>
                  {school.address.line1}, {school.address.line2}, {school.address.state} {school.address.pincode}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="shrink-0 text-gold-300" strokeWidth={2.5} />
                <a href={`tel:${school.phone.replace(/\s/g, "")}`} className="hover:text-gold-300">
                  {school.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="shrink-0 text-gold-300" strokeWidth={2.5} />
                <a href={`mailto:${school.email}`} className="hover:text-gold-300">
                  {school.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-xs font-semibold text-white/40 sm:flex-row">
            <p>
              &copy; {new Date().getFullYear()} {school.name}. All rights reserved.
            </p>
            <p>
              Crafted for the children of the Seven Sisters.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
