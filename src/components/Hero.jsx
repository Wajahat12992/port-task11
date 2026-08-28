import { useEffect, useState } from "react";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import { profile } from "../data/data";

const ROLES = ["React Developer", "Frontend Engineer", "UI Builder", "Problem Solver"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  // Simple typewriter effect cycling through role titles.
  useEffect(() => {
    const current = ROLES[roleIndex];
    const speed = deleting ? 45 : 90;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, displayed.length + 1);
        setDisplayed(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        const next = current.slice(0, displayed.length - 1);
        setDisplayed(next);
        if (next === "") {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % ROLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 grid-noise overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] w-[520px] h-[520px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-indigo) 0%, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-15%] left-[-10%] w-[420px] h-[420px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-amber) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center relative">
        <div>
          <p className="font-mono text-sm text-[var(--color-mint)] mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--color-mint)] animate-pulse" />
            open to work
          </p>

          <h1 className="font-display font-semibold leading-[1.05] text-4xl sm:text-5xl md:text-6xl tracking-tight">
            Hi, I'm {profile.name}.
            <br />
            I build things with
            <br />
            <span className="text-[var(--color-indigo-soft)]">
              {displayed}
              <span className="cursor-blink text-[var(--color-indigo-soft)]">&nbsp;</span>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-[var(--color-text-mid)] text-base sm:text-lg leading-relaxed">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollTo("projects")}
              className="px-6 py-3 rounded-lg bg-[var(--color-indigo)] text-white font-medium text-sm hover:bg-[var(--color-indigo-soft)] transition-colors shadow-lg shadow-[var(--color-indigo)]/20"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="px-6 py-3 rounded-lg border border-[var(--color-line)] text-[var(--color-text-hi)] font-medium text-sm hover:border-[var(--color-indigo-soft)] hover:text-[var(--color-indigo-soft)] transition-colors"
            >
              Contact Me
            </button>
          </div>

          <div className="mt-10 flex items-center gap-4">
            {profile.socials.github && (
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-[var(--color-text-lo)] hover:text-[var(--color-indigo-soft)] transition-colors"
              >
                <GithubIcon size={20} />
              </a>
            )}
            {profile.socials.linkedin && (
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-[var(--color-text-lo)] hover:text-[var(--color-indigo-soft)] transition-colors"
              >
                <LinkedinIcon size={20} />
              </a>
            )}
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-[var(--color-text-lo)] hover:text-[var(--color-indigo-soft)] transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Avatar / code-card signature element */}
        <div className="justify-self-center md:justify-self-end">
          <div className="relative">
            <div
              className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl flex items-center justify-center font-display text-7xl font-bold border border-[var(--color-line)]"
              style={{
                background:
                  "linear-gradient(155deg, var(--color-panel) 0%, var(--color-panel-2) 100%)",
              }}
            >
              <span className="text-[var(--color-indigo-soft)]">{profile.avatarInitials}</span>
            </div>
            <div className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-lg bg-[var(--color-panel)] border border-[var(--color-line)] font-mono text-xs text-[var(--color-mint)] shadow-xl">
              status: building
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollTo("about")}
        aria-label="Scroll to About section"
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[var(--color-text-lo)] hover:text-[var(--color-indigo-soft)] transition-colors"
      >
        <span className="font-mono text-xs">scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </button>
    </section>
  );
}
