import { siteData } from "../data/site-data";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section-shell section-fade px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
            Featured Work
          </p>
          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Projects worth clicking into
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {siteData.projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group glass-card rounded-3xl p-6 transition duration-300 hover:-translate-y-2 hover:border-sky-300 hover:shadow-2xl"
            >
              <div className="mb-5 inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                Project
              </div>

              <h3 className="text-2xl font-bold text-slate-900 transition duration-300 group-hover:text-sky-700">
                {project.name}
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-600">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-sky-100 bg-white/80 px-3 py-1 text-sm text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-2 font-semibold text-sky-700">
                <span>View Project</span>
                <span className="transition duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}