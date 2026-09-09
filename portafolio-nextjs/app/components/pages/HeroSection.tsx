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
      className="mx-auto grid min-h-screen w-full max-w-6xl place-items-center gap-12 px-5 py-20 md:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-16"
    >
      <div className="animate-fade-in">

        <div className="mt-2 text-3xl font-heading font-bold tracking-tight text-primary sm:text-8xl lg:text-8xl">
          FULL-STACK
          <p className="text-olive-100 ml-50">DEVELOPER</p>
        </div>

        <p className="mt-12 max-w-xl text-base leading-relaxed sm:text-lg">
          Hi, I&apos;m   
          <span className="font-semibold font-mono text-sm text-primary"> David Pérez</span>
          . A Systems Engineering graduate who builds production-minded web software: typed React
          front-ends, relational data models that hold up under real business rules, and APIs
          documented well enough for someone else to pick up.
        </p>

        <div className="mt-12 flex gap-8">
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
