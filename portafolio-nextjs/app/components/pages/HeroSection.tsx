import { BookOpen, MapPin } from "lucide-react";

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
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="mx-auto grid w-full max-w-6xl gap-12 px-5 pt-32 pb-20 md:px-8 md:pt-40 lg:grid-cols-[1.15fr_1fr] lg:gap-16"
    >
      <div className="animate-fade-in">
        <h1
          id="hero-heading"
          className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          
        </h1>
        <div className="mt-2 text-3xl font-heading font-bold tracking-tight text-primary sm:text-8xl lg:text-8xl">
          FULL-STACK
          <p className="text-olive-200 ml-15">DEVELOPER</p>
        </div>
        <p className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg">
          Hi, I'm a <span className="font-semibold font-mono text-sm text-primary">David Pérez</span>. A Systems Engineering graduate who builds production-minded web software: typed React
          front-ends, relational data models that hold up under real business rules, and APIs
          documented well enough for someone else to pick up.
        </p>
        <div className="mt-9">
          <a
            href="#contact"
            className="inline-flex items-center rounded-md border border-primary px-6 py-3 font-mono text-sm text-primary transition-colors hover:bg-primary/10"
          >
            Get in contact
          </a>
        </div>
      </div>

      <aside aria-label="Quick facts" className="flex flex-col gap-4 lg:justify-end">
        {facts.map((f) => (
          <article key={f.label} className="panel p-5 transition-transform hover:-translate-y-1">
            <div className="flex items-center gap-3">
              <span className="rounded-md bg-primary/10 p-2 text-primary">
                <f.icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                {f.label}
              </span>
            </div>
            <h3 className="mt-3 text-lg font-semibold">{f.value}</h3>
            <p className="mt-1.5 text-sm leading-relaxed">{f.detail}</p>
          </article>
        ))}
      </aside>
    </section>
  );
}
