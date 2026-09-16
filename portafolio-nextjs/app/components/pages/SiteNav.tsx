"use client";

import { useState } from "react";
import { Menu, Mail } from "lucide-react";
import { FaGithub as GitHub, FaLinkedin as Linkedin } from "react-icons/fa";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/app/components/ui/drawer";

const sections = [
  { id: "hero", num: "01", label: "Home" },
  { id: "projects", num: "02", label: "Featured Projects" },
  { id: "skills", num: "03", label: "Technical Skills" },
  { id: "education", num: "04", label: "Education" },
  { id: "contact", num: "05", label: "Contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/DavidPrz22", icon: GitHub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/davidperezma/", icon: Linkedin },
  { label: "Email", href: "mailto:perezdavid.am@gmail.com", icon: Mail },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  const goTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 md:px-8"
      >
        <a
          href="#hero"
          className="font-mono text-sm tracking-[0.2em] text-primary transition-opacity hover:opacity-70"
        >
          DP<span className="text-heading">.dev</span>
        </a>

        <Drawer open={open} onOpenChange={setOpen} direction="right">
          <DrawerTrigger
            aria-label="Open navigation menu"
            className="inline-flex items-center gap-2 rounded-md border border-primary/40 px-3 py-2 font-mono text-xs text-primary transition-colors hover:bg-primary/10"
          >
            <Menu className="h-4 w-4" aria-hidden="true" />
            Menu
          </DrawerTrigger>

          <DrawerContent className="ml-auto h-full w-76 border-l border-border bg-card">
            <DrawerHeader className="text-left">
              <DrawerTitle className="font-mono text-sm tracking-[0.18em] text-primary">
                NAVIGATION
              </DrawerTitle>
              <DrawerDescription>Jump to a section or find me online.</DrawerDescription>
            </DrawerHeader>

            <div className="flex flex-col gap-8 px-4 pb-8">
              <div>
                <p className="mb-3 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                  Sections
                </p>
                <ul className="flex flex-col">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <button
                        onClick={() => goTo(s.id)}
                        className="flex w-full items-center gap-3 rounded-md px-2 py-2.5 text-left text-heading transition-colors hover:bg-primary/10 hover:text-primary"
                      >
                        <span className="font-mono text-xs text-primary">{s.num}.</span>
                        {s.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mb-3 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                  Social
                </p>
                <ul className="flex flex-col">
                  {socials.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 rounded-md px-2 py-2.5 transition-colors hover:bg-primary/10 hover:text-primary"
                      >
                        <s.icon className="h-4 w-4" aria-hidden="true" />
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </nav>
    </header>
  );
}

