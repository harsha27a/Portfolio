import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen text-plum bg-hero-glow w-full max-w-[100vw]">
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certificates />
      </main>
      <Footer />
    </div>
  );
}
