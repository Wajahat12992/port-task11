import { GraduationCap, Briefcase, Award, Trophy } from "lucide-react";
import { education } from "../data/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const ICONS = {
  education: GraduationCap,
  internship: Briefcase,
  certification: Award,
  achievement: Trophy,
};

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 bg-[var(--color-panel)]/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          tag="// journey.jsx"
          title="Education & Experience"
          subtitle="The path so far — in order."
        />

        <div className="relative pl-8 md:pl-10">
          <div className="absolute left-[9px] md:left-[11px] top-2 bottom-2 w-px bg-[var(--color-line)]" />

          <div className="space-y-10">
            {education.map((item, i) => {
              const Icon = ICONS[item.type] || Award;
              return (
                <Reveal key={item.title} delay={i * 90} className="relative">
                  <span className="absolute -left-8 md:-left-10 top-1 w-5 h-5 md:w-6 md:h-6 rounded-full bg-[var(--color-ink)] border-2 border-[var(--color-indigo-soft)] flex items-center justify-center">
                    <Icon size={12} className="text-[var(--color-indigo-soft)]" />
                  </span>

                  <div className="rounded-xl border border-[var(--color-line)] bg-[var(--color-panel)] p-5 md:p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                      <span className="font-mono text-xs text-[var(--color-text-lo)]">{item.period}</span>
                    </div>
                    <p className="text-sm font-medium text-[var(--color-indigo-soft)] mb-2">{item.org}</p>
                    <p className="text-sm text-[var(--color-text-mid)] leading-relaxed">{item.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
