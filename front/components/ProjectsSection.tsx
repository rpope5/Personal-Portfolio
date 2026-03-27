import { siteData } from "../data/site-data";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      {siteData.projects.map((proj, i) => (
        <div key={i} className="mb-6">
          <h3 className="font-semibold">{proj.name}</h3>
          <p className="text-gray-600">{proj.description}</p>
        </div>
      ))}
    </section>
  );
}