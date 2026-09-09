import { ProjectCard, type Project } from "./ProjectCard";
import posImage from "@/app/assets/projects/project-pos.jpg";
import tasksImage from "@/app/assets/projects/project-tasks.jpg";
import apiImage from "@/app/assets/projects/project-api.jpg";

const projects: Project[] = [
  {
    title: "MintPOS — Retail POS & Inventory",
    summary:
      "A point-of-sale and inventory management system for small retailers handling multi-currency pricing and raw-material tracking. Cashiers ring up sales offline, and stock is deducted down to component ingredients on every transaction.",
    stack: ["TypeScript", "React", "NestJS", "PostgreSQL", "Prisma", "Electron"],
    challenges: [
      "Modeled recipe-based inventory so a single sale decrements raw materials across nested product components.",
      "Implemented optimistic updates with TanStack Query so the cart stays responsive on slow terminals.",
      "Packaged the web application into a desktop executable using Electron with a local write-ahead sync queue.",
    ],
    demoUrl: "https://example.com/mintpos",
    repoUrl: "https://github.com/davidprz/mintpos",
    image: posImage,
    imageAlt: "MintPOS point-of-sale screen showing a product grid and cart totals",
  },
  {
    title: "Northstar — Project & Task Analytics",
    summary:
      "A team workspace that turns task activity into delivery metrics. Boards, time tracking, and revenue reporting live in one place so a small studio can see where hours actually go.",
    stack: ["TypeScript", "Next.js", "Zustand", "Django", "PostgreSQL"],
    challenges: [
      "Wrote windowed SQL aggregations to compute rolling 30-day throughput without hammering the database.",
      "Built drag-and-drop board reordering on a fractional index so concurrent moves never collide.",
      "Added role-scoped row filtering enforced server-side rather than in the client query.",
    ],
    demoUrl: "https://example.com/northstar",
    repoUrl: "https://github.com/davidprz/northstar",
    image: tasksImage,
    imageAlt: "Northstar dashboard with revenue charts and a kanban task board",
  },
  {
    title: "Nexora — API Gateway & Request Logs",
    summary:
      "A self-hosted gateway that proxies internal services and records every request. Developers replay calls, inspect payloads, and watch latency percentiles from a single console.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    challenges: [
      "Streamed request logs over server-sent events with backpressure so the live view survives traffic spikes.",
      "Implemented p95 latency rollups in TimescaleDB-style continuous aggregates to keep queries under 100 ms.",
      "Redacted credentials at the ingestion layer so tokens never reach persistent storage.",
    ],
    demoUrl: "https://example.com/nexora",
    repoUrl: "https://github.com/davidprz/nexora",
    image: apiImage,
    imageAlt: "Nexora console showing API request logs and a latency graph",
  },
];

export function FeaturedProjects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-20 md:px-8"
    >
      <h2 id="projects-heading" className="section-label">
        <span>02.</span> Featured Projects
      </h2>

      <div className="mt-14 flex flex-col gap-20 lg:gap-28">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} reversed={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
