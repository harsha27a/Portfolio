"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Mail, Phone, Github, Linkedin, MessageCircle } from "lucide-react";
import { socialLinks, hero } from "@/lib/content";

const contacts = [
  { icon: Mail, label: "kumariharsha578@gmail.com", href: socialLinks.email },
  { icon: Phone, label: "0336 2618323", href: socialLinks.phone },
  { icon: MessageCircle, label: "WhatsApp", href: socialLinks.whatsapp },
  { icon: Github, label: "GitHub", href: socialLinks.github },
  { icon: Linkedin, label: "LinkedIn", href: socialLinks.linkedin },
];

export default function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-12 sm:pb-16">
      <motion.div
        className="contact-row mb-6 sm:mb-8 -mx-4 px-4 sm:mx-0 sm:px-0"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="contact-row-inner">
        {contacts.map((c, i) => {
          const Icon = c.icon;
          const inner = (
            <span className="contact-chip">
              <Icon size={14} className="text-fuchsia-600 flex-shrink-0" />
              <span className="whitespace-nowrap">{c.label}</span>
            </span>
          );
          return c.href ? (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noreferrer" : undefined}
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {inner}
            </motion.a>
          ) : (
            <motion.span
              key={c.label}
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
            >
              {inner}
            </motion.span>
          );
        })}
        </div>
      </motion.div>

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-start text-center sm:text-left">
        <motion.div
          className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden flex-shrink-0 ring-2 ring-pink-300/60 shadow-lg shadow-pink-200/50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
          <Image
            src="/avatar.jpg"
            alt="Harsha Kumari"
            width={128}
            height={128}
            className="object-cover w-full h-full"
            priority
          />
        </motion.div>

        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-plum mb-2 font-display">
            Harsha Kumari
          </h1>
          <p className="gradient-text font-medium mb-3 text-sm sm:text-base">
            {hero.tagline}
          </p>
          <p className="text-plum-muted text-sm sm:text-[15px] leading-relaxed mb-6 max-w-xl mx-auto sm:mx-0">
            {hero.description}
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center sm:justify-start">
            <a href="/Harsha_Kumari_Resume.pdf" download="Harsha_Kumari_Resume.pdf" className="btn-primary">
              <Download size={15} /> Download Resume
            </a>
            <button onClick={() => scrollTo("projects")} className="btn-secondary">
              View Projects
            </button>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
