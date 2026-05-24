import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VisionMission from "@/components/VisionMission";
import PrincipalMessage from "@/components/PrincipalMessage";
import Academics from "@/components/Academics";
import Facilities from "@/components/Facilities";
import Faculty from "@/components/Faculty";
import Gallery from "@/components/Gallery";
import News from "@/components/News";
import Admissions from "@/components/Admissions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <VisionMission />
      <PrincipalMessage />
      <Academics />
      <Facilities />
      <Faculty />
      <Gallery />
      <News />
      <Admissions />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
