import Contacts from "@/components/Contacts";
import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import SkillsNAchievements from "@/components/SkillsNAchievements";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <SkillsNAchievements />
      <Projects />
      <Contacts />
      
    </div>
  );
}
