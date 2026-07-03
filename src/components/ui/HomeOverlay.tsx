"use client";

import React from "react";
import GlassCard from "./GlassCard";

export default function HomeOverlay() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-6xl mx-auto items-center mt-4 px-4">
      
      {/* LEFT: Major Creative / Technical Title Block (Takes up 7/12 columns) */}
      <div className="lg:col-span-7 space-y-5 text-left pointer-events-auto pr-0 lg:pr-8">
        <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-violet-300 mb-2 backdrop-blur-sm text-occlusion">
          SYSTEM BOOT // V1.0
        </div>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          Kev <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-300">
            Akpinar
          </span>
        </h2>
        <p className="text-slate-300 text-base md:text-base max-w-md leading-relaxed text-occlusion">
          Hey, I'm a CS (Honours) major who recently graduated from Brock University. I like building and fixing systems, and providing best possible solutions to those who may need it!
        </p>
      </div>

      {/* RIGHT: Status / Quick Metrics Dossier (Takes up 5/12 columns) */}
      <div className="lg:col-span-5 space-y-4">
        <GlassCard delay={0.3}>
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-4 border-b border-pastel-darkNavy/10 pb-2">
            System Dossier
          </h3>
          
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-pastel-muted uppercase font-medium">Current Hub</span>
              <span className="font-bold">Ontario, Canada</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-pastel-muted uppercase font-medium">Specialization</span>
              <span className="font-bold tracking-tight">Artificial Intelligence</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-pastel-muted uppercase font-medium">Status</span>
              <span className="flex items-center gap-1.5 font-bold text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Active: Seeking Engineering Roles
              </span>
            </div>
          </div>
        </GlassCard>

        {/* Small Sub-card showing quick action/hint */}
        <GlassCard delay={0.4} className="bg-white/20!">
          <p className="text-[14px] text-slate-300 italic">
            I am a recent Computer Science graduate who has achieved a Bachelors level degree at Brock University, with
            a specialization in Artificial Intelligence. I also possess a Minor in Mathematics, and have immersed myself
            in various projects that have relevance to real-world problems throughout my years at Brock University. I am
            always curious, and quite passionate about the projects I build, as they fulfill my imagination and excitement.<br /><br />
            During my free time, I'm either hanging out with family and friends, watching shows, or playing chess. If you'd
            like to get in touch, check out my contact section.
          </p>
        </GlassCard>
      </div>
      
    </div>
  );
}