'use client';

import React from 'react';
import { motion } from 'motion/react';
import { FolderGit, Puzzle, ShieldCheck, Mic, Lock, Zap, ArrowUpRight } from 'lucide-react';
import { GlassPanel } from './ui/glass-primitives';

interface CapabilityRowProps {
  title: string;
  badge: string;
  voice: string;
  description: string;
  visual: React.ReactNode;
  reversed?: boolean;
}

function CapabilityRow({ title, badge, voice, description, visual, reversed = false }: CapabilityRowProps) {
  const rowVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <motion.div 
      variants={rowVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-15%" }}
      className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center py-16"
    >
      {/* Visual Column */}
      <div className={`md:col-span-6 ${reversed ? 'md:order-last' : ''}`}>
        <GlassPanel className="p-1 border-cyan/10 bg-abyss/40 aspect-video rounded-2xl flex items-center justify-center overflow-hidden group">
          {visual}
        </GlassPanel>
      </div>

      {/* Copy Column */}
      <div className="md:col-span-6 flex flex-col gap-4">
        <span className="text-xs font-mono tracking-widest text-cyan uppercase flex items-center gap-1.5">
          <span className="w-1 h-1 rounded-full bg-cyan" />
          {badge}
        </span>
        
        <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-mist">
          {title}
        </h3>

        <blockquote className="border-l-2 border-cyan/30 pl-4 py-1 italic text-xs text-cyan/70 font-mono tracking-wide">
          &ldquo;{voice}&rdquo;
        </blockquote>

        <p className="text-sm md:text-base text-mist/60 leading-relaxed font-light">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Capabilities() {
  return (
    <section id="products" className="py-24 px-6 max-w-7xl mx-auto border-t border-cyan/5 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
        <span className="text-xs font-mono text-cyan tracking-widest uppercase mb-3">Architectural Pillars</span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-mist to-mist/70">
          The structural mechanics of Photon.
        </h2>
        <p className="text-mist/55 text-sm md:text-base mt-4 font-light max-w-xl leading-relaxed">
          Photon is not designed to simply converse; it is constructed as a persistent, high-capacity computing substrate for heavy workflows.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {/* Capability 1: Projects */}
        <CapabilityRow
          badge="Workspace Context"
          title="Hermetic Workspaces"
          voice="Why we built it: To escape the single-chat loop and allow deep model familiarity with continuous context."
          description="Photon Workspaces group related calculations, files, and code repositories into isolated physical folders. This bounds the attention head projection into highly specific state matrices, preventing conceptual drift and ensuring recall precision over 2M+ token horizons."
          visual={
            <div className="w-full h-full relative bg-void/80 p-6 flex flex-col gap-4 justify-between font-mono text-[11px]">
              {/* Folder structure mockup */}
              <div className="flex justify-between items-center border-b border-cyan/10 pb-2">
                <span className="text-cyan flex items-center gap-1"><FolderGit size={13} /> project-gravity-wells/</span>
                <span className="text-mist/30">ID: prj-920x</span>
              </div>
              <div className="flex-1 flex flex-col gap-2 mt-2">
                <div className="flex items-center justify-between text-mist/60 p-2 rounded-md bg-white/[0.01] border border-white/5">
                  <span className="flex items-center gap-2">📄 tensor_manifold.py</span>
                  <span className="text-cyan/70">42 KB · Linked</span>
                </div>
                <div className="flex items-center justify-between text-mist/60 p-2 rounded-md bg-white/[0.01] border border-white/5">
                  <span className="flex items-center gap-2">📄 boundary_equations.pdf</span>
                  <span className="text-cyan/70">1.2 MB · Linked</span>
                </div>
                <div className="flex items-center justify-between text-cyan/90 p-2 rounded-md bg-cyan/5 border border-cyan/20">
                  <span className="flex items-center gap-2">⚡ active_context_buffer</span>
                  <span className="animate-pulse text-cyan">Syncing...</span>
                </div>
              </div>
              <div className="text-[10px] text-mist/30 text-right">Manifold state: Invariant</div>
            </div>
          }
        />

        {/* Capability 2: Plugins */}
        <CapabilityRow
          badge="Autonomous Integration"
          title="Direct System Tools"
          voice="Why we built it: A language model should not write code it cannot test. We coupled synthesis directly with sandboxed runtime execution."
          description="Photon integrates runtime compilation engines and real-world system interfaces directly into the generation loop. If Photon proposes a mathematical solver, it evaluates the Python code locally inside a sandboxed micro-container, correcting its own syntax errors before presenting the solution."
          reversed
          visual={
            <div className="w-full h-full bg-void/80 p-6 flex flex-col gap-4 font-mono text-[11px]">
              <div className="flex justify-between items-center border-b border-cyan/10 pb-2">
                <span className="text-cyan flex items-center gap-1.5"><Puzzle size={13} /> Runtime Sandbox</span>
                <span className="text-green-400">● COMPILED SUCCESS</span>
              </div>
              <div className="bg-black/40 p-3 rounded-lg border border-white/5 text-[10px] text-mist/70 flex-1 overflow-hidden flex flex-col justify-between">
                <div>
                  <span className="text-mist/30">bash-v5.2$</span> {"python -c \"import scipy; print('Engine online')\""}
                  <div className="text-cyan/90 mt-1">✓ Dependencies mapped. Memory footprint: 12MB.</div>
                </div>
                <div className="border-t border-cyan/5 pt-2 flex items-center gap-2 justify-between">
                  <span className="text-[9px] bg-cyan/10 text-cyan px-1.5 py-0.5 rounded-sm">Tool Node: scipy_solver</span>
                  <span className="text-mist/30">Latency: 4.2ms</span>
                </div>
              </div>
            </div>
          }
        />

        {/* Capability 3: Privacy */}
        <CapabilityRow
          badge="Trust Architecture"
          title="Zero-Retention Infrastructure"
          voice="Why we built it: Privacy should not rely on business terms of service. It must be built into the network topology."
          description="Your conversational vectors are processed in transient RAM blocks that are instantly zeroed out upon session termination. We utilize customized physical key routing that prevents model tuning teams from logging or auditing your calculations. What you solve with Photon is forever yours alone."
          visual={
            <div className="w-full h-full bg-void/80 p-6 flex flex-col gap-4 font-mono text-[11px] justify-between relative">
              <div className="flex justify-between items-center border-b border-cyan/10 pb-2">
                <span className="text-cyan flex items-center gap-1.5"><ShieldCheck size={13} /> Cryptographic Partition</span>
                <span className="text-cyan/60">AES-GCM-256</span>
              </div>
              <div className="flex-1 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-radial from-cyan/[0.04] to-transparent pointer-events-none" />
                <div className="flex flex-col items-center gap-2 text-center z-10">
                  <div className="p-3 bg-cyan/5 border border-cyan/30 rounded-full text-cyan animate-pulse">
                    <Lock size={20} />
                  </div>
                  <span className="text-mist/80 font-semibold tracking-wide">RAM Isolation Mode Active</span>
                  <span className="text-[9px] text-mist/30">Symmetric key expires in 12m 4s</span>
                </div>
              </div>
              <div className="flex justify-between text-[9px] text-mist/30">
                <span>Logs: Disabled</span>
                <span>Audit state: Compliant</span>
              </div>
            </div>
          }
        />

        {/* Capability 4: Voice */}
        <CapabilityRow
          badge="Acoustic Coherence"
          title="Direct Phase Voice Mode"
          voice="Why we built it: Traditional voice assistants transcribe audio first, adding latency and shedding prosody. Photon models waveforms natively."
          description="Photon's native multi-modal structure outputs continuous audio waves directly from high-dimensional representations. This enables real-time acoustic modulation, natural interrupts, and emotionally coherent cadence variations with a pipeline latency of under 120ms."
          reversed
          visual={
            <div className="w-full h-full bg-void/80 p-6 flex flex-col gap-4 font-mono text-[11px] justify-between">
              <div className="flex justify-between items-center border-b border-cyan/10 pb-2">
                <span className="text-cyan flex items-center gap-1.5"><Mic size={13} /> Continuous Phase Stream</span>
                <span className="text-cyan animate-pulse">TRANSMITTING</span>
              </div>
              
              {/* SVG Oscilloscope wave */}
              <div className="flex-1 flex items-center justify-center">
                <svg className="w-full h-16 text-cyan/70" viewBox="0 0 200 40" fill="none">
                  <motion.path
                    d="M 0 20 Q 25 5 50 20 T 100 20 T 150 20 T 200 20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    animate={{
                      d: [
                        "M 0 20 Q 25 5 50 20 T 100 20 T 150 20 T 200 20",
                        "M 0 20 Q 25 35 50 20 T 100 20 T 150 10 T 200 20",
                        "M 0 20 Q 25 5 50 20 T 100 20 T 150 20 T 200 20"
                      ]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.path
                    d="M 0 20 Q 25 30 50 20 T 100 20 T 150 30 T 200 20"
                    stroke="currentColor"
                    strokeWidth="0.8"
                    opacity="0.3"
                    animate={{
                      d: [
                        "M 0 20 Q 25 30 50 20 T 100 20 T 150 30 T 200 20",
                        "M 0 20 Q 25 10 50 20 T 100 20 T 150 5 T 200 20",
                        "M 0 20 Q 25 30 50 20 T 100 20 T 150 30 T 200 20"
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                </svg>
              </div>

              <div className="flex justify-between items-center text-[10px] text-mist/30">
                <span>Phase alignment: True</span>
                <span>Latency: 112ms</span>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}
