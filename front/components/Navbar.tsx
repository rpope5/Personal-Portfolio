const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
        >
          RP
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-slate-600 transition duration-300 hover:bg-sky-50 hover:text-sky-700"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}