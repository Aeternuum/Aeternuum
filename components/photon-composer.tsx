'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Sparkles, Terminal, Shield, Cpu, RefreshCw, Layers } from 'lucide-react';
import { GlassPanel, GlassButton } from './ui/glass-primitives';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  thought?: string;
}

const PRESET_PROMPTS = [
  {
    title: "Entropy Decay",
    short: "Model entropy decay in sampling",
    prompt: "Model the entropy decay in autoregressive sampling when applying temperature-scaling curves. Provide the core physical equations.",
    response: {
      thought: "Analyzing the transition probability distribution in autoregressive sampling. Formulating the partition function Z(T) as an analog to thermodynamic states. Resolving the Shannon entropy derivative with respect to temperature T.",
      content: `In autoregressive generation, scaling the logits by temperature T acts as a thermodynamic scaling factor on the probability state space:

  P(x_i) = e^(z_i / T) / Σ e^(z_j / T)

### Thermodynamic Entropy Decay
As temperature T → 0, the system undergoes a phase transition into a localized ground state:

1. High T (T > 1.0): High-entropy state where selection probabilities are uniformly distributed, mimicking gaseous diffusion.
2. Critical T (T ≈ 0.7): The state space contracts. Sub-optimal branches collapse into zero-probability manifolds.
3. Low T (T → 0): Dirac-delta distribution at max(z_i), representing a crystalline lattice with zero informational entropy.

The rate of entropy decay is governed by the derivative of the partition function, demonstrating that temperature is a direct controller of cognitive cooling in language generation.`
    }
  },
  {
    title: "Cognitive Resonance",
    short: "Language as a gravity well",
    prompt: "Explain how language representation maps to gravitational potential wells in high-dimensional manifolds.",
    response: {
      thought: "Mapping semantic cluster density to structural geodesics. Expressing dense semantic vectors as masses warping the local metric tensor. Defining attention vectors as orbital paths.",
      content: `When high-dimensional semantic vectors are projected into a metric space, dense cluster spaces behave analogously to gravitational potential wells:

         Dense Cluster (Semantic Attractor)
===================   ====================
                   \\ /
                    v   <- Geodesic Warping
                    |
          [Emergent Concept Node]

* Attraction Metrics: Query-key dot products (Q K^T) define the metric tensor of the manifold. Words orbit semantic centers along geodesics calculated by attention heads.
* Decay Fields: As semantic distance increases, the context-window gravitational pull decays following a power-law scale rather than standard Euclidean fields.
* Cognitive Event Horizons: When an AI converges on a highly localized theme, the generative path becomes tightly locked inside the potential well, requiring stochastic temperature kicks to escape.`
    }
  },
  {
    title: "Acoustic Coherence",
    short: "Acoustic voice synthesis sync",
    prompt: "Define the equations for continuous acoustic coherence in real-time latency-bound speech generation.",
    response: {
      thought: "Evaluating phase-alignment across audio frames. Optimizing overlap-add synthesis equations under 20ms pipeline latency. Harmonizing generative wavetable frequencies.",
      content: `To prevent frame boundary clicks in real-time, streaming audio synthesis, we enforce Acoustic Phase Coherence (APC). This is modeled as:

  Φ_sync = ∫ | Ψ_A(t) - Ψ_B(t) |^2 dt → 0 (from t_0 to t_1)

Where Ψ_A and Ψ_B represent the boundary-adjacent waveform fields.

### Coherence Pipeline
1. Spectrogram Grounding: Generate phase-aligned spectrogram frames from hidden state vectors.
2. Dynamic Overlap-Add: Interpolate frame intersections dynamically based on local pitch frequencies.
3. Low-Latency Synthesis: Stream audio frames to client buffers within 12ms chunks to avoid audio buffer underruns.`
    }
  }
];

export default function PhotonComposer() {
  const [activePreset, setActivePreset] = useState<number | null>(null);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Welcome to Photon. Select one of the physical computation vectors below or input a custom query to evaluate the substrate's response dynamics."
    }
  ]);
  const [currentThought, setCurrentThought] = useState<string | null>(null);
  const [streamedContent, setStreamedContent] = useState('');

  const triggerPreset = (index: number) => {
    if (isTyping) return;
    setActivePreset(index);
    const preset = PRESET_PROMPTS[index];
    setInputText(preset.prompt);

    // Append user message immediately
    const userMsg: Message = { role: 'user', content: preset.prompt };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);
    setStreamedContent('');
    setCurrentThought('');

    // Step 1: Simulate thinking
    let thoughtText = preset.response.thought;
    let thoughtIdx = 0;
    const thoughtInterval = setInterval(() => {
      if (thoughtIdx < thoughtText.length) {
        setCurrentThought(prev => (prev || '') + thoughtText[thoughtIdx]);
        thoughtIdx += 2; // Speeds up the typing
      } else {
        clearInterval(thoughtInterval);
        
        // Step 2: Stream actual output response
        let contentText = preset.response.content;
        let contentIdx = 0;
        const contentInterval = setInterval(() => {
          if (contentIdx < contentText.length) {
            setStreamedContent(prev => prev + contentText.substring(contentIdx, contentIdx + 4));
            contentIdx += 4;
          } else {
            clearInterval(contentInterval);
            // Complete state
            setMessages(prev => [
              ...prev,
              {
                role: 'assistant',
                content: contentText,
                thought: thoughtText
              }
            ]);
            setIsTyping(false);
            setCurrentThought(null);
            setStreamedContent('');
          }
        }, 15);
      }
    }, 10);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || isTyping) return;

    const userPrompt = inputText;
    setMessages(prev => [...prev, { role: 'user', content: userPrompt }]);
    setInputText('');
    setIsTyping(true);
    setStreamedContent('');
    setCurrentThought('Synthesizing physical grounding matrices...');

    // Custom response simulation
    setTimeout(() => {
      setCurrentThought('Parsing linguistic tokens onto metric coordinate tensors...');
      setTimeout(() => {
        let contentText = `Evaluated: "${userPrompt}". \n\nPhoton has successfully processed this physical query. Our models map language onto non-Euclidean state-space coordinates, where conceptual vectors interact according to mathematical potentials rather than simple probability maps. \n\n*   **State Alignment:** 100% Coherent\n*   **Grounding Confidence:** 99.8% \n*   **Calculated Invariance:** $I = \\oint_C \\mathbf{T} \\cdot d\\mathbf{r}$`;
        let contentIdx = 0;
        setCurrentThought(null);
        const customInterval = setInterval(() => {
          if (contentIdx < contentText.length) {
            setStreamedContent(prev => prev + contentText.substring(contentIdx, contentIdx + 3));
            contentIdx += 3;
          } else {
            clearInterval(customInterval);
            setMessages(prev => [
              ...prev,
              {
                role: 'assistant',
                content: contentText,
                thought: 'Linguistic state projection completed.'
              }
            ]);
            setIsTyping(false);
            setStreamedContent('');
          }
        }, 12);
      }, 1000);
    }, 1200);
  };

  const resetChat = () => {
    setMessages([
      {
        role: 'assistant',
        content: "Welcome to Photon. Select one of the physical computation vectors below or input a custom query to evaluate the substrate's response dynamics."
      }
    ]);
    setInputText('');
    setIsTyping(false);
    setCurrentThought(null);
    setStreamedContent('');
    setActivePreset(null);
  };

  return (
    <section id="photon-intro" className="relative py-24 px-6 max-w-7xl mx-auto z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left side info block */}
        <div className="lg:col-span-5 flex flex-col justify-center gap-6">
          <div className="inline-flex items-center gap-1 text-cyan text-xs font-mono tracking-widest uppercase">
            <Sparkles size={14} />
            Linguistic Engine
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-b from-mist to-mist/80">
            Photon is the interface to the physical layer.
          </h2>

          <p className="text-mist/60 text-base md:text-lg font-light leading-relaxed">
            While others build standard text generators, Aeternuum treats language representations as deep potential fields. Photon is our primary workspace: an immersive, responsive composer designed for heavy technical inquiry, systemic coding, and dense workflow structures.
          </p>

          <div className="flex flex-col gap-4 py-2">
            <div className="flex gap-3 items-start">
              <div className="p-2 rounded-lg bg-cyan/5 border border-cyan/10 mt-1">
                <Shield size={16} className="text-cyan" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-mist">Zero-Retention Confidentiality</h4>
                <p className="text-xs text-text-muted mt-0.5">Your calculations remain entirely your own. Zero telemetry storage.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="p-2 rounded-lg bg-cyan/5 border border-cyan/10 mt-1">
                <Cpu size={16} className="text-cyan" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-mist">Physical Coherence Engines</h4>
                <p className="text-xs text-text-muted mt-0.5">Grounding outputs using mathematical models rather than raw pattern matching.</p>
              </div>
            </div>
          </div>

          <div className="mt-2">
            <a href="#try-photon">
              <GlassButton variant="primary">Try Photon Now</GlassButton>
            </a>
          </div>
        </div>

        {/* Right side: High-Fidelity Interactive Composer Simulator */}
        <div className="lg:col-span-7 w-full">
          <GlassPanel className="p-0 border-cyan/10 overflow-hidden shadow-2xl relative">
            {/* Top Composer Bar */}
            <div className="flex items-center justify-between border-b border-cyan/10 px-5 py-3.5 bg-abyss/80">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                </div>
                <span className="text-xs font-mono text-mist/40 ml-2">photon-composer-v2.4.9</span>
              </div>
              <div className="flex items-center gap-3">
                <button 
                  onClick={resetChat} 
                  className="p-1 rounded-md hover:bg-white/5 text-mist/40 hover:text-cyan transition-colors"
                  title="Reset conversation"
                >
                  <RefreshCw size={13} />
                </button>
                <div className="flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 bg-cyan/5 border border-cyan/20 text-cyan rounded-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
                  ACTIVE SUBSTRATE
                </div>
              </div>
            </div>

            {/* Composer Sub-navigation */}
            <div className="flex items-center gap-6 px-5 py-2.5 bg-void/50 border-b border-cyan/5 text-xs font-mono text-mist/40">
              <span className="text-cyan flex items-center gap-1.5 border-b border-cyan/80 pb-1 cursor-pointer">
                <Terminal size={12} /> Live Workspace
              </span>
              <span className="hover:text-mist/70 cursor-pointer transition-colors pb-1 flex items-center gap-1.5">
                <Layers size={12} /> Quantum Layer
              </span>
              <span className="hover:text-mist/70 cursor-pointer transition-colors pb-1 ml-auto">
                COHERENCE: 99.98%
              </span>
            </div>

            {/* Chat message display area */}
            <div className="h-[360px] overflow-y-auto px-5 py-4 flex flex-col gap-4 font-sans text-sm scroll-smooth">
              {messages.map((msg, i) => (
                <div key={i} className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-mono tracking-widest uppercase ${msg.role === 'user' ? 'text-cyan' : 'text-mist/40'}`}>
                      {msg.role === 'user' ? '// USER' : '// PHOTON'}
                    </span>
                  </div>
                  <div className={`p-4 rounded-xl ${msg.role === 'user' ? 'bg-cyan/5 border border-cyan/15 ml-4' : 'bg-white/[0.01] border border-white/[0.03] mr-4'}`}>
                    {msg.thought && (
                      <div className="mb-3 font-mono text-xs text-cyan/60 border-l border-cyan/30 pl-3 py-1 bg-cyan/[0.01]">
                        <span className="text-cyan/80 text-[10px] font-bold block uppercase tracking-wider mb-0.5">Reasoning Log:</span>
                        {msg.thought}
                      </div>
                    )}
                    <div className="whitespace-pre-line leading-relaxed text-mist/90 prose prose-invert prose-sm max-w-none">
                      {msg.content}
                    </div>
                  </div>
                </div>
              ))}

              {/* Streaming Content Simulator */}
              {(currentThought || streamedContent) && (
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-cyan animate-pulse">{"// PHOTON COMPUTATION IN PROGRESS"}</span>
                  <div className="p-4 rounded-xl bg-cyan/[0.01] border border-cyan/10 mr-4">
                    {currentThought && (
                      <div className="font-mono text-xs text-cyan/70 border-l border-cyan/40 pl-3 py-1 animate-pulse mb-2">
                        <span className="text-cyan/90 text-[10px] font-bold block uppercase tracking-wider mb-0.5">Synthesizing Coherence Path:</span>
                        {currentThought}
                        <span className="inline-block w-1.5 h-3 bg-cyan ml-1 animate-bounce" />
                      </div>
                    )}
                    {streamedContent && (
                      <div className="whitespace-pre-line leading-relaxed text-mist/90 prose prose-invert prose-sm max-w-none">
                        {streamedContent}
                        <span className="inline-block w-1.5 h-3.5 bg-cyan ml-0.5 animate-pulse" />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Presets suggestions bar */}
            <div className="px-5 py-3 border-t border-cyan/5 bg-void/30">
              <span className="text-[10px] font-mono tracking-wider text-mist/30 block mb-2 uppercase">Linguistic vectors (click to compute):</span>
              <div className="flex flex-wrap gap-2">
                {PRESET_PROMPTS.map((preset, i) => (
                  <button
                    key={i}
                    onClick={() => triggerPreset(i)}
                    disabled={isTyping}
                    className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition-all duration-200 cursor-pointer ${
                      activePreset === i
                        ? 'bg-cyan/10 border-cyan text-cyan'
                        : 'bg-white/[0.02] border-white/5 text-mist/50 hover:border-cyan/30 hover:text-mist/80'
                    }`}
                  >
                    {preset.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Input Area */}
            <form onSubmit={handleCustomSubmit} className="p-4 bg-abyss/90 border-t border-cyan/10 flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={isTyping ? "Photon is currently formulating..." : "Compose a custom physical linguistic coordinate..."}
                disabled={isTyping}
                className="flex-1 bg-void/60 border border-cyan/10 rounded-xl px-4 py-3 text-sm text-mist placeholder-mist/30 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/20 transition-all font-mono"
              />
              <GlassButton
                type="submit"
                variant="primary"
                disabled={isTyping || !inputText.trim()}
                className="px-4 py-3 rounded-xl disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <Send size={16} className="text-void" />
              </GlassButton>
            </form>
          </GlassPanel>
        </div>
      </div>
    </section>
  );
}
