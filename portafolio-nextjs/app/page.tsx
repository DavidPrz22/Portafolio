
import { SiteNav } from "@/app/components/pages/SiteNav";
import { HeroSection } from "@/app/components/pages/HeroSection";
import { FeaturedProjects } from "@/app/components/pages/FeaturedProjects";
import { TechnicalSkills } from "@/app/components/pages/TechnicalSkills";
import { EducationSection } from "@/app/components/pages/EducationSection";
import { ContactFooter } from "@/app/components/pages/ContactFooter";
import { ParticlesSection } from "@/app/components/pages/ParticlesSection";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <HeroSection />
        <ParticlesSection />
        <FeaturedProjects />
        <TechnicalSkills />
        <EducationSection />
      </main>
      <ContactFooter />
    </>
  );
}
