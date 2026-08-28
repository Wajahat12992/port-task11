import { useMemo, useState } from "react";
import { projects } from "../data/data";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const techFilters = useMemo(() => {
    const set = new Set(["All"]);
    projects.forEach((p) => p.tech.forEach((t) => set.add(t)));
    return Array.from(set).slice(0, 7);
  }, []);

  const visible = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.tech.includes(filter));
  }, [filter]);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          tag="// projects.jsx"
          title="Featured Projects"
          subtitle="A selection of internship tasks and personal builds — each one pushed my React and UI skills a little further."
        />

        {/* Filter controls — demonstrates interactive state */}
        <div className="flex flex-wrap gap-2 mb-10 -mt-6">
          {techFilters.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`font-mono text-xs px-3 py-1.5 rounded-full border transition-colors ${
                filter === t
                  ? "bg-[var(--color-indigo)] border-[var(--color-indigo)] text-white"
                  : "border-[var(--color-line)] text-[var(--color-text-mid)] hover:border-[var(--color-indigo-soft)] hover:text-[var(--color-indigo-soft)]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {visible.map((p, i) => (
            <ProjectCard key={p.name} project={p} delay={(i % 4) * 80} />
          ))}
        </div>

        {visible.length === 0 && (
          <p className="text-[var(--color-text-lo)] text-sm">No projects match that filter yet.</p>
        )}
      </div>
    </section>
  );
}
