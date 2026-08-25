import SEO from "../components/SEO";
import PageTransition from "../components/PageTransition";
import HeroSection from "../sections/HeroSection";
import TrustSection from "../sections/TrustSection";
import ServicesSection from "../sections/ServicesSection";
import FeaturedWork from "../sections/FeaturedWork";
import ProcessSection from "../sections/ProcessSection";
import TechSection from "../sections/TechSection";
import WhyElevi8 from "../sections/WhyElevi8";
import TestimonialsSection from "../sections/TestimonialsSection";
import CTASection from "../sections/CTASection";

export default function Home() {
  return (
    <PageTransition>
      <SEO />
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <FeaturedWork />
      <ProcessSection />
      <TechSection />
      <WhyElevi8 />
      <TestimonialsSection />
      <CTASection />
    </PageTransition>
  );
}
