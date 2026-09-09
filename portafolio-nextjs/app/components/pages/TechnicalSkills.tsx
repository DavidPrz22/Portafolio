"use client";

import { useEffect, useRef } from "react";
import { IconText } from "@/app/components/ui/icon-text";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillGroup {
  sectionTitle: string;
  skills: SkillItem[];
}

function SkillSection({ sectionTitle, skills }: SkillGroup) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const elements = [titleRef.current, listRef.current];

      gsap.set(elements, { opacity: 0, y: 60 });

      gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="mt-12 grid sm:grid-cols-2">
      <h3 ref={titleRef} className="text-5xl font-semibold font-heading">{sectionTitle}</h3>
      <ul ref={listRef} className="flex flex-wrap gap-10">
        {skills.map((skill, idx) => (
          <IconText
            icon={skill.icon}
            text={skill.name}
            key={idx}
          />
        ))}
      </ul>
    </div>
  );
}

const stackList: SkillGroup[] = [
  {
    sectionTitle: "FRONTEND",
    skills: [
      { name: "React", icon: "/technologies/React.svg" },
      { name: "Next.js", icon: "/technologies/Next.js.svg" },
      { name: "TypeScript", icon: "/technologies/TypeScript.svg" },
      { name: "JavaScript", icon: "/technologies/JavaScript.svg" },
      { name: "Tailwind CSS", icon: "/technologies/Tailwind.svg" },
      { name: "TanStack Router", icon: "/technologies/Tanstack.svg" },
      { name: "Zustand", icon: "/technologies/Zustand.svg" },
    ],
  },
  {
    sectionTitle: "BACKEND",
    skills: [
      { name: "Python", icon: "/technologies/Python.svg" },
      { name: "Django", icon: "/technologies/Django.svg" },
      { name: "Node.js", icon: "/technologies/Node.js.svg" },
      { name: "NestJS", icon: "/technologies/Nest.js.svg" },
      { name: "Express.js", icon: "/technologies/Express.js.svg" },
    ],
  },
  {
    sectionTitle: "DATABASE",
    skills: [
      { name: "PostgreSQL", icon: "/technologies/Postgres.svg" },
      { name: "SQLite", icon: "/technologies/SQLite.svg" },
      { name: "Prisma ORM", icon: "/technologies/Prisma.svg" },
      { name: "Django ORM", icon: "/technologies/Django.svg" },
    ],
  },
  {
    sectionTitle: "TOOLS",
    skills: [
      { name: "Git", icon: "/technologies/Git.svg" },
      { name: "GitHub", icon: "/technologies/GitHub.svg" },
      { name: "Linux / WSL2", icon: "/technologies/Linux.svg" },
      { name: "Docker", icon: "/technologies/Docker.svg" },
    ],
  },
  {
    sectionTitle: "IDES & AGENTS",
    skills: [
      { name: "Cursor", icon: "/technologies/Cursor.svg" },
      { name: "OpenCode", icon: "/technologies/Opencode.svg" },
      { name: "VS Code", icon: "/technologies/VScode.svg" },
    ],
  },
];

export function TechnicalSkills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-20 md:px-8"
    >
      <h2 id="skills-heading" className="section-label">
        <span>03.</span> Technical Skills
      </h2>
      <div className="mt-14 flex flex-col gap-14">
        {stackList.map((stack, idx) => (
            <SkillSection
              key={idx}
              sectionTitle={stack.sectionTitle}
              skills={stack.skills}
            />
        ))}
      </div>
    </section>
  );
}

export default TechnicalSkills;
