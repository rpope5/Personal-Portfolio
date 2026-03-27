import Image from "next/image";
import { siteData } from "../data/site-data";

export default function Hero() {
  return (
    <section
      id="top"
      className="section-shell soft-grid overflow-hidden px-6 pb-16 pt-14 md:pb-24 md:pt-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div>
          <div className="mb-5 inline-flex items-center rounded-full border border-sky-200 bg-white/70 px-4 py-2 text-sm font-medium text-sky-700 shadow-sm">
            Open to software, IT, and technical opportunities
          </div>

          <h1 className="max-w-3xl text-5xl font-black tracking-tight text-slate-900 md:text-7xl">
            Hi, I’m <span className="gradient-text">{siteData.name}</span>
          </h1>

          <p className="mt-4 text-xl font-semibold text-slate-700 md:text-2xl">
            {siteData.title}
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {siteData.heroSummary}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-sky-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-200 transition duration-300 hover:-translate-y-1 hover:bg-sky-600"
            >
              View Projects
            </a>

            <a
              href={siteData.links.resume}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-sky-200 bg-white px-6 py-3 font-semibold text-slate-800 transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
            <a
              href={siteData.links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-sky-100 bg-white/80 px-4 py-2 transition duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700"
            >
              GitHub
            </a>
            <a
              href={siteData.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-sky-100 bg-white/80 px-4 py-2 transition duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700"
            >
              LinkedIn
            </a>
            <a
              href={siteData.links.email}
              className="rounded-full border border-sky-100 bg-white/80 px-4 py-2 transition duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700"
            >
              Email
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="glass-card relative overflow-hidden rounded-[2rem] p-4 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-200/30 via-white/40 to-sky-400/20" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/70">
              <Image
                src="/assets/headshot.jpg"
                alt="Robert Pope II headshot"
                width={520}
                height={620}
                priority
                className="h-auto w-[320px] object-cover md:w-[380px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}