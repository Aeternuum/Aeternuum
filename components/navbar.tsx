'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { GlassButton } from './ui/glass-primitives';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isMobileCompanyOpen, setIsMobileCompanyOpen] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Monitor scroll for condensing navbar height
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle outside click to close Company dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCompanyDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard ESC key to close dropdown
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsCompanyDropdownOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const companyLinks = [
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Careers', href: '#careers' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'py-3 bg-void/85 border-b border-cyan/20 shadow-lg shadow-black/40 backdrop-blur-xl'
          : 'py-6 bg-transparent border-b border-transparent backdrop-blur-xs'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Left: Typographic Lockup */}
        <Link href="/" className="flex items-center gap-2 group outline-none" aria-label="Aeternuum Homepage">
          <span className="font-display text-xl md:text-2xl tracking-widest text-mist uppercase font-semibold transition-colors duration-200 group-hover:text-cyan">
            Aeternuum
          </span>
        </Link>

        {/* Center: Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium" aria-label="Main Navigation">
          <Link href="#research" className="text-mist/75 hover:text-cyan transition-colors">
            Research
          </Link>
          <Link href="#products" className="text-mist/75 hover:text-cyan transition-colors">
            Products
          </Link>
          <Link href="#policy" className="text-mist/75 hover:text-cyan transition-colors">
            Policy
          </Link>
          <Link href="#developers" className="text-mist/75 hover:text-cyan transition-colors">
            Developers
          </Link>
          <Link href="#news" className="text-mist/75 hover:text-cyan transition-colors">
            News
          </Link>

          {/* Company Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsCompanyDropdownOpen(!isCompanyDropdownOpen)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setIsCompanyDropdownOpen(!isCompanyDropdownOpen);
                }
              }}
              aria-haspopup="true"
              aria-expanded={isCompanyDropdownOpen}
              className="flex items-center gap-1.5 text-mist/75 hover:text-cyan transition-colors cursor-pointer outline-none"
            >
              Company
              <ChevronDown
                size={14}
                className={cn('transition-transform duration-200', isCompanyDropdownOpen && 'rotate-180')}
              />
            </button>

            <AnimatePresence>
              {isCompanyDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-40 bg-abyss/90 border border-cyan/15 rounded-xl p-1.5 shadow-xl backdrop-blur-lg z-50"
                >
                  <ul role="menu" aria-label="Company sub-menu">
                    {companyLinks.map((link) => (
                      <li key={link.name} role="none">
                        <Link
                          href={link.href}
                          onClick={() => setIsCompanyDropdownOpen(false)}
                          className="block px-3 py-2 text-sm text-mist/80 hover:text-cyan hover:bg-white/[0.03] rounded-lg transition-all"
                          role="menuitem"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Right: Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <Link href="#login" className="text-sm font-medium text-mist/60 hover:text-mist transition-colors">
            Log in
          </Link>
          <Link href="#try-photon">
            <GlassButton variant="primary">Try Photon</GlassButton>
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-mist/80 hover:text-cyan outline-none p-1.5"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-x-0 top-[60px] bottom-0 bg-void/98 backdrop-blur-2xl z-40 flex flex-col px-6 py-8 border-t border-cyan/10"
          >
            <nav className="flex flex-col gap-6 text-lg font-medium flex-1">
              <Link
                href="#research"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-mist/80 hover:text-cyan transition-colors"
              >
                Research
              </Link>
              <Link
                href="#products"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-mist/80 hover:text-cyan transition-colors"
              >
                Products
              </Link>
              <Link
                href="#policy"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-mist/80 hover:text-cyan transition-colors"
              >
                Policy
              </Link>
              <Link
                href="#developers"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-mist/80 hover:text-cyan transition-colors"
              >
                Developers
              </Link>
              <Link
                href="#news"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-mist/80 hover:text-cyan transition-colors"
              >
                News
              </Link>

              {/* Mobile Company Accordion */}
              <div className="flex flex-col">
                <button
                  onClick={() => setIsMobileCompanyOpen(!isMobileCompanyOpen)}
                  className="flex items-center justify-between text-mist/80 hover:text-cyan transition-colors text-left"
                >
                  <span>Company</span>
                  <ChevronDown
                    size={18}
                    className={cn('transition-transform duration-200', isMobileCompanyOpen && 'rotate-180')}
                  />
                </button>
                <AnimatePresence>
                  {isMobileCompanyOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col pl-4 mt-2 gap-3 border-l border-cyan/10"
                    >
                      {companyLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-sm text-mist/60 hover:text-cyan py-1"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            <div className="flex flex-col gap-4 border-t border-cyan/10 pt-6">
              <Link
                href="#login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-center py-3 text-mist/60 hover:text-mist text-sm font-medium"
              >
                Log in
              </Link>
              <Link href="#try-photon" onClick={() => setIsMobileMenuOpen(false)} className="w-full">
                <GlassButton variant="primary" className="w-full py-3.5 text-base">
                  Try Photon
                </GlassButton>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
