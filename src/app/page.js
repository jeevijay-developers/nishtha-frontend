import Contacts from "@/components/Contacts";
import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import SkillsNAchievements from "@/components/SkillsNAchievements";
import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <div>
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <SkillsNAchievements />
      </div>
      <div id="projects">
        <Projects />
      </div>
      
      <div id="contact">
        <Contacts />
      </div>
    </div>
  );
}
