'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Copy, Check, Code, Play, ArrowUpRight, Cpu } from 'lucide-react';
import { GlassPanel, GlassButton } from './ui/glass-primitives';

type Language = 'python' | 'typescript' | 'curl';

interface CodeSnippet {
  code: string;
  langLabel: string;
}

const CODE_TEMPLATES: Record<Language, CodeSnippet> = {
  python: {
    langLabel: "photon_stream.py",
    code: `import aeternuum as aet

# Establish quantum state channel
client = aet.PhotonClient(
    api_key=aet.load_env("GEMINI_API_KEY")
)

# Stream direct physical linguistic coherence
stream = client.compositions.create(
    model="photon-2.4-flash",
    prompt="Calculate linguistic geodesics for semantic matrices.",
    stream=True
)

for pulse in stream:
    print(pulse.coherence_wave, end="")`
  },
  typescript: {
    langLabel: "photon-stream.ts",
    code: `import { Aeternuum } from "@aeternuum/sdk";

// Initialize low-latency agent client
const client = new Aeternuum({
  apiKey: process.env.GEMINI_API_KEY
});

// Stream real-time linguistic waveform
const response = await client.compositions.stream({
  model: "photon-2.4-flash",
  prompt: "Model temperature decay coefficient for entropy vectors.",
  grounding: "physical"
});

for await (const chunk of response) {
  process.stdout.write(chunk.content);
} `
  },
  curl: {
    langLabel: "request.sh",
    code: `curl -X POST "https://api.aeternuum.run/v2/compositions" \\
  -H "Authorization: Bearer $GEMINI_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "photon-2.4-flash",
    "prompt": "Explain continuous wave acoustic coherence equations.",
    "stream": true,
    "temperature_scale": "thermodynamic"
  }'`
  }
};

export default function DevTeaser() {
  const [activeLang, setActiveLang] = useState<Language>('python');
  const [isCopied, setIsCopied] = useState(false);

  const copyCode = () => {
    const codeText = CODE_TEMPLATES[activeLang].code;
    navigator.clipboard.writeText(codeText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="developers" className="py-24 px-6 max-w-7xl mx-auto border-t border-cyan/5 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Copy and Stats */}
        <div className="lg:col-span-5 flex flex-col justify-center gap-6">
          <span className="text-xs font-mono text-cyan tracking-widest uppercase flex items-center gap-1.5">
            <Code size={14} />
            Aeternuum SDK & API
          </span>

          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-b from-mist to-mist/70">
            Engineered for computational depth.
          </h2>

          <p className="text-mist/60 text-sm md:text-base font-light leading-relaxed">
            Every feature available in the Photon client is accessible via our developer API. Hook directly into low-latency inference, physical groundings, sandboxed compilations, and phase-synchronized voice models with standard REST or WebSocket channels.
          </p>

          {/* Dev metrics */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5">
              <span className="text-xs text-mist/40 block font-mono">LATENCY</span>
              <span className="text-xl font-display font-medium text-cyan">&lt; 120ms</span>
              <span className="text-[10px] text-mist/30 block mt-1">Global edge delivery</span>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5">
              <span className="text-xs text-mist/40 block font-mono">AVAILABILITY</span>
              <span className="text-xl font-display font-medium text-cyan">99.99%</span>
              <span className="text-[10px] text-mist/30 block mt-1">Guaranteed uptime SLA</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a href="#docs" className="w-full sm:w-auto">
              <GlassButton variant="primary" className="w-full sm:w-auto">
                Read API Docs
                <ArrowUpRight size={14} className="text-void" />
              </GlassButton>
            </a>
            <a href="#console" className="w-full sm:w-auto">
              <GlassButton variant="secondary" className="w-full sm:w-auto">
                Create Account
              </GlassButton>
            </a>
          </div>
        </div>

        {/* Right Side: Interactive Terminal & Snippet */}
        <div className="lg:col-span-7 w-full">
          <GlassPanel className="p-0 border-cyan/10 overflow-hidden shadow-xl">
            {/* Terminal Tab Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-abyss/85 border-b border-cyan/10">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500/40" />
                <span className="w-2 h-2 rounded-full bg-yellow-500/40" />
                <span className="w-2 h-2 rounded-full bg-green-500/40" />
                <span className="text-xs font-mono text-mist/40 ml-2">SDK Pipeline</span>
              </div>

              {/* Language Selector Tabs */}
              <div className="flex gap-1 bg-void/50 border border-white/5 p-1 rounded-lg">
                {(['python', 'typescript', 'curl'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setActiveLang(lang)}
                    className={`px-3 py-1 text-[10px] font-mono rounded-md transition-all uppercase cursor-pointer ${
                      activeLang === lang
                        ? 'bg-cyan/10 border border-cyan/20 text-cyan font-bold'
                        : 'text-mist/40 hover:text-mist/70 border border-transparent'
                    }`}
                  >
                    {lang === 'typescript' ? 'TS / Node' : lang}
                  </button>
                ))}
              </div>
            </div>

            {/* Terminal Window Body */}
            <div className="relative bg-void/90 p-5 font-mono text-xs text-mist/90 overflow-x-auto min-h-[280px]">
              {/* Copy Code Button */}
              <button
                onClick={copyCode}
                className="absolute top-4 right-4 p-2 rounded-md bg-white/[0.02] border border-white/5 hover:border-cyan/30 text-mist/40 hover:text-cyan transition-colors cursor-pointer"
                title="Copy code to clipboard"
              >
                {isCopied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
              </button>

              <div className="text-[10px] text-cyan/50 mb-3 border-b border-cyan/5 pb-1 flex items-center gap-1.5">
                <Terminal size={12} />
                {CODE_TEMPLATES[activeLang].langLabel}
              </div>

              <AnimatePresence mode="wait">
                <motion.pre
                  key={activeLang}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.15 }}
                  className="leading-relaxed select-all"
                >
                  <code>
                    {CODE_TEMPLATES[activeLang].code.split('\n').map((line, idx) => (
                      <span key={idx} className="table-row">
                        <span className="table-cell pr-4 text-mist/20 text-right select-none w-6">{idx + 1}</span>
                        <span className="table-cell">{line}</span>
                      </span>
                    ))}
                  </code>
                </motion.pre>
              </AnimatePresence>
            </div>

            {/* Mini Output Tray */}
            <div className="px-5 py-3.5 bg-abyss/85 border-t border-cyan/10 flex items-center justify-between text-[11px] font-mono text-mist/40">
              <span className="flex items-center gap-1.5 text-cyan/70">
                <Play size={10} className="fill-current" /> Ready to instantiate
              </span>
              <span>v2.4.0-stable</span>
            </div>
          </GlassPanel>
        </div>

      </div>
    </section>
  );
}
