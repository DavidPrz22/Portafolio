import { IconText } from "@/app/components/ui/icon-text";export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillGroup {
  sectionTitle: string;
  skills: SkillItem[];
}

function SkillSection({ sectionTitle, skills }: SkillGroup) {
  return (
    <div className="mt-12 grid sm:grid-cols-2">
      <h3 className="text-5xl font-semibold font-heading">{sectionTitle}</h3>
      <ul className="flex flex-wrap gap-10">
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
      { name: "PostgreSQL", icon: "/technologies/SQLite.svg" },
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
