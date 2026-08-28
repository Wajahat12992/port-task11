import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import { profile } from "../data/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "That email doesn't look right.";
    if (!form.message.trim()) next.message = "Say a little about why you're reaching out.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    // This demo submits via a mailto link — swap this for a real
    // endpoint (Formspree, EmailJS, your own API) when you deploy.
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setStatus("sent");
      setForm(initialForm);
    }, 600);
  };

  const contactItems = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, "")}` },
    { icon: MapPin, label: profile.location, href: null },
    profile.socials.github && { icon: GithubIcon, label: "GitHub", href: profile.socials.github },
    profile.socials.linkedin && { icon: LinkedinIcon, label: "LinkedIn", href: profile.socials.linkedin },
  ].filter(Boolean);

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          tag="// contact.jsx"
          title="Let's Work Together"
          subtitle="Have a role, project, or just want to say hi? My inbox is open."
        />

        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16">
          <Reveal className="space-y-4">
            {contactItems.map(({ icon: Icon, label, href }) => {
              const content = (
                <div className="flex items-center gap-4 rounded-xl border border-[var(--color-line)] bg-[var(--color-panel)] px-4 py-3.5 hover:border-[var(--color-indigo-soft)] transition-colors">
                  <span className="w-9 h-9 rounded-lg bg-[var(--color-panel-2)] flex items-center justify-center text-[var(--color-indigo-soft)] shrink-0">
                    <Icon size={16} />
                  </span>
                  <span className="text-sm text-[var(--color-text-hi)] break-all">{label}</span>
                </div>
              );
              return href ? (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              );
            })}
          </Reveal>

          <Reveal delay={100}>
            {status === "sent" ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-3 rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)] p-10">
                <CheckCircle2 size={36} className="text-[var(--color-mint)]" />
                <p className="font-display text-xl font-semibold">Message ready to send</p>
                <p className="text-sm text-[var(--color-text-mid)] max-w-xs">
                  Your email client should have opened with the message pre-filled. Thanks for reaching out!
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 font-mono text-xs text-[var(--color-indigo-soft)] hover:underline"
                >
                  send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full rounded-lg border border-[var(--color-line)] bg-[var(--color-panel)] px-4 py-3 text-sm placeholder:text-[var(--color-text-lo)] focus:border-[var(--color-indigo-soft)] outline-none transition-colors"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-[var(--color-line)] bg-[var(--color-panel)] px-4 py-3 text-sm placeholder:text-[var(--color-text-lo)] focus:border-[var(--color-indigo-soft)] outline-none transition-colors"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about the role or project..."
                    className="w-full rounded-lg border border-[var(--color-line)] bg-[var(--color-panel)] px-4 py-3 text-sm placeholder:text-[var(--color-text-lo)] focus:border-[var(--color-indigo-soft)] outline-none transition-colors resize-none"
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-indigo)] text-white font-medium text-sm hover:bg-[var(--color-indigo-soft)] transition-colors disabled:opacity-60"
                >
                  <Send size={15} />
                  {status === "sending" ? "Preparing..." : "Send Message"}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
