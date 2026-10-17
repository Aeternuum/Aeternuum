'use client';

import React from 'react';
import { ArrowUpRight, Calendar, Newspaper } from 'lucide-react';
import { GlassPanel } from './ui/glass-primitives';

interface NewsItem {
  tag: string;
  date: string;
  title: string;
  link: string;
  summary: string;
}

function NewsCard({ tag, date, title, link, summary }: NewsItem) {
  return (
    <a href={link} className="block group h-full">
      <GlassPanel className="p-6 bg-abyss/40 border-cyan/10 flex flex-col justify-between h-full hover:bg-white/[0.01]">
        <div className="flex flex-col gap-3">
          {/* Metadata */}
          <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-mist/40 uppercase">
            <span className="text-cyan">{tag}</span>
            <span className="flex items-center gap-1">
              <Calendar size={10} />
              {date}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-base md:text-lg font-medium text-mist group-hover:text-cyan transition-colors duration-200 line-clamp-2 leading-snug">
            {title}
          </h3>

          {/* Summary */}
          <p className="text-xs text-mist/55 font-light line-clamp-3 leading-relaxed mt-1">
            {summary}
          </p>
        </div>

        {/* Read More Lockup */}
        <div className="flex items-center justify-between text-xs font-mono text-mist/40 group-hover:text-cyan mt-6 pt-4 border-t border-cyan/5">
          <span>READ ANNOUNCEMENT</span>
          <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </div>
      </GlassPanel>
    </a>
  );
}

export default function NewsStrip() {
  const newsItems: NewsItem[] = [
    {
      tag: "Series B Raise",
      date: "July 12, 2026",
      title: "Aeternuum closes $180M Series B financing led by Horizon Capital",
      summary: "This capital will expand our physical cluster capacities in Iceland, accelerating our development of native waveform language modeling grids.",
      link: "#news-series-b"
    },
    {
      tag: "Model Release",
      date: "June 28, 2026",
      title: "Announcing Photon 2.4 with integrated sandboxed runtime compilers",
      summary: "Photon v2.4 represents a major milestone in model autonomy, executing and self-correcting algorithmic logic inside safe isolated memory zones.",
      link: "#news-photon-2-4"
    },
    {
      tag: "Scientific Inquiry",
      date: "May 15, 2026",
      title: "Collaborating with CERN on linguistic modeling of quantum telemetry",
      summary: "Aeternuum researchers partner with CERN to evaluate mapping particle trajectories to dense high-dimensional semantic state vectors.",
      link: "#news-cern"
    }
  ];

  return (
    <section id="news" className="py-24 px-6 max-w-7xl mx-auto border-t border-cyan/5 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
        <div>
          <span className="text-xs font-mono text-cyan tracking-widest uppercase block mb-3">Company Bulletin</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-mist to-mist/70">
            Latest from Aeternuum.
          </h2>
        </div>
        <a 
          href="#news-archive" 
          className="text-xs font-mono text-cyan/80 hover:text-cyan flex items-center gap-1.5 transition-colors border-b border-cyan/20 hover:border-cyan pb-1"
        >
          <Newspaper size={14} />
          View all announcements
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {newsItems.map((item, idx) => (
          <NewsCard key={idx} {...item} />
        ))}
      </div>
    </section>
  );
}
