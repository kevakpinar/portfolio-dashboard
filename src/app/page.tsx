"use client";

import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { AnimatePresence } from "framer-motion";
import { usePortfolioStore } from "@/hooks/usePortfolioStore";
import CameraController from "@/components/canvas/CameraController";
import BackgroundShape from "@/components/canvas/BackgroundShape";
import HomeOverlay from "@/components/ui/HomeOverlay";
import SkillsOverlay from "@/components/ui/SkillsOverlay";
import ExperienceOverlay from "@/components/ui/ExperienceOverlay";
import ProjectsOverlay from "@/components/ui/ProjectsOverlay";
import ContactOverlay from "@/components/ui/ContactOverlay";
import CoreOrb from "@/components/canvas/CoreOrb";
import ParticleDust from "@/components/canvas/ParticleDust";
import SystemHUD from "@/components/ui/SystemHUD";

export default function Home() {
  const activeSection = usePortfolioStore((state) => state.activeSection);
  const setActiveSection = usePortfolioStore((state) => state.setActiveSection);

  return (
    <main className="relative w-screen h-[100dvh] overflow-hidden select-none bg-[#050507]">
      {/* 3D Canvas Layer */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.8}/>
          <directionalLight position={[5, 10, 5]} intensity={0.6}/> 
          <pointLight position={[-10, -10, -10]} intensity={0.4} color="#e1f0f7"/>

          <CameraController />
          <BackgroundShape />
          <CoreOrb />
          <ParticleDust />
        </Canvas>
      </div>

      {/* 2D Interactive UI Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-4 md:p-8">
        
        {/* Header section */}
        <header className="w-full flex justify-between items-center pointer-events-auto flex-shrink-0">
          <h1 className="text-lg font-black tracking-widest text-white uppercase">
            SALIMLY<span className="text-emerald-400">.</span>COM
          </h1>
          <SystemHUD />
        </header>

        <div className="w-full flex-grow relative min-h-0 my-4 md:my-8 pointer-events-none">
          <div className="absolute inset-0 overflow-y-auto overflow-x-hidden custom-scrollbar pointer-events-auto flex flex-col">
            <div className="w-full max-w-7xl mx-auto my-auto flex-shrink-0 px-2 md:px-4 py-8">
              <AnimatePresence mode="wait">
                {activeSection === "home" && <HomeOverlay />}
                {activeSection === "skills" && <SkillsOverlay />}
                {activeSection === "experience" && <ExperienceOverlay />}
                {activeSection === "projects" && <ProjectsOverlay />}
                {activeSection === "contact" && <ContactOverlay />}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <nav className="w-full flex justify-center pointer-events-auto flex-shrink-0 px-2 pb-8 md:pb-6">
          <div className="glass-panel px-4 md:px-6 py-3 rounded-full flex justify-center items-center gap-4 md:gap-6 shadow-glass">
            {[
              { 
                id: "home", 
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-3 md:h-3"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> 
              },
              { 
                id: "skills", 
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-3 md:h-3"><path d="M6 3v12"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>
              },
              { 
                id: "experience", 
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-3 md:h-3"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> 
              },
              { 
                id: "projects", 
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-3 md:h-3"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> 
              },
              { 
                id: "contact", 
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-3 md:h-3"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> 
              }
            ].map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id as any)}
                className={`flex items-center justify-center gap-2 px-3 py-2 md:px-4 md:py-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeSection === section.id
                    ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                {/* Icon is always visible */}
                {section.icon}
                {/* Text is completely hidden on mobile, visible on medium+ screens */}
                <span className="hidden md:block text-xs font-bold uppercase tracking-widest">
                  {section.id}
                </span>
              </button>
            ))}
          </div>
        </nav>
      </div>
    </main>
  );
}