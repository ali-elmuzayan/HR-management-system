import AnimationBackground from "@/components/home/AnimationBackground";
import Navigation from "@/components/home/layout/Navigation";
import HeroSection from "@/components/home/sections/HeroSection";
import FeatureSection from "@/components/home/sections/FeatureSection";
import TestimonialsSection from "@/components/home/sections/TestimonialsSection";
import PricingSection from "@/components/home/sections/PricingSection";
import CTASection from "@/components/home/sections/CTASection";
import Footer from "@/components/home/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Animation Background */}
      <AnimationBackground />
      {/* Navigation */}
      <Navigation />

      {/* Sections */}
      <HeroSection />
      <FeatureSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      {/* Footer */}
      <Footer />
      <div> Hi everyone</div>
    </div>
  );
};

export default Home;
