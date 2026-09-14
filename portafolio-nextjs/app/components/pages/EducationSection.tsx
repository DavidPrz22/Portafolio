"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const degreeRef = useRef<HTMLElement>(null);
  const thesisRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const elements = [headingRef.current, degreeRef.current, thesisRef.current];

      gsap.set(elements, { opacity: 0, y: 60 });

      gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "bottom 5%",
        end: "bottom top",
        onEnter: () => {
          gsap.to(elements, {
            opacity: 0,
            y: -60,
            stagger: 0.1,
            duration: 0.35,
            ease: "power3.in",
          });
        },
        onLeaveBack: () => {
          gsap.to(elements, {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.35,
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
      id="education"
      aria-labelledby="education-heading"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-20 md:px-8"
    >
      <h2 ref={headingRef} id="education-heading" className="section-label">
        <span>04.</span> Education & Background
      </h2>

      <div className="mt-12 grid gap-6">
        <article
          ref={degreeRef}
          className="panel group relative overflow-hidden border border-border p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_20px_-8px_oklch(0.897_0.144_174.5_/_30%)]"
        >
          <div className="absolute inset-y-0 left-0 w-1 bg-primary/60 transition-all duration-300 group-hover:bg-primary" />
          <div className="pl-4">
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs tracking-[0.18em] text-primary">
              2019 — 2025
            </span>
            <h3 className="mt-4 text-xl font-semibold text-heading">Systems Engineering</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Universidad Central de Venezuela · Graduated August 2026
            </p>
          </div>
        </article>

        <article
          ref={thesisRef}
          className="panel group relative overflow-hidden border border-border p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_20px_-8px_oklch(0.897_0.144_174.5_/_30%)]"
        >
          <div className="absolute inset-y-0 left-0 w-1 bg-primary/60 transition-all duration-300 group-hover:bg-primary" />
          <div className="pl-4">
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs tracking-[0.18em] text-primary">
              THESIS PROJECT
            </span>
            <h3 className="mt-4 text-xl font-semibold text-heading">
              Migdalfred ERP: Centralized Inventory, Production & POS Web Application
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              This research presents the development of a web information system aimed at optimizing stock, order, and sales management for Panadería y Pastelería Migdalfred, C.A., located in Puerto La Cruz, Anzoátegui State. The business previously operated using manual controls and relying on employee memory, which resulted in inventory stockouts/discrepancies, production inefficiencies, and deficiencies in revenue tracking. The system&apos;s development was structured under the Rational Unified Process (RUP) methodology, utilizing UML diagrams for design, Python/Django for the backend, React for the frontend, and PostgreSQL as the database management engine. The solution centralizes the business workflow, automates raw material and supply inventory tracking, manages invoicing, and generates strategic reports for decision-making.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {[
                "Manual and Informal Operational Management: Excessive reliance on memory, handwritten notes, and direct visual inspection to monitor inventory, process sales, and manage orders.",
                "Lack of Accuracy and Operational Inefficiency: Risk of financial data inaccuracies, waste of perishable goods, difficulties in purchase planning, and bottlenecks in the production workflow.",
                "Lack of Centralized Control and Traceability: Absence of a systematic record of daily sales, cash register reconciliations, and verification of digital payments (mobile payments / pago móvil), making it impossible to verify the accuracy of received funds and increasing the risk of financial discrepancies.",
                "Technical Resistance and Local Digital Divide: Difficulties in adopting modern technological solutions due to this being the company&apos;s first web system implementation and a pioneering effort among local businesses in its sector.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 font-mono text-xs text-primary" aria-hidden="true">
                    ▹
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
