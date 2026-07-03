"use client";

import React from "react";
import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

export default function ContactOverlay() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full max-w-6xl mx-auto items-center mt-6 px-4">
      
      {/* LEFT SIDE: Comms Header */}
      <div className="lg:col-span-6 space-y-5 text-left pointer-events-auto">
        <div className="space-y-4">
          <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-2 backdrop-blur-sm text-occlusion">
            Secure Uplink // Active
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-white drop-shadow-2xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Lets <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Connect
            </span>
          </h2>
          
          <p className="text-slate-300 text-base md:text-[17px] max-w-md leading-relaxed drop-shadow-md text-occlusion">
            I am actively seeking roles in engineering under Machine Learning, AI, Software, and countless more. If you currently hold an opportunity, or just want to chat, you can reach me through LinkedIn, or Email. You can also check out my GitHub Repository.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: Interactive Communication Channels */}
      <div className="lg:col-span-6 space-y-4 pointer-events-auto mt-8 lg:mt-0">
        
        {/* Email Channel */}
        <a href="mailto:kevajobs@gmail.com?subject=Resume%20Request:%20Portfolio%20Visitor" className="block group transition-transform duration-300 md:hover:translate-x-2 active:scale-[0.98]">
          <GlassCard delay={0.2} className="transition-colors duration-300 md:group-hover:bg-white/10 md:group-hover:border-white/20 group-active:bg-white/10 group-active:border-white/30">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-base font-bold uppercase tracking-widest text-white mb-1">Email</h3>
                <p className="text-sm text-slate-400">Submit an Inquiry</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors duration-300">
                ↗
              </div>
            </div>
          </GlassCard>
        </a>

        {/* LinkedIn Channel */}
        <a href="https://www.linkedin.com/in/kev-akpinar-58b243364/" target="_blank" rel="noopener noreferrer" className="block group transition-transform duration-300 md:hover:translate-x-2 active:scale-[0.98]">
          <GlassCard delay={0.3} className="transition-colors duration-300 md:group-hover:bg-white/10 md:group-hover:border-white/20 group-active:bg-white/10 group-active:border-white/30">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-base font-bold uppercase tracking-widest text-white mb-1">LinkedIn</h3>
                <p className="text-sm text-slate-400">Professional Profile & History</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-black transition-colors duration-300">
                ↗
              </div>
            </div>
          </GlassCard>
        </a>

        {/* GitHub Channel */}
        <a href="https://github.com/kevakpinar" target="_blank" rel="noopener noreferrer" className="block group transition-transform duration-300 md:hover:translate-x-2 active:scale-[0.98]">
          <GlassCard delay={0.4} className="transition-colors duration-300 md:group-hover:bg-white/10 md:group-hover:border-white/20 group-active:bg-white/10 group-active:border-white/30">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-base font-bold uppercase tracking-widest text-white mb-1">Code Archive</h3>
                <p className="text-sm text-slate-400">Public Repositories & Contributions</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-500/20 flex items-center justify-center text-slate-300 group-hover:bg-slate-300 group-hover:text-black transition-colors duration-300">
                ↗
              </div>
            </div>
          </GlassCard>
        </a>

      </div>
    </div>
  );
}