"use client";

import React from "react";
import GlassCard from "./GlassCard";

interface SkillItemProps {
    index: number;
    name: string;
}

function SkillItem({ index, name } : SkillItemProps) {
    // Formats numbers less than 10 to have a leading zero (e.g., 1 becomes "01")
    const formattedIndex = String(index).padStart(2, "0");

    return (
        <div className="flex items-center gap-3 py-1 group hover:translate-x-1 transition-transform duration-200 ease-out">
            <span className="font-mono text-[13px] text-cyan-400/50 font-bold tracking-widest select-none">
                [{formattedIndex}]
            </span>
            <span className="text-base font-bold tracking-tight text-white/90 group-hover:text-cyan-400 transition-colors duration-200">
                {name}
            </span>
        </div>
    );
}

export default function SkillsOverlay() {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 mt-8">
            {/* Section header */}
            <div className="mb-6 text-left pl-2">
                <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-cyan-400 mb-3 backdrop-blur-sm text-occlusion">
                    Capabilities Core // Verified
                </span>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-white drop-shadow-2xl mb-8 md:text-left drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    Skills & <br className="md:hidden" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                        Specialties
                    </span>
                </h2>
            </div>

            {/* Gap-Free Native CSS Masonry Column Layout */}
            <div className="columns-1 md:columns-3 gap-6 [column-fill:_balance] w-full space-y-6 md:space-y-0">

                {/* MODULE 01: SOFTWARE CORE */}
                <GlassCard delay={0.1} className="break-inside-avoid mb-6 inline-block w-full space-y-5">
                    <div className="flex items-center gap-2 border-b border-white/10 pb-2 mb-2">
                        <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">
                            Software Core
                        </h3>
                    </div>
                    <div className="space-y-2.5">
                        <SkillItem index={1} name="TypeScript" />
                        <SkillItem index={2} name="JavaScript" />
                        <SkillItem index={3} name="Rust" />
                        <SkillItem index={4} name="Java" />
                        <SkillItem index={5} name="Python" />
                        <SkillItem index={6} name="C#" />
                        <SkillItem index={7} name="Next.js" />
                        <SkillItem index={8} name="React" />
                        <SkillItem index={9} name="Node.js" />
                        <SkillItem index={10} name="Tailwind CSS" />
                        <SkillItem index={11} name="R3F & WebGL" />
                        <SkillItem index={12} name="Express" />
                    </div>
                </GlassCard>

                {/* MODULE 02: DATA SYSTEM & ARCHITECTURE */}
                <GlassCard delay={0.2} className="break-inside-avoid mb-6 inline-block w-full space-y-5">
                    <div className="flex items-center gap-2 border-b border-white/10 pb-2 mb-2">
                        <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">
                            Data Systems & Architecture
                        </h3>
                    </div>
                    <div className="space-y-2.5">
                        <SkillItem index={1} name="PostgreSQL" />
                        <SkillItem index={2} name="Prisma ORM" />
                        <SkillItem index={3} name="Supabase" />
                        <SkillItem index={4} name="System Architecture Modeling & Design (UML)" />
                        <SkillItem index={5} name="Design Patterns" />
                        <SkillItem index={6} name="API Protocols (REST)" />
                        <SkillItem index={7} name="Object-Oriented Programming" />
                        <SkillItem index={8} name="Software Requirements Specification (SRS)" />
                    </div>
                </GlassCard>

                {/* MODULE 03: CLOUD DEVOPS & INFRASTRUCTURE */}
                <GlassCard delay={0.3} className="break-inside-avoid mb-6 inline-block w-full space-y-5">
                    <div className="flex items-center gap-2 border-b border-white/10 pb-2 mb-2">
                        <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">
                            Cloud DevOps & Infrastructure
                        </h3>
                    </div>
                    <div className="space-y-2.5">
                        <SkillItem index={1} name="Vercel" />
                        <SkillItem index={2} name="CI/CD" />
                        <SkillItem index={3} name="Monaco Editor API" />
                        <SkillItem index={4} name="Cloud API Gateways" />
                        <SkillItem index={5} name="GitHub" />
                    </div>
                </GlassCard>

                {/* MODULE 04: ML & DATA ENGINEERING */}
                <GlassCard delay={0.4} className="break-inside-avoid mb-6 inline-block w-full space-y-5">
                    <div className="flex items-center gap-2 border-b border-white/10 pb-2 mb-2">
                        <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">
                            ML & Data Engineering
                        </h3>
                    </div>
                    <div className="space-y-2.5">
                        <SkillItem index={1} name="PyTorch" />
                        <SkillItem index={2} name="TensorFlow" />
                        <SkillItem index={3} name="NumPy" />
                        <SkillItem index={4} name="Pandas" />
                        <SkillItem index={5} name="Data Preprocessing" />
                    </div>
                </GlassCard>

                {/* MODULE 05: THEORY & EVALUATION */}
                <GlassCard delay={0.5} className="break-inside-avoid mb-6 inline-block w-full space-y-5">
                    <div className="flex items-center gap-2 border-b border-white/10 pb-2 mb-2">
                        <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">
                            Theory & Evaluation
                        </h3>
                    </div>
                    <div className="space-y-2.5">
                        <SkillItem index={1} name="Neural Networks" />
                        <SkillItem index={2} name="Computer Vision" />
                        <SkillItem index={3} name="Genetic Algorithms" />
                        <SkillItem index={4} name="Reinforcement Learning" />
                        <SkillItem index={5} name="Model Tracking" />
                        <SkillItem index={6} name="Model Registry" />
                        <SkillItem index={7} name="Hyperparameter Tuning & Optimization" />
                        <SkillItem index={8} name="Validation Metrics" />
                    </div>
                </GlassCard>

                {/* MODULE 06: PROFESSIONAL OPERATIONS */}
                <GlassCard delay={0.6} className="break-inside-avoid mb-6 inline-block w-full space-y-5">
                    <div className="flex items-center gap-2 border-b border-white/10 pb-2 mb-2">
                        <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">
                            Professional Operations
                        </h3>
                    </div>
                    <div className="space-y-2.5">
                        <SkillItem index={1} name="Communication" />
                        <SkillItem index={2} name="Active Listening" />
                        <SkillItem index={3} name="Presentation" />
                        <SkillItem index={4} name="Technical Writing" />
                        <SkillItem index={5} name="Teamwork" />
                        <SkillItem index={6} name="Leadership" />
                        <SkillItem index={7} name="Empathy" />
                        <SkillItem index={8} name="Problem Solving" />
                        <SkillItem index={9} name="Adaptability" />
                        <SkillItem index={10} name="Time Management" />
                        <SkillItem index={11} name="Critical Thinking" />
                        <SkillItem index={12} name="Attention to Detail" />
                        <SkillItem index={13} name="Self-Motivation" />
                        <SkillItem index={14} name="Client Relations" />
                        <SkillItem index={15} name="Organization" />
                        <SkillItem index={16} name="Negotiation" />
                    </div>
                </GlassCard>

            </div>
        </div>
    );
}