"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

export function SectionTitle({
  title,
  sub,
}: {
  title: string;
  sub?: string;
}) {
  return (
    <div className="mb-6 sm:mb-8">
      <motion.div
        className="w-10 h-1 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 mb-3"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 40, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-plum mb-2 font-display">{title}</h2>
      {sub && <p className="text-plum-muted leading-relaxed text-sm">{sub}</p>}
    </div>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return <span className="skill-badge">{children}</span>;
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={`glass-card ${className}`}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
