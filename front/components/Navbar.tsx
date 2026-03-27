"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sky-100/60 bg-[var(--nav-bg)] backdrop-blur-xl dark:border-slate-800/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-sky-900 dark:bg-slate-900/70 dark:text-white"
        >
          RP
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition duration-300 hover:bg-sky-50 hover:text-sky-700 dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-sky-300"
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            aria-label="Open menu"
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-full border border-sky-200 bg-white/80 p-2.5 text-slate-800 shadow-sm dark:border-sky-900 dark:bg-slate-900/70 dark:text-white"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-sky-100 bg-white/90 px-6 py-4 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition duration-300 hover:bg-sky-50 hover:text-sky-700 dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-sky-300"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}