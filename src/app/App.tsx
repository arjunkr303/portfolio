import { Navbar } from "@/app/components/Navbar";
import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Skills } from "@/app/components/Skills";
import { Projects } from "@/app/components/Projects";
import { Resources } from "@/app/components/Resources";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";
import { CustomCursor } from "@/app/components/CustomCursor";
import { ThemeToggle } from "@/app/components/ThemeToggle";
import { GridBackground } from "@/app/components/GridBackground";
import { Toaster } from "@/app/components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      <GridBackground />
      <CustomCursor />
      <ThemeToggle />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resources />
      <Contact />
      <Footer />
      <Toaster theme="dark" />
    </div>
  );
}



