"use client";

import { Card, Reveal, SectionTitle } from "./ui";
import { certificates } from "@/lib/content";

export default function Certificates() {
  return (
    <section id="certifications" className="section-wrap">
      <Reveal>
        <SectionTitle title="Certifications" />
      </Reveal>
      <div className="grid sm:grid-cols-2 gap-4">
        {certificates.map((c, i) => (
          <Reveal delay={i * 0.05} key={c.name}>
            <Card className="h-full">
              <h3 className="font-semibold text-plum mb-1 font-display">{c.name}</h3>
              <p className="text-xs gradient-text font-medium mb-2">{c.org}</p>
              <p className="text-sm text-plum-muted">{c.desc}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
