import { siteData } from "../data/site-data";

export default function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-300">
            Skills
          </p>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            Tools I like building with
          </h2>
        </div>

        <div className="glass-card rounded-3xl p-8">
          <div className="flex flex-wrap gap-3">
            {siteData.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-sky-100 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700 dark:border-sky-900 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:text-sky-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}