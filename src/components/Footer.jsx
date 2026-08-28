import { profile } from "../data/data";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] py-8">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[var(--color-text-lo)]">
        <p className="font-mono text-xs">
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind CSS.
        </p>
        <p className="font-mono text-xs">designed &amp; coded by {profile.name}</p>
      </div>
    </footer>
  );
}
