"use client";

import { Badge, Reveal, SectionTitle } from "./ui";
import { education } from "@/lib/content";

export default function Education() {
  return (
    <section id="education" className="section-wrap">
      <Reveal>
        <SectionTitle title="Education" />
      </Reveal>
      <div className="space-y-8">
        {education.map((e, i) => (
          <Reveal delay={i * 0.05} key={e.degree + e.school}>
            <div className="timeline-line">
              {e.period && <p className="text-xs text-plum-muted mb-1">{e.period}</p>}
              <h3 className="font-semibold text-plum mb-1 font-display">{e.degree}</h3>
              <p className="text-sm text-plum-muted mb-1">{e.school}</p>
              {e.cgpa && (
                <p className="text-sm gradient-text font-medium mb-2">CGPA: {e.cgpa}</p>
              )}
              {e.grade && (
                <p className="text-sm gradient-text font-medium mb-2">Grade: {e.grade}</p>
              )}
              {e.coursework && (
                <>
                  <p className="text-sm text-purple-800/80 mb-2 mt-3">Relevant coursework:</p>
                  <div className="flex flex-wrap gap-2">
                    {e.coursework.map((c) => (
                      <Badge key={c}>{c}</Badge>
                    ))}
                  </div>
                </>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
