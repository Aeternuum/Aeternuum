'use client';

import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, AlertTriangle, ShieldAlert, ArrowRight, FileText } from 'lucide-react';
import { GlassPanel, GlassButton } from './ui/glass-primitives';

interface ResearchCardProps {
  title: string;
  tag: string;
  date: string;
  abstract: string;
  formula: string;
  authors: string;
}

function ResearchCard({ title, tag, date, abstract, formula, authors }: ResearchCardProps) {
  return (
    <GlassPanel className="p-6 bg-abyss/40 border-cyan/10 flex flex-col justify-between h-full group cursor-pointer transition-all">
      <div className="flex flex-col gap-4">
        {/* Pre-header tag & Date */}
        <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-mist/40 uppercase">
          <span className="text-cyan px-2 py-0.5 rounded-md bg-cyan/5 border border-cyan/15">{tag}</span>
          <span>{date}</span>
        </div>

        {/* Paper Title */}
        <h3 className="font-display text-lg md:text-xl font-medium tracking-tight text-mist group-hover:text-cyan transition-colors duration-200">
          {title}
        </h3>

        {/* Authors */}
        <div className="text-xs text-mist/40 font-mono italic">
          Authors: {authors}
        </div>

        {/* Math/Physical Formula Box */}
        <div className="p-3 bg-black/50 border border-white/5 rounded-lg text-center font-mono text-xs text-cyan/70 select-all overflow-x-auto">
          {formula}
        </div>

        {/* Short Abstract */}
        <p className="text-xs md:text-sm text-mist/55 font-light leading-relaxed mt-1">
          {abstract}
        </p>
      </div>

      {/* Action link */}
      <div className="flex items-center gap-1.5 text-xs font-mono text-cyan/80 group-hover:text-cyan mt-6 pt-4 border-t border-cyan/5">
        <FileText size={12} />
        Read full paper
        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </GlassPanel>
  );
}

export default function ResearchSafety() {
  const papers = [
    {
      tag: "Manifold Dynamics",
      date: "May 2026",
      authors: "Aeternuum Research Group (Math Division)",
      title: "Linguistic Geodesics: Mapping Semantic Attraction Paths in Dense Language Spaces",
      formula: "G_{μν} + Λg_{μν} = κ T_{μν}(Semantics)",
      abstract: "We formulate linguistic trajectories as geodesic curves over non-Euclidean manifolds. By setting attention probabilities as potential fields, we solve for absolute convergence bounds in autoregressive state spaces."
    },
    {
      tag: "System Autonomy",
      date: "June 2026",
      authors: "Aeternuum Security & Safety Labs",
      title: "Autonomous Error Recovery Loops in Conversational Code Sandbox Runtimes",
      formula: "δ E_{syntax} \\propto - \\nabla H_{coherence}",
      abstract: "This paper evaluates safety thresholds in autonomous compilation environments. We define the mathematical frameworks that allow models to safely compile proposed code blocks locally without leaking state memory."
    },
    {
      tag: "Neural Quantization",
      date: "July 2026",
      authors: "Hardware Optimization Cohort",
      title: "Quantifying Gradient Entropy Loss in Low-Precision Quantization Pipelines",
      formula: "H_{quant} = - \\sum P(w_q) \\log_2 P(w_q)",
      abstract: "We introduce a novel entropy-compensation layer for 3-bit model quantization. By injecting localized thermodynamic noise during backward propagation, we preserve 99.4% of standard float16 linguistic coherence."
    }
  ];

  return (
    <section id="research" className="py-24 px-6 max-w-7xl mx-auto border-t border-cyan/5 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Editorial Text and Alignment Block */}
        <div className="lg:col-span-4 flex flex-col justify-center gap-6">
          <span className="text-xs font-mono text-cyan tracking-widest uppercase">Academic Ledger</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-b from-mist to-mist/70">
            Publishing our foundations.
          </h2>
          <p className="text-mist/60 text-sm md:text-base font-light leading-relaxed">
            Aeternuum operates as an open-scientific lab. We believe that safe AI systems require fully transparent, verifiable physical equations, not hidden parameters or confidential alignment manuals.
          </p>

          <div className="p-4 rounded-xl bg-cyan/[0.02] border border-cyan/10 flex items-start gap-3 mt-4">
            <BookOpen size={18} className="text-cyan shrink-0 mt-0.5" />
            <div className="text-xs text-mist/60 leading-relaxed">
              <strong className="text-mist block mb-1">Open Access Index</strong>
              All papers, math derivations, and validation datasets are logged in the public indexing registry under a Creative Commons Zero (CC0) open database agreement.
            </div>
          </div>
        </div>

        {/* Right Research Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {papers.map((paper, idx) => (
            <div key={idx} className={idx === 2 ? "md:col-span-2" : ""}>
              <ResearchCard {...paper} />
            </div>
          ))}
        </div>
      </div>

      {/* Safety Policy Section */}
      <div id="policy" className="mt-20">
        <GlassPanel className="p-8 bg-cyan/[0.01] border-cyan/10 relative overflow-hidden">
          {/* Subtle safety glow overlay */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/[0.02] rounded-full blur-[80px] pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            <div className="md:col-span-8 flex flex-col gap-4">
              <span className="text-xs font-mono text-cyan tracking-widest uppercase flex items-center gap-1.5">
                <ShieldAlert size={14} className="text-cyan animate-pulse" />
                Sovereign Trust & Alignment Commitment
              </span>
              <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight text-mist">
                Responsible Deployment Charter v2
              </h3>
              <p className="text-xs md:text-sm text-mist/60 leading-relaxed font-light">
                We assert that conversational agents are mirrors of collective human intellect. As such, Photon maintains strict non-censorship bounds for legal scientific calculation while enforcing strict barriers against biological weapon design, autonomous cybernetics propagation, and direct personal harassment algorithms.
              </p>
            </div>
            
            <div className="md:col-span-4 flex justify-end">
              <a href="#charter" className="w-full md:w-auto">
                <GlassButton variant="secondary" className="w-full md:w-auto text-xs group">
                  Evaluate Safety Policy
                  <ArrowRight size={13} className="text-cyan group-hover:translate-x-1 transition-transform" />
                </GlassButton>
              </a>
            </div>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}
