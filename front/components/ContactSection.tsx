import { siteData } from "../data/site-data";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <div className="space-x-4">
        <a href={siteData.links.github}>GitHub</a>
        <a href={siteData.links.linkedin}>LinkedIn</a>
        <a href={siteData.links.email}>Email</a>
      </div>
    </section>
  );
}