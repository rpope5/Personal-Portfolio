import { GraduationCap, School, Trophy, Users } from "lucide-react";
import { siteData } from "../data/site-data";

export default function EducationSection() {
  const { education } = siteData;

  return (
    <section id="education" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-300">
            Education
          </p>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            Academic foundation and campus involvement
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="glass-card rounded-3xl p-8">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-sky-100 p-3 text-sky-700 dark:bg-slate-900 dark:text-sky-300">
                <School size={24} />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {education.school}
                </h3>
                <p className="mt-1 text-base text-slate-700 dark:text-slate-200">
                  {education.location}
                </p>
                <p className="mt-2 text-sm font-medium text-sky-700 dark:text-sky-300">
                  {education.graduation}
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-sky-100 bg-white/70 p-5 dark:border-sky-900 dark:bg-slate-900/50">
                <div className="mb-3 flex items-center gap-2 text-sky-700 dark:text-sky-300">
                  <GraduationCap size={18} />
                  <span className="text-sm font-semibold uppercase tracking-wide">
                    Degree
                  </span>
                </div>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">
                  {education.degree}
                </p>
                <p className="mt-3 text-sm text-slate-700 dark:text-slate-200">
                  Minors: {education.minors.join(", ")}
                </p>
              </div>

              <div className="rounded-2xl border border-sky-100 bg-white/70 p-5 dark:border-sky-900 dark:bg-slate-900/50">
                <div className="mb-3 flex items-center gap-2 text-sky-700 dark:text-sky-300">
                  <Trophy size={18} />
                  <span className="text-sm font-semibold uppercase tracking-wide">
                    Academic Standing
                  </span>
                </div>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">
                  GPA: {education.gpa}
                </p>
                <p className="mt-3 text-sm text-slate-700 dark:text-slate-200">
                  {education.honors}
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-8">
            <div className="mb-5 flex items-center gap-2 text-sky-700 dark:text-sky-300">
              <Users size={20} />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Campus Organizations
              </h3>
            </div>

            <div className="space-y-4">
              {education.organizations.map((org) => (
                <div
                  key={org.name}
                  className="rounded-2xl border border-sky-100 bg-white/70 p-4 dark:border-sky-900 dark:bg-slate-900/50"
                >
                  <p className="text-base font-semibold text-slate-900 dark:text-white">
                    {org.name}
                  </p>
                  <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">
                    {org.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}