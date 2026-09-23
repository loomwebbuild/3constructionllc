import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import InteractiveEstimator from '@/components/InteractiveEstimator';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import ProcessTimeline from '@/components/ProcessTimeline';
import ProjectsGallery from '@/components/ProjectsGallery';
import FleetAndEquipment from '@/components/FleetAndEquipment';
import ServiceAreaMap from '@/components/ServiceAreaMap';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import ContactQuoteSection from '@/components/ContactQuoteSection';
import Footer from '@/components/Footer';
import QuickCallSticky from '@/components/QuickCallSticky';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col selection:bg-amber-500 selection:text-neutral-950">
      <Navbar />
      <Hero />
      <ServicesSection />
      <InteractiveEstimator />
      <BeforeAfterSlider />
      <ProcessTimeline />
      <ProjectsGallery />
      <FleetAndEquipment />
      <ServiceAreaMap />
      <TestimonialsSection />
      <FAQSection />
      <ContactQuoteSection />
      <Footer />
      <QuickCallSticky />
    </main>
  );
}
