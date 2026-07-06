"use client";

import { Github, ExternalLink } from "lucide-react";
import { Badge, Card, Reveal, SectionTitle } from "./ui";
import { featuredProject, otherProjects } from "@/lib/content";

export default function Projects() {
  return (
    <section id="projects" className="section-wrap">
      <Reveal>
        <SectionTitle title="Projects" sub="Things I built during university and in my free time." />
      </Reveal>

      <Reveal delay={0.05}>
        <Card className="mb-6 ring-1 ring-pink-200/50">
          <h3 className="font-semibold text-plum mb-2 font-display">{featuredProject.name}</h3>
          <p className="text-sm text-plum-muted mb-4 leading-relaxed">{featuredProject.desc}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {featuredProject.stack.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <a href={featuredProject.github} target="_blank" rel="noreferrer" className="link-accent flex items-center gap-1.5 text-sm">
              <Github size={15} /> GitHub
            </a>
            <a href={featuredProject.demo} target="_blank" rel="noreferrer" className="link-accent flex items-center gap-1.5 text-sm">
              <ExternalLink size={15} /> Live demo
            </a>
          </div>
        </Card>
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-4">
        {otherProjects.map((p, i) => (
          <Reveal delay={i * 0.04} key={p.name}>
            <Card className="h-full flex flex-col">
              <h3 className="font-semibold text-plum mb-1 font-display">{p.name}</h3>
              <p className="text-sm text-plum-muted mb-3 flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {p.tech.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer" className="link-accent text-sm">
                  View on GitHub
                </a>
              )}
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
