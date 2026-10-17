import React from 'react';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import PhotonComposer from '@/components/photon-composer';
import Capabilities from '@/components/capabilities';
import ResearchSafety from '@/components/research-safety';
import DevTeaser from '@/components/dev-teaser';
import NewsStrip from '@/components/news-strip';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-void text-mist relative selection:bg-cyan/30 selection:text-white overflow-hidden">
      {/* 
        Aesthetic Atmospheric Accents 
        We use ultra-wide slow pulsing light blur rings to establish "Glassmorphism 2.0"
      */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-radial from-cyan/[0.04] via-transparent to-transparent blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[2500px] right-0 w-[500px] h-[500px] bg-cyan/[0.02] rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan/[0.03] rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Structured Nav Bar */}
      <Navbar />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Photon Composer Live Demonstration */}
      <PhotonComposer />

      {/* 3. Capability Showcase Section */}
      <Capabilities />

      {/* 4. Research & Safety Section */}
      <ResearchSafety />

      {/* 5. Developer Platform Teaser Section */}
      <DevTeaser />

      {/* 6. News Bulletin Strip Section */}
      <NewsStrip />

      {/* 7 & 8. Closing CTA and Structural Columns Footer */}
      <Footer />
    </main>
  );
}
