import { ExternalLink } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { FaGithub } from "react-icons/fa";
export type Project = {
  title: string;
  summary: string;
  stack: string[];
  challenges: string[];
  demoUrl: string;
  repoUrl: string;
  image: StaticImageData;
  imageAlt: string;
};

export function ProjectCard({ project, reversed = false }: { project: Project; reversed?: boolean }) {
  return (
    <article className="relative grid items-center gap-6 lg:grid-cols-12 lg:gap-0">
      <div
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
