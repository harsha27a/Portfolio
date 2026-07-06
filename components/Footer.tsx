"use client";

import { Github, Linkedin, Mail, MessageCircle, Heart } from "lucide-react";
import { socialLinks } from "@/lib/content";

const icons = [
  { Icon: Github, href: socialLinks.github, label: "GitHub" },
  { Icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn" },
  { Icon: Mail, href: socialLinks.email, label: "Email" },
  { Icon: MessageCircle, href: socialLinks.whatsapp, label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="border-t border-pink-200/50 py-6 sm:py-8 mt-4 bg-white/30 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center gap-4 text-sm text-purple-800/70">
        <div className="flex gap-2 sm:gap-3">
          {icons.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="social-icon text-purple-800/70"
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
        <span className="text-center">© {new Date().getFullYear()} Harsha Kumari</span>
        <span className="text-xs flex items-center gap-1">
          made with <Heart size={12} className="text-pink-500 fill-pink-500 animate-pulse" /> by Harsha
        </span>
      </div>
    </footer>
  );
}
