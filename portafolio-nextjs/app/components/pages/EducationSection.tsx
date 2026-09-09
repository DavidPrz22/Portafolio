const coursework = [
  "Data Structures & Algorithms",
  "Database Design & Normalization",
  "Software Engineering",
  "Operating Systems",
  "Computer Networks",
  "Operations Research",
];

export function EducationSection() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-20 md:px-8"
    >
      <h2 id="education-heading" className="section-label">
        <span>04.</span> Education & Background
      </h2>

      <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_1fr]">
        <article className="panel p-6">
          <p className="font-mono text-xs tracking-[0.18em] text-primary">2019 — 2024</p>
          <h3 className="mt-3 text-xl font-semibold">B.Sc. Systems Engineering</h3>
          <p className="mt-1 text-sm">Universidad Central de Venezuela · Graduated December 2024</p>
          <h4 className="mt-6 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
            Relevant coursework
          </h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {coursework.map((c) => (
              <li
                key={c}
                className="rounded-sm border border-border px-2.5 py-1 font-mono text-xs"
              >
                {c}
              </li>
            ))}
          </ul>
        </article>

        <article className="panel p-6">
          <p className="font-mono text-xs tracking-[0.18em] text-primary">THESIS PROJECT</p>
          <h3 className="mt-3 text-xl font-semibold">
            Inventory forecasting for small-scale food production
          </h3>
          <p className="mt-4 text-sm leading-relaxed">
            Built and deployed a working system, not a paper prototype: a Django service that
            ingests two years of sales history, forecasts weekly raw-material demand, and generates
            purchase suggestions. It shipped into a real bakery and cut spoilage-driven waste
            measurably over a three-month pilot.
          </p>
          <ul className="mt-5 space-y-2 text-sm">
            {[
              "Designed the relational schema and migration path from the client's spreadsheets.",
              "Compared moving-average and seasonal models, then documented why the simpler one won.",
              "Deployed with Docker Compose plus scheduled jobs on a single low-cost VPS.",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 font-mono text-xs text-primary" aria-hidden="true">
                  ▹
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
