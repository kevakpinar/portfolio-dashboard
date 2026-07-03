"use client";

import React from "react";
import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

const projects = [
    {
        id: "01",
        title: "Code Plagiarism Detector",
        status: "Completed // April 2026",
        statusColor: "text-emerald-400",
        bgGlow: "bg-emerald-500",
        description: "Collaborated within an engineering team to deliver a high-performance analysis engine written in Rust that detects structural plagiarism in code submissions using token normalization, tree-sitter parsing, and greedy string tiling. Optimized for production-grade speed and precision, the application integrates a specialized side-by-side terminal interface utilizing advanced code editor APIs, that dynamically highlights identical syntax blocks and structural anomalies in real time.",
        tech: ["Rust", "PostgreSQL", "Node.js", "Next.js", "TypeScript", "React", "Tailwind CSS", "Monaco Editor", "Prisma ORM", "Cookie-based Sessions"]
    },
    {
        id: "02",
        title: "Humanoid Motion Imitation with Reinforcement Learning",
        status: "Completed // December 2025",
        statusColor: "text-blue-400",
        bgGlow: "bg-blue-500",
        description: "Collaborated within a development team to train a simulated 28-degree-of-freedom humanoid agent to replicate motion-captured reference data within a physics-based environment. Leveraging advanced reinforcement learning algorithms and custom reward-shaping functions, successfully trained the model to achieve stable convergence and execute a complex, physically consistent backflip.",
        tech: ["Python", "PyTorch", "NVIDIA Isaac Gym", "CUDA", "PPO", "SAC", "APA (Advantage-Induced Policy Alignment)"]
    }
];

export default function ProjectsOverlay() {
    return (
        <div className="w-full max-w-6xl mx-auto mt-6 px-4 pointer-events-auto flex flex-col">
            {/* Header */}
            <div className="mb-8">
                <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-indigo-300 mb-3 backdrop-blur-sm text-occlusion">
                    Central Repo // Access Level: Public
                </div>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white drop-shadow-2xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    Engineering <br className="md:hidden"/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-500">
                        Projects
                    </span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {projects.map((project,index) => (
                    <GlassCard key={project.id} delay={0.2 + index * 0.1} className="flex flex-col h-full group md:hover:border-white/20 active:bg-white/5 active:border-white/30 transition-colors duration-300">
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-5xl font-black text-white/30 tracking-tighter leading-none md:group-hover:text-white/80 group-active:text-white/80 transition-colors duration-300">
                                {project.id}
                            </span>
                            <div className={`flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest ${project.statusColor}`}>
                                <span className={`w-1.5 h-1.5 rounded-full ${project.bgGlow} shadow-[0_0_8px_currentColor]`} />
                                {project.status}
                            </div>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">
                            {project.title}
                        </h3>
                        <p className="text-slate-400 text-base leading-relaxed mb-6 flex-grow">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
                            {project.tech.map((tech) => (
                                <span key={tech} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[12px] font-medium tracking-wide text-slate-300">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </GlassCard>
                ))}
            </div>
        </div>
    );
}