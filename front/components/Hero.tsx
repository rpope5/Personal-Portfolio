import { siteData } from "../data/site-data";

export default function Hero() {
  return (
    <section className="text-center py-24">
      <h1 className="text-5xl font-bold gradient-text">
        {siteData.name}
      </h1>
      <p className="mt-4 text-xl">{siteData.title}</p>
      <p className="mt-4 text-gray-600 max-w-xl mx-auto">
        {siteData.description}
      </p>
    </section>
  );
}