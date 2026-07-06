"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/content";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="glass-nav">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-3.5 flex items-center justify-between">
        <button
          onClick={() => scrollTo("skills")}
          className="font-bold text-base sm:text-lg text-plum font-display truncate max-w-[55vw] sm:max-w-none text-left"
        >
          Harsha Kumari
        </button>

        <div className="hidden md:flex items-center gap-6 text-sm text-purple-800/80">
          {navLinks.map((l) => (
            <button key={l} onClick={() => scrollTo(l.toLowerCase())} className="nav-link">
              {l}
            </button>
          ))}
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-purple-800 rounded-full active:bg-pink-100 transition-colors touch-manipulation"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-pink-200/40 bg-white/70 backdrop-blur-lg"
          >
            <div className="flex flex-col px-4 py-3 gap-1">
              {navLinks.map((l, i) => (
                <motion.button
                  key={l}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(l.toLowerCase())}
                  className="text-left py-3 px-3 rounded-xl text-purple-800 active:bg-pink-100 hover:bg-pink-50 transition-colors touch-manipulation text-base font-medium"
                >
                  {l}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
