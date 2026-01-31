import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { OpenSource } from "@/components/OpenSource";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Timeline />
      <OpenSource />
      <ProjectGrid />
      <Footer />
    </main>
  );
}