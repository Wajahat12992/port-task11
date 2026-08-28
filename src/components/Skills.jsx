import { useMemo } from "react";
import { skills } from "../data/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import useReveal from "../hooks/useReveal";

function SkillBar({ skill, delay }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>
      <div className="flex items-baseline justify-between mb-1.5">
        <span className="text-sm font-medium text-[var(--color-text-hi)]">{skill.name}</span>
        <span className="font-mono text-xs text-[var(--color-text-lo)]">{skill.level}%</span>
      </div>
      <div className="h-2 rounded-full bg-[var(--color-panel-2)] overflow-hidden">
        <div
          className="h-full rounded-full transition-[width] duration-1000 ease-out"
          style={{
            width: "var(--target-width)",
            background: "linear-gradient(90deg, var(--color-indigo) 0%, var(--color-indigo-soft) 100%)",
          }}
          ref={(el) => {
            if (el) el.style.setProperty("--target-width", `${skill.level}%`);
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const grouped = useMemo(() => {
    const map = {};
    skills.forEach((s) => {
      map[s.group] = map[s.group] || [];
      map[s.group].push(s);
    });
    return map;
  }, []);

  return (
    <section id="skills" className="py-24 md:py-32 bg-[var(--color-panel)]/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          tag="// skills.jsx"
          title="Skills & Tools"
          subtitle="Technologies I used throughout the internship, from markup fundamentals to shipping a full React app."
        />

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
          {Object.entries(grouped).map(([group, items], gi) => (
            <Reveal key={group} delay={gi * 80} className="space-y-5">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--color-indigo-soft)]">
                {group}
              </h3>
              <div className="space-y-4">
                {items.map((s, i) => (
                  <SkillBar key={s.name} skill={s} delay={i * 60} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
