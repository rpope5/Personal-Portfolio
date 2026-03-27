import Image from "next/image";
import { Mail } from "lucide-react";
import { siteData } from "../data/site-data";

export default function ContactSection() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="glass-card rounded-[2rem] px-8 py-12 text-center md:px-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-300">
            Contact
          </p>

          <h2 className="text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            Let’s build something strong
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-200">
            I’m interested in software engineering, IT, and technical opportunities
            where I can keep improving and contribute meaningful work.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={siteData.links.email}
              className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-200 transition duration-300 hover:-translate-y-1 hover:bg-sky-600"
            >
              <Mail size={18} />
              Email Me
            </a>

            <a
              href={siteData.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-6 py-3 font-semibold text-slate-800 transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-md dark:border-sky-900 dark:bg-slate-900/70 dark:text-white"
            >
              <Image
                src="/icons/linkedin.png"
                alt="LinkedIn"
                width={18}
                height={18}
                className="h-[18px] w-[18px] object-contain"
              />
              LinkedIn
            </a>

            <a
              href={siteData.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-6 py-3 font-semibold text-slate-800 transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-md dark:border-sky-900 dark:bg-slate-900/70 dark:text-white"
            >
              <Image
                src="/icons/github.svg"
                alt="GitHub"
                width={18}
                height={18}
                className="h-[18px] w-[18px] object-contain"
              />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}