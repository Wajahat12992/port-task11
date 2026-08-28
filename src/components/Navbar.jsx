import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { navLinks, profile } from "../data/data";

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[var(--color-ink)]/80 border-b border-[var(--color-line)]"
          : "bg-transparent border-b border-transparent"
      }`}
      style={
        scrolled
          ? { backgroundColor: "color-mix(in srgb, var(--color-ink) 82%, transparent)" }
          : undefined
      }
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => handleNavClick("home")}
          className="font-display font-semibold text-lg tracking-tight flex items-center gap-2"
          aria-label="Go to top"
        >
          <span className="text-[var(--color-indigo-soft)] font-mono">&lt;</span>
          {profile.name}
          <span className="text-[var(--color-indigo-soft)] font-mono">/&gt;</span>
        </button>

        {/* Desktop nav — styled like editor tabs */}
        <ul className="hidden md:flex items-center gap-1 font-mono text-sm">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNavClick(link.id)}
                className={`relative px-3 py-2 rounded-md transition-colors duration-200 flex items-center gap-2 ${
                  active === link.id
                    ? "text-[var(--color-text-hi)] bg-[var(--color-panel)]"
                    : "text-[var(--color-text-lo)] hover:text-[var(--color-text-hi)]"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    active === link.id ? "bg-[var(--color-mint)]" : "bg-transparent"
                  }`}
                />
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="p-2 rounded-md border border-[var(--color-line)] text-[var(--color-text-mid)] hover:text-[var(--color-indigo-soft)] hover:border-[var(--color-indigo-soft)] transition-colors"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="md:hidden p-2 rounded-md border border-[var(--color-line)] text-[var(--color-text-mid)]"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 pb-4 font-mono text-sm bg-[var(--color-ink)]">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-3 py-2.5 rounded-md flex items-center gap-2 ${
                  active === link.id
                    ? "text-[var(--color-text-hi)] bg-[var(--color-panel)]"
                    : "text-[var(--color-text-lo)]"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    active === link.id ? "bg-[var(--color-mint)]" : "bg-transparent"
                  }`}
                />
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
