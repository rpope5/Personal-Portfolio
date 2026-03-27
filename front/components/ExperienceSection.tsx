import { siteData } from "../data/site-data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      {siteData.experience.map((exp, i) => (
        <div key={i} className="mb-6">
          <h3 className="font-semibold">
            {exp.role} - {exp.company}
          </h3>
          <p className="text-gray-600">{exp.description}</p>
        </div>
      ))}
    </section>
  );
}