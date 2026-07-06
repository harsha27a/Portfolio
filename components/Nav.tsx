"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/content";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="glass-nav relative z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-3.5 flex items-center justify-between">
        <button
          type="button"
          onClick={() => scrollTo("skills")}
          className="font-bold text-base sm:text-lg text-plum font-display truncate max-w-[55vw] sm:max-w-none text-left"
        >
          Harsha Kumari
        </button>

        <div className="hidden md:flex items-center gap-6 text-sm text-purple-800/80">
          {navLinks.map((l) => (
            <button key={l} type="button" onClick={() => scrollTo(l.toLowerCase())} className="nav-link">
              {l}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="md:hidden relative z-50 p-2 -mr-2 text-purple-800 rounded-full active:bg-pink-100 transition-colors touch-manipulation"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            className="md:hidden fixed inset-0 top-[52px] bg-black/20 z-40"
            onClick={() => setOpen(false)}
          />
          <div className="md:hidden relative z-50 border-t border-pink-200/40 bg-white/95 backdrop-blur-lg shadow-lg">
            <div className="flex flex-col px-4 py-2">
              {navLinks.map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => scrollTo(l.toLowerCase())}
                  className="text-left py-3.5 px-3 rounded-xl text-purple-800 active:bg-pink-100 hover:bg-pink-50 transition-colors touch-manipulation text-base font-medium border-b border-pink-100/60 last:border-0"
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
