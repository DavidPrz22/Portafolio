"use client";

import { useEffect, useRef } from "react";
import { Mail } from "lucide-react";
import { FaGithub as GitHub, FaLinkedin as Linkedin } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const links = [
  { label: "GitHub", href: "https://github.com/DavidPrz22", icon: GitHub },
  { label: "LinkedIn", href: "https://linkedin.com/in/davidprz", icon: Linkedin },
  { label: "Email", href: "mailto:perezdavid.am@gmail.com", icon: Mail },
];

export function ContactFooter() {
  const footerRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const socialRef = useRef<HTMLUListElement>(null);
  const creditRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
      const elements = [
        labelRef.current,
        headingRef.current,
        textRef.current,
        buttonRef.current,
        socialRef.current,
        creditRef.current,
      ];

      gsap.set(elements, { opacity: 0, y: 60 });

      gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      ScrollTrigger.create({
        trigger: footerRef.current,
        start: "bottom 5%",
        end: "bottom top",
        onEnter: () => {
          gsap.to(elements, {
            opacity: 0,
            y: -60,
            stagger: 0.12,
            duration: 0.5,
            ease: "power3.in",
          });
        },
        onLeaveBack: () => {
          gsap.to(elements, {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.5,
            ease: "power3.out",
          });
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} id="contact" aria-labelledby="contact-heading" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-3xl px-5 py-24 text-center md:px-8">
        <p ref={labelRef} className="font-mono text-sm text-primary">05. What&apos;s next</p>
        <h2 ref={headingRef} id="contact-heading" className="mt-4 text-3xl font-bold sm:text-4xl">
          Get in touch
        </h2>
        <p ref={textRef} className="mt-5 leading-relaxed">
          Open to junior full-stack and backend developer roles. If you have a team where I&apos;d be
          reading code as much as writing it, I&apos;d like to hear about it — I reply to every message.
        </p>

        <a
          ref={buttonRef}
          href="mailto:perezdavid.am@gmail.com"
          className="mt-9 inline-flex items-center rounded-md border border-primary px-7 py-3.5 font-mono text-sm text-primary transition-colors hover:bg-primary/10"
        >
          perezdavid.am@gmail.com
        </a>

        <ul ref={socialRef} className="mt-12 flex items-center justify-center gap-6">
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

        <p ref={creditRef} className="mt-10 font-mono text-xs text-muted-foreground">
          Designed & built by David Pérez
        </p>
      </div>
    </footer>
  );
}
