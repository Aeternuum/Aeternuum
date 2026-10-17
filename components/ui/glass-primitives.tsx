'use client';

import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export function GlassPanel({ children, className, hoverEffect = true, ...props }: GlassPanelProps) {
  return (
    <div
      className={cn(
        hoverEffect ? 'glass-panel' : 'glass-panel hover:border-glass',
        'rounded-2xl transition-all duration-300 relative overflow-hidden',
        className
      )}
      {...props}
    >
      {/* Subtle reflective gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'ghost' | 'primary' | 'secondary';
  magnetic?: boolean;
}

export function GlassButton({
  children,
  className,
  variant = 'secondary',
  magnetic = true,
  ...props
}: GlassButtonProps) {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const [coords, setCoords] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!magnetic || !buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);
    // Limit pull strength
    setCoords({ x: x * 0.25, y: y * 0.25 });
  };

  const handleMouseLeave = () => {
    setCoords({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const baseClasses = "relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer outline-none focus:ring-1 focus:ring-cyan/50";
  
  const variantClasses = {
    primary: "glass-button-primary",
    secondary: "glass-button",
    ghost: "text-mist/70 hover:text-mist hover:bg-white/[0.03] border border-transparent"
  };

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      <motion.span
        animate={isHovered ? { x: coords.x, y: coords.y } : { x: 0, y: 0 }}
        transition={{ type: 'spring', stiffness: 180, damping: 15 }}
        className="relative z-10 flex items-center gap-2 pointer-events-none"
      >
        {children}
      </motion.span>
    </button>
  );
}

export function OrbitGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Giant radial eclipse center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-radial from-cyan/[0.03] via-transparent to-transparent blur-[120px] rounded-full animate-subtle-pulse" />

      {/* Thin orbiting rings representing physical trails */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[45vw] border border-cyan/[0.03] rounded-[50%] animate-orbit-1 pointer-events-none rotate-[25deg]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110vw] h-[55vw] border border-cyan/[0.02] rounded-[50%] animate-orbit-2 pointer-events-none -rotate-[15deg]" />

      {/* Subtle nodes representing photons or energy nodes along the orbits */}
      <div className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-cyan/20 blur-xs animate-orbit-1 origin-[55vw_22vw]" />
      <div className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-cyan/15 blur-2xs animate-orbit-2 origin-[45vw_27vw]" />
    </div>
  );
}
