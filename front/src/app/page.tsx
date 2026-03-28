import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import EducationSection from "../../components/EducationSection";
import BackgroundBlobs from "../../components/BackgroundBlobs";
import ExperienceSection from "../../components/ExperienceSection";
import Reveal from "../../components/Reveal";
import ProjectsSection from "../../components/ProjectsSection";
import SkillsSection from "../../components/SkillsSection";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden pt-20">
      <BackgroundBlobs />
      <Navbar />
      <Hero />
      <Reveal>
        <EducationSection />
      </Reveal>
      <Reveal>
        <ExperienceSection />
      </Reveal>
      <Reveal>
        <ProjectsSection />
      </Reveal>
      <Reveal>
        <SkillsSection />
      </Reveal>
      <Reveal>
        <ContactSection />
      </Reveal>
      <Footer />
    </main>
  );
}