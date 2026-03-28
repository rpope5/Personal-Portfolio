import Image from "next/image";
import { ArrowRight, Download, Mail } from "lucide-react";
import { siteData } from "../data/site-data";

export default function Hero() {
  return (
    <section
      id="top"
      className="section-wrap grid-bg overflow-hidden px-6 pb-16 pt-14 md:pb-24 md:pt-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>


          <h1 className="max-w-3xl text-5xl font-black tracking-tight text-slate-900 dark:text-slate-100 md:text-7xl">
            <span className="gradient-text">{siteData.name}</span>
          </h1>

          <p className="mt-4 text-xl font-semibold text-slate-700 dark:text-slate-200 md:text-2xl">
            {siteData.title}
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            {siteData.heroSummary}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-200 transition duration-300 hover:-translate-y-1 hover:bg-sky-600"
            >
              View Projects
              <ArrowRight size={18} />
            </a>

            <a
              href={siteData.links.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-6 py-3 font-semibold text-slate-800 transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-md dark:border-sky-900 dark:bg-slate-900/70 dark:text-slate-100"
            >
              Download Resume
              <Download size={18} />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300">
            <a
              href={siteData.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/80 px-4 py-2 transition duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700 dark:border-sky-900 dark:bg-slate-900/60 dark:hover:text-sky-300"
            >
              <Image
                src="/icons/github.svg"
                alt="GitHub"
                width={16}
                height={16}
                className="h-4 w-4 object-contain"
              />
              GitHub
            </a>

            <a
              href={siteData.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/80 px-4 py-2 transition duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700 dark:border-sky-900 dark:bg-slate-900/60 dark:hover:text-sky-300"
            >
              <Image
                src="/icons/linkedin.png"
                alt="LinkedIn"
                width={16}
                height={16}
                className="h-4 w-4 object-contain"
              />
              LinkedIn
            </a>

            <a
              href={siteData.links.email}
              className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/80 px-4 py-2 transition duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700 dark:border-sky-900 dark:bg-slate-900/60 dark:hover:text-sky-300"
            >
              <Mail size={16} />
              Email
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="glass-card relative overflow-hidden rounded-[2rem] p-4 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-200/30 via-white/40 to-sky-400/20 dark:from-sky-900/30 dark:via-slate-900/20 dark:to-sky-700/20" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/70 dark:border-slate-800">
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