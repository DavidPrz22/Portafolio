"use client";

import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { FaGithub } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type Project = {
  title: string;
  summary: string;
  stack: string[];
  challenges?: string[];
  demoUrl: string;
  repoUrl: string;
  image: StaticImageData;
  imageAlt: string;
};

export function ProjectCard({ project, reversed = false }: { project: Project; reversed?: boolean }) {
  const cardRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      const elements = [imageRef.current, contentRef.current];

      gsap.set(elements, { opacity: 0, y: 60 });

      gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      ScrollTrigger.create({
        trigger: cardRef.current,
        start: "bottom 10%",
        end: "bottom top",
        onEnter: () => {
          gsap.to(elements, {
            opacity: 0,
            y: -60,
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
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <article ref={cardRef} className="relative z-10 grid items-center gap-6 lg:grid-cols-12 lg:gap-0">
      <div
        ref={imageRef}
        className={`group relative overflow-hidden rounded-md border border-border lg:col-span-7 lg:row-start-1 ${
          reversed ? "lg:col-start-1" : "lg:col-start-6"
        }`}
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          width={1280}
          height={800}
          className="h-full w-full object-cover"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-background/70 transition-colors duration-300 group-hover:bg-background/25 lg:bg-background/50"
        />
      </div>


      <div
        ref={contentRef}
        className={`relative z-10 lg:col-span-7 lg:row-start-1 ${
          reversed ? "lg:col-start-6 lg:text-right" : "lg:col-start-1"
        }`}
      >
        <p className="font-mono text-xs tracking-[0.18em] text-primary">FEATURED PROJECT</p>
        <h3 className="mt-2 text-2xl font-bold">{project.title}</h3>

        <p className="panel text-card-background mt-5 p-5 text-sm leading-relaxed sm:text-base">
          {project.summary}
        </p>


        <ul
          className={`mt-5 flex flex-wrap gap-x-4 gap-y-2 font-mono text-card-background text-sm  ${
            reversed ? "lg:justify-end" : ""
          }`}
          aria-label="Tech stack"
        >
          {project.stack.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className={`mt-5 flex items-center gap-4 ${reversed ? "lg:justify-end" : ""}`}>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} GitHub repository`}
            className="text-heading transition-colors hover:text-primary"
          >
            <FaGithub />
          </a>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} live demo`}
            className="text-heading transition-colors hover:text-primary"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>
    </article>
  );
}
