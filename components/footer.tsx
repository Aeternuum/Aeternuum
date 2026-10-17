'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Orbit, ChevronDown, Sparkles } from 'lucide-react';
import { GlassPanel, GlassButton } from './ui/glass-primitives';
import { cn } from '@/lib/utils';

interface FooterGroup {
  title: string;
  links: { label: string; href: string }[];
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [expandedMobileGroup, setExpandedMobileGroup] = useState<string | null>(null);

  const toggleMobileGroup = (title: string) => {
    setExpandedMobileGroup(expandedMobileGroup === title ? null : title);
  };

  const footerGroups: FooterGroup[] = [
    // Row 1
    {
      title: "Products",
      links: [
        { label: "Photon", href: "#photon-intro" },
        { label: "Pricing", href: "#pricing" },
        { label: "Release notes", href: "#release-notes" },
        { label: "Log in to Photon", href: "#login" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#about" },
        { label: "Careers", href: "#careers" },
        { label: "News", href: "#news" },
        { label: "Policy", href: "#policy" }
      ]
    },
    {
      title: "API Platform",
      links: [
        { label: "Overview", href: "#overview" },
        { label: "Docs", href: "#docs" },
        { label: "Console log in", href: "#console" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "#blog" },
        { label: "Community", href: "#community" },
        { label: "Events", href: "#events" }
      ]
    },
    // Row 2
    {
      title: "Help",
      links: [
        { label: "Support center", href: "#support" },
        { label: "Security", href: "#security" },
        { label: "Status", href: "#status" },
        { label: "Availability", href: "#availability" }
      ]
    },
    {
      title: "Developers",
      links: [
        { label: "Developer forum", href: "#forum" },
        { label: "Developer docs", href: "#docs" },
        { label: "Resources", href: "#dev-resources" }
      ]
    },
    {
      title: "Terms and Policies",
      links: [
        { label: "Terms of service", href: "#terms" },
        { label: "Privacy policy", href: "#privacy" },
        { label: "Usage policy", href: "#usage" },
        { label: "Cookie policy", href: "#cookie" }
      ]
    },
    {
      title: "Research",
      links: [
        { label: "Research index", href: "#research" },
        { label: "Research overview", href: "#research-overview" }
      ]
    }
  ];

  return (
    <footer className="relative mt-20 border-t border-cyan/5">
      
      {/* 7. Closing CTA Band */}
      <div id="try-photon" className="py-24 px-6 max-w-7xl mx-auto z-10 relative">
        <GlassPanel className="p-12 bg-gradient-to-r from-cyan/[0.01] via-cyan/[0.03] to-transparent border-cyan/10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden text-center md:text-left relative">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan/[0.02] rounded-full blur-[100px] pointer-events-none" />
          
          <div className="flex flex-col gap-3 relative z-10">
            <span className="text-xs font-mono text-cyan tracking-widest uppercase flex items-center gap-1.5 justify-center md:justify-start">
              <Sparkles size={13} />
              Evaluation Portal
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-mist">
              Synthesize coherence. Engage Photon.
            </h3>
            <p className="text-xs md:text-sm text-mist/55 font-light max-w-xl">
              Create a sandbox, instantiate physical manifolds, and experience high-fidelity calculations.
            </p>
          </div>

          <div className="relative z-10 shrink-0 w-full md:w-auto">
            <a href="#login" className="w-full block">
              <GlassButton variant="primary" className="w-full md:w-auto px-8 py-4 text-base group">
                Try Photon
                <Orbit size={18} className="text-void group-hover:rotate-180 transition-transform duration-500" />
              </GlassButton>
            </a>
          </div>
        </GlassPanel>
      </div>

      {/* 8. Main Footer Links Columns */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-t border-cyan/5">
        
        {/* Desktop Grid Layout (4 columns x 2 rows) */}
        <div className="hidden md:grid grid-cols-4 gap-x-8 gap-y-12">
          {footerGroups.map((group) => (
            <div key={group.title} className="flex flex-col gap-4">
              <h4 className="text-xs font-mono font-semibold text-cyan tracking-widest uppercase">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-mist/55 hover:text-cyan transition-colors font-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile Accordion Stack Layout */}
        <div className="md:hidden flex flex-col gap-1">
          {footerGroups.map((group) => (
            <div key={group.title} className="border-b border-cyan/5">
              <button
                onClick={() => toggleMobileGroup(group.title)}
                className="w-full py-4 flex items-center justify-between text-xs font-mono font-semibold text-cyan tracking-wider uppercase text-left outline-none"
              >
                <span>{group.title}</span>
                <ChevronDown
                  size={14}
                  className={cn(
                    "transition-transform duration-200",
                    expandedMobileGroup === group.title && "rotate-180 text-cyan"
                  )}
                />
              </button>
              
              <AnimatePresence>
                {expandedMobileGroup === group.title && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <ul className="flex flex-col gap-3 pb-4 pl-2">
                      {group.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="text-xs text-mist/60 hover:text-cyan transition-colors"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-16 pt-8 border-t border-cyan/5">
          
          {/* Bottom-left: Social brand glyphs */}
          <div className="flex items-center gap-6" aria-label="Social media directories">
            
            {/* X (formerly Twitter) logo */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mist/40 hover:text-cyan hover:drop-shadow-[0_0_8px_rgba(56,232,255,0.4)] transition-all duration-150"
              aria-label="Aeternuum on X"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* YouTube logo */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mist/40 hover:text-cyan hover:drop-shadow-[0_0_8px_rgba(56,232,255,0.4)] transition-all duration-150"
              aria-label="Aeternuum on YouTube"
            >
              <svg className="w-5.5 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* GitHub logo */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mist/40 hover:text-cyan hover:drop-shadow-[0_0_8px_rgba(56,232,255,0.4)] transition-all duration-150"
              aria-label="Aeternuum on GitHub"
            >
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.27.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>

          </div>

          {/* Bottom-right: Copyright */}
          <div className="text-xs text-mist/40 font-mono tracking-wide">
            &copy; {currentYear} Aeternuum. All rights reserved.
          </div>

        </div>

      </div>
    </footer>
  );
}
