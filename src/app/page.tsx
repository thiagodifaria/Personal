import { HeroSection } from "@/components/sections/HeroSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ConnectSection } from "@/components/sections/ConnectSection";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <IntroSection />
      <ProjectsSection />
      <ConnectSection />
    </main>
  );
}
