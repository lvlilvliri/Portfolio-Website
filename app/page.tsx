import {
  AboutAndSkills,
  Contact,
  Experience,
  HeroSection,
  Projects,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="space-y-32">
      <HeroSection />
      <AboutAndSkills />
      {/* <Experience /> */}
      <Projects />
      <Contact />
    </div>
  );
}
