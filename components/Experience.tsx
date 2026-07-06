"use client";

import { Reveal, SectionTitle } from "./ui";
import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience" className="section-wrap">
      <Reveal>
        <SectionTitle title="Experience" sub="Activities and roles outside of regular coursework." />
      </Reveal>
      <div className="space-y-6">
        {experience.map((e, i) => (
          <Reveal delay={i * 0.05} key={e.title + e.org}>
            <div className="timeline-line">
              <p className="text-xs text-plum-muted mb-1">{e.period}</p>
              <h3 className="font-semibold text-plum font-display">{e.title}</h3>
              <p className="text-sm gradient-text font-medium mb-1">{e.org}</p>
              <p className="text-sm text-plum-muted leading-relaxed">{e.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
