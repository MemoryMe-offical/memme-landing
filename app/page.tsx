import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import Features from "@/components/Features";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <FeatureSection />
      <Features />
      <Team />
      <CTA />
      <Footer />
    </main>
  );
}
