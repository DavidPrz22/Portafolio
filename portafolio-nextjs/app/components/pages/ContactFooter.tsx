import {Mail } from "lucide-react";

const links = [
  { label: "GitHub", href: "https://github.com/davidprz", icon: "Github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/davidprz", icon: "Linkedin" },
  { label: "Email", href: "mailto:david.prz.dev@gmail.com", icon: Mail },
];

export function ContactFooter() {
  return (
    <footer id="contact" aria-labelledby="contact-heading" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-3xl px-5 py-24 text-center md:px-8">
        <p className="font-mono text-sm text-primary">05. What's next</p>
        <h2 id="contact-heading" className="mt-4 text-3xl font-bold sm:text-4xl">
          Get in touch
        </h2>
        <p className="mt-5 leading-relaxed">
          Open to junior full-stack and backend developer roles. If you have a team where I'd be
          reading code as much as writing it, I'd like to hear about it — I reply to every message.
        </p>

        <a
          href="mailto:david.prz.dev@gmail.com"
          className="mt-9 inline-flex items-center rounded-md border border-primary px-7 py-3.5 font-mono text-sm text-primary transition-colors hover:bg-primary/10"
        >
          david.prz.dev@gmail.com
        </a>

        <ul className="mt-12 flex items-center justify-center gap-6">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target="_blank"
                rel="noreferrer"
                aria-label={l.label}
                className="inline-block text-heading transition-transform hover:-translate-y-0.5 hover:text-primary"
              >
                <l.icon className="h-5 w-5" />
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-10 font-mono text-xs text-muted-foreground">
          Designed & built by David Pérez
        </p>
      </div>
    </footer>
  );
}
