"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";
import { school } from "@/lib/data";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const waLink = `https://wa.me/${school.whatsappRaw}?text=${encodeURIComponent(
    `Hi ${school.name}, I would like more information.`
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Scroll to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group relative flex h-13 w-13 items-center justify-center waterglass rounded-2xl text-white transition-all hover:scale-110"
            style={{ height: 52, width: 52 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} strokeWidth={2.5} className="relative z-10" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Call button */}
      <a
        href={`tel:${school.phone.replace(/\s/g, "")}`}
        className="group relative flex items-center justify-center waterglass rounded-2xl text-white transition-all hover:scale-110"
        style={{ height: 56, width: 56 }}
        aria-label="Call school"
      >
        {/* Pulse rings — desktop only */}
        <span className="desktop-only absolute inset-0 rounded-2xl bg-ice-400/40 animate-pulse-glow pointer-events-none" />
        <Phone size={20} strokeWidth={2.5} className="relative z-10" />
      </a>

      {/* WhatsApp button — premium waterglass-gold */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center rounded-2xl text-midnight-900 transition-all hover:scale-110"
        style={{
          height: 64,
          width: 64,
          background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -1px 0 rgba(0,0,0,0.2), 0 12px 40px rgba(37, 211, 102, 0.45), 0 0 0 1px rgba(37, 211, 102, 0.3)",
        }}
        aria-label="WhatsApp"
      >
        {/* Top-left highlight (waterglass shine) */}
        <span
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)",
          }}
        />
        {/* Glow ring (desktop only) */}
        <span
          className="desktop-only absolute -inset-1 rounded-3xl pointer-events-none animate-pulse-glow"
          style={{
            background: "radial-gradient(circle, rgba(37, 211, 102, 0.5) 0%, transparent 70%)",
            filter: "blur(8px)",
          }}
        />
        <MessageCircle size={26} strokeWidth={2.5} className="relative z-10 text-white" fill="currentColor" />
      </a>
    </div>
  );
}
