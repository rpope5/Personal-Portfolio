import { siteData } from "../data/site-data";

export default function SkillsSection() {
  return (
    <section className="py-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {siteData.skills.map((skill, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}