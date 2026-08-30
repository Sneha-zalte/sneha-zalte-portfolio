import { Ambient } from "@/components/Ambient";
import { Scene3D } from "@/components/Scene3D";
import { FuturisticCursor } from "@/components/FuturisticCursor";
import { BootIntro } from "@/components/BootIntro";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <BootIntro />
      <FuturisticCursor />
      <Ambient />
      <Scene3D />
      <Navbar />
      <main className="relative z-10 mx-auto w-[min(1120px,92%)]">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
