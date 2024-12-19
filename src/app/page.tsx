import HeroSection from "@/components/ui/heroSection";
import AboutSection from "@/components/ui/aboutSection";
import SkillSection from "@/components/ui/skillSection";
import PortoSection from "@/components/ui/portoSection";
import ExperienceSection from "@/components/ui/experienceSection";
import TestimonialsSection from "@/components/ui/testimonialSection";
import ContactSection from "@/components/ui/contactSection";

export default async function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <PortoSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
