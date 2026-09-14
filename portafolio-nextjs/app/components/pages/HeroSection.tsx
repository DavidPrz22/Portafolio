"use client";

import { useEffect, useRef } from "react";
import { BookOpen, MapPin } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const facts = [
  {
    icon: BookOpen,
    label: "Knowledge",
    value: "TypeScript · Python",
    detail: "React and Next.js on the front, Django and NestJS with PostgreSQL behind them.",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Caracas, VE",
    detail: "Remote-first, comfortable across UTC-5 to UTC+2 team hours.",
  },
];


export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = [headingRef.current, textRef.current, buttonRef.current];

      gsap.set(elements, { opacity: 0, y: 80 });

      gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.3,
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "bottom 50%",
        end: "bottom top",
        onEnter: () => {
          gsap.to(elements, {
            opacity: 0,
            y: -80,
            stagger: 0.15,
            duration: 0.5,
            ease: "power3.in",
          });
        },
        onLeaveBack: () => {
          gsap.to(elements, {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.5,
            ease: "power3.out",
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-labelledby="hero-heading"
      className="relative z-10 mx-auto grid min-h-screen w-full max-w-6xl place-items-center gap-12 px-5 py-20 md:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-16"
    >
      <div>

        <div ref={headingRef} className="mt-2 text-3xl font-heading font-bold tracking-tight text-primary sm:text-8xl lg:text-8xl">
          FULL-STACK
          <p className="text-olive-100 ml-50">DEVELOPER</p>
        </div>

        <p ref={textRef} className="mt-12 max-w-xl text-base leading-relaxed sm:text-lg">
          Hi, I&apos;m   
          <span className="font-semibold font-mono text-sm text-primary"> David Pérez</span>
          . A Systems Engineering graduate who builds production-minded web software: typed React
          front-ends, relational data models that hold up under real business rules, and APIs
          documented well enough for someone else to pick up.
        </p>

        <div ref={buttonRef} className="mt-12 flex gap-8">
          <a
              href="mailto:hello@dp.dev"
                className="group inline-flex items-center gap-3 rounded-sm bg-primary px-6 py-3.5 font-mono text-[13px] font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-foreground"
          >
                  Get in contact
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                </a>
            <span className="flex items-center gap-2.5 font-mono text-sm tracking-[0.14em] text-card-background">
                  <span className="size-2 bg-primary" />
                  AVAILABLE FOR WORK
            </span>
        </div>
      </div>

    </section>
  );
}
