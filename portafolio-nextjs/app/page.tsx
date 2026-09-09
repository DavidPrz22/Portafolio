
import { SiteNav } from "@/app/components/pages/SiteNav";
import { HeroSection } from "@/app/components/pages/HeroSection";
import { FeaturedProjects } from "@/app/components/pages/FeaturedProjects";
import { TechnicalSkills } from "@/app/components/pages/TechnicalSkills";
import { EducationSection } from "@/app/components/pages/EducationSection";
import { ContactFooter } from "@/app/components/pages/ContactFooter";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <HeroSection />
        <FeaturedProjects />
        <TechnicalSkills />
        <EducationSection />
      </main>
      <ContactFooter />
    </>
  );
}
