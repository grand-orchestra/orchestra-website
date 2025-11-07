import HeroCarousel from "@/components/hero-carousel";
import ConcertsSection from "@/components/concerts-section";
import AboutSection from "@/components/about-section";
import InstrumentsPreview from "@/components/instruments-preview";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      {/* <ConcertsSection /> */}
      <AboutSection />
      <InstrumentsPreview />
    </>
  );
}
