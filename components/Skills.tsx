"use client";

import { Badge, Card, Reveal, SectionTitle } from "./ui";
import { skillGroups } from "@/lib/content";

export default function Skills() {
  return (
    <section id="skills" className="section-wrap">
      <Reveal>
        <SectionTitle title="Skills" sub="Technologies and tools I have used in my projects and coursework." />
      </Reveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {skillGroups.map((g, i) => (
          <Reveal delay={i * 0.05} key={g.label}>
            <Card className="h-full">
              <h3 className="font-semibold mb-3 text-plum font-display">{g.label}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
