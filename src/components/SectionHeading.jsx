import Reveal from "./Reveal";

/**
 * Consistent section heading used across the page.
 * `tag` renders as a small mono "file" label (e.g. "// about.jsx")
 * to keep the editor/terminal motif running through the site.
 */
export default function SectionHeading({ tag, title, subtitle, align = "left" }) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <Reveal className={`flex flex-col gap-3 mb-12 md:mb-16 ${alignment}`}>
      {tag && (
        <span className="font-mono text-xs md:text-sm tracking-wider text-[var(--color-indigo-soft)]">
          {tag}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-[var(--color-text-mid)] text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
