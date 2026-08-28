import { about } from "../data/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading tag="// about.jsx" title={about.heading} />

        <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-16">
          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} as="p" delay={i * 100} className="text-[var(--color-text-mid)] leading-relaxed text-base md:text-lg">
                {p}
              </Reveal>
            ))}
          </div>

          <Reveal delay={150} className="grid grid-cols-3 md:grid-cols-1 gap-4 content-start">
            {about.highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-xl border border-[var(--color-line)] bg-[var(--color-panel)] px-5 py-5 text-center md:text-left"
              >
                <p className="font-display text-3xl md:text-4xl font-semibold text-[var(--color-indigo-soft)]">
                  {h.value}
                </p>
                <p className="mt-1 font-mono text-xs text-[var(--color-text-lo)] uppercase tracking-wide">
                  {h.label}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
