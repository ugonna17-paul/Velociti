"use client";

import { HeroSection, GlobalStyles } from "@/components/HeroSection";
import { TickerBar } from "@/components/TickerBar";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorks } from "@/components/HowItWorks";
import { MarketplaceSection } from "@/components/MarketplaceSection";
import { CinematicSection } from "@/components/CinematicSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <HeroSection />
      <TickerBar />
      <FeaturesSection />
      <HowItWorks />
      <MarketplaceSection />
      <CinematicSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </>
  );
}
