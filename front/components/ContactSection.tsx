import { siteData } from "../data/site-data";

export default function ContactSection() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="glass-card rounded-[2rem] px-8 py-12 text-center md:px-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
            Contact
          </p>

          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Let’s build something strong
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            I’m always interested in software engineering, IT, and technical
            opportunities where I can keep growing and contribute meaningful work.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={siteData.links.email}
              className="rounded-full bg-sky-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-200 transition duration-300 hover:-translate-y-1 hover:bg-sky-600"
            >
              Email Me
            </a>

            <a
              href={siteData.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-sky-200 bg-white px-6 py-3 font-semibold text-slate-800 transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
            >
              LinkedIn
            </a>

            <a
              href={siteData.links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-sky-200 bg-white px-6 py-3 font-semibold text-slate-800 transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}