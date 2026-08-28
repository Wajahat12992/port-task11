import { ExternalLink, Star } from "lucide-react";
import { GithubIcon } from "./icons/BrandIcons";

export default function ProjectCard({ project, delay = 0 }) {
  const { name, description, tech, github, demo, featured } = project;

  return (
    <div
      className={`reveal group flex flex-col justify-between rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-indigo-soft)] hover:shadow-xl hover:shadow-[var(--color-indigo)]/10 ${
        featured ? "sm:col-span-2" : ""
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div>
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-semibold flex items-center gap-2">
            {name}
            {featured && (
              <span title="Featured project">
                <Star size={14} className="text-[var(--color-amber)] fill-[var(--color-amber)]" />
              </span>
            )}
          </h3>
        </div>
        <p className="mt-3 text-sm text-[var(--color-text-mid)] leading-relaxed">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] px-2 py-1 rounded-md bg-[var(--color-panel-2)] text-[var(--color-text-mid)] border border-[var(--color-line)]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center gap-4 text-sm">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-[var(--color-text-mid)] hover:text-[var(--color-indigo-soft)] transition-colors"
          >
            <GithubIcon size={15} /> Code
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-[var(--color-text-mid)] hover:text-[var(--color-indigo-soft)] transition-colors"
          >
            <ExternalLink size={15} /> Live Demo
          </a>
        )}
        {!github && !demo && (
          <span className="text-[var(--color-text-lo)] italic text-xs">Links coming soon</span>
        )}
      </div>
    </div>
  );
}
