import { siteData } from "../data/site-data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-wrap px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-300">
            Professional Experience
          </p>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            Experience that reflects how I work
          </h2>
        </div>

        <div className="grid gap-6">
          {siteData.experience.map((exp) => (
            <div
              key={`${exp.company}-${exp.role}`}
              className="glass-card rounded-3xl p-7 transition duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-xl"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="mt-1 text-lg font-medium text-sky-700 dark:text-sky-300">
                    {exp.company}
                  </p>
                </div>

                <span className="rounded-full bg-sky-50 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-slate-900 dark:text-slate-200">
                  {exp.period}
                </span>
              </div>

              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-200">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}