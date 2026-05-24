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
    `Hi ${school.name}, I'd like more information.`
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex h-12 w-12 items-center justify-center rounded-sm border border-navy/20 bg-cream text-navy shadow-lg transition-colors hover:bg-navy hover:text-cream"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      <a
        href={`tel:${school.phone.replace(/\s/g, "")}`}
        className="flex h-12 w-12 items-center justify-center rounded-sm bg-navy text-cream shadow-lg transition-transform hover:scale-105"
        aria-label="Call school"
      >
        <Phone size={18} />
      </a>

      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-sm bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
        aria-label="WhatsApp"
      >
        <MessageCircle size={18} />
      </a>
    </div>
  );
}
