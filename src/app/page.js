import Contacts from "@/components/Contacts";
import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import SkillsNAchievements from "@/components/SkillsNAchievements";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <SkillsNAchievements />
      <Contacts />
    </div>
  );
}
