'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Orbit, BookOpen, ChevronRight } from 'lucide-react';
import { GlassButton, OrbitGlow } from './ui/glass-primitives';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const, // Custom cubic-bezier for responsive rise
      },
    },
  };

  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center items-center px-6 overflow-hidden pt-28">
      {/* Background Orbit Trails */}
      <OrbitGlow />

      {/* Floating Particle Blur Accents for Atmosphere */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-cyan/5 rounded-full blur-[100px] pointer-events-none animate-subtle-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan/[0.03] rounded-full blur-[120px] pointer-events-none animate-subtle-pulse" style={{ animationDelay: '3s' }} />

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Subtle pre-header tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/5 border border-cyan/15 text-xs tracking-widest text-cyan uppercase mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
          The Physics of Intelligence
        </motion.div>

        {/* Hero Mission Statement */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          <motion.h1 
            variants={itemVariants}
            className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-mist via-mist to-mist/70 leading-[1.1] max-w-3xl"
          >
            We model language as a physical system.
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-mist/60 max-w-2xl font-light leading-relaxed tracking-wide"
          >
            Aeternuum is an independent research collective. We build Photon — an advanced, high-fidelity conversational substrate designed to think through physical dimensions of intelligence.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto"
          >
            <a href="#photon-intro" className="w-full sm:w-auto">
              <GlassButton variant="primary" className="w-full sm:w-auto group">
                Meet Photon
                <Orbit size={16} className="text-void group-hover:rotate-180 transition-transform duration-500" />
              </GlassButton>
            </a>
            <a href="#research" className="w-full sm:w-auto">
              <GlassButton variant="secondary" className="w-full sm:w-auto group">
                Read our research
                <ChevronRight size={14} className="text-mist/50 group-hover:translate-x-1 transition-transform" />
              </GlassButton>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Elegant, slow scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        onClick={() => document.getElementById('photon-intro')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] tracking-widest font-mono uppercase text-mist/40 hover:text-cyan/80 transition-colors">
          Explore Aeternuum
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} className="text-cyan/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
