import { ProjectCard, type Project } from "./ProjectCard";
import trackerImage from "@/app/assets/projects/CaloriesTracker.png";
import logisticsImage from "@/app/assets/projects/LOGISTICS.png";
import panaderiaImage from "@/app/assets/projects/Panaderia.png";

const projects: Project[] = [
  {
    title: "PanaderiaSystemV2 — Bakery ERP & Production Management",
    summary:
      "A full-stack bakery management system that digitizes the complete operational lifecycle — from raw material procurement and multi-level recipe management to production tracking and point-of-sale. Cashiers process dual-currency transactions (USD/VES), and stock is deducted lot-by-lot down to component ingredients on every sale and production batch.",
    stack: ["Python", "Django Rest", "PostgreSQL", "React", "Tailwind CSS"],
    demoUrl: "https://example.com/nexora",
    repoUrl: "https://github.com/davidprz/nexora",
    image: panaderiaImage,
    imageAlt: "PanaderiaSystemV2 interface showing inventory management and production tracking",
  },
  {
    title: "LogiERP — Logistics ERP & Dispatch",
    summary:
      "A dispatch, inventory, and multi-currency payment ERP for logistics operators. Orders flow from preparation through route delivery to liquidation, with batch-level stock tracking across warehouses and debt settlement in VES, USD, EUR, and USDT.",
    stack: ["TypeScript", "React",  "NestJS",  "Prisma",  "SQLite",  "TanStack"],
    challenges: [
      "Modeled recipe-based inventory so a single sale decrements raw materials across nested product components.",
      "Implemented optimistic updates with TanStack Query so the cart stays responsive on slow terminals.",
      "Packaged the web application into a desktop executable using Electron with a local write-ahead sync queue.",
    ],
    demoUrl: "https://example.com/mintpos",
    repoUrl: "https://github.com/DavidPrz22/Logistics",
    image: logisticsImage,
    imageAlt: "LogiERP interface showing dispatch and inventory management",
  },
  {
    title: "CaloriesTracker — Bilingual Nutrition Tracker",
    summary:
      "A food consumption and caloric analysis platform that integrates with the USDA FoodData Central API to deliver precise nutritional tracking. Users search foods by category in English or Spanish, input consumption amounts, and instantly receive a full macronutrient breakdown — calories, protein, carbs, and fats. Every calculation is saved to a personal consumption history, enabling long-term dietary tracking with JWT-secured user accounts.",
    stack: ["TypeScript", "React", "Express", "PostgreSQL", "Tailwind CSS"],
    demoUrl: "https://example.com/caloriestracker",
    repoUrl: "https://github.com/DavidPrz22/CaloriesCalculator",
    image: trackerImage,
    imageAlt: "CaloriesTracker dashboard with nutritional analysis and a food search interface",
  },
];

export function FeaturedProjects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative z-10 mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-20 md:px-8"
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
