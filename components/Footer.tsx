"use client";

import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { school, navigation } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative bg-navy-900 text-cream">
      {/* Top gold accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-300/60 to-transparent" />

      <div className="container-editorial py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-gold-300 text-navy">
                <span className="font-serif text-lg font-semibold tracking-wider">7S</span>
              </div>
              <div>
                <p className="font-serif text-lg font-semibold text-cream">
                  {school.name}
                </p>
                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-gold-300">
                  Established {school.established} &middot; Reg. {school.registration}
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-cream/70">
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
                    className="flex h-10 w-10 items-center justify-center rounded-sm border border-cream/15 text-cream/70 transition-colors hover:border-gold-300 hover:text-gold-300"
                    aria-label="Social link"
                  >
                    <Icon size={16} />
                  </a>
                ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold-300">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-sans text-sm text-cream/75 transition-colors hover:text-gold-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold-300">
              Reach Us
            </p>
            <ul className="mt-5 space-y-4 font-sans text-sm text-cream/75">
              <li className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold-300" strokeWidth={1.5} />
                <span>
                  {school.address.line1}, {school.address.line2}, {school.address.state} {school.address.pincode}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="shrink-0 text-gold-300" strokeWidth={1.5} />
                <a href={`tel:${school.phone.replace(/\s/g, "")}`} className="hover:text-gold-300">
                  {school.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="shrink-0 text-gold-300" strokeWidth={1.5} />
                <a href={`mailto:${school.email}`} className="hover:text-gold-300">
                  {school.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-cream/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-cream/50 sm:flex-row">
            <p>
              &copy; {new Date().getFullYear()} {school.name}. All rights reserved.
            </p>
            <p className="font-serif italic">
              Crafted with care &mdash; for the children of the Seven Sisters.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
