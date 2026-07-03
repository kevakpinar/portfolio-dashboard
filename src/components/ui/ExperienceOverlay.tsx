"use client";

import React from "react";
import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

const experiences = [
  {
    id: "01",
    role: "Freelance Software Engineer",
    company: "Independent Consultant",
    date: "Jan 2026 — Present",
    color: "text-emerald-400",
    bgGlow: "bg-emerald-500",
    description: "Architecting and deploying custom full-stack web applications to drive business logic for independent clients. Managing the complete engineering lifecycle — from scalable relational database design to high-performance frontend delivery.",
    tech: ["TypeScript", "Next.js", "Node.js", "Tailwind CSS", "PostgreSQL", "Prisma ORM", "React", "Supabase", "Vercel", "Resend", "PayStack", "Cloudinary"]
  },
  {
    id: "02",
    role: "Full-Stack Software Engineer",
    company: "Code Plagiarism Detector | Brock University",
    date: "Jan 2026 — Feb 2026",
    color: "text-indigo-300",
    bgGlow: "bg-indigo-300",
    description: "Engineered a custom V1 full-stack application, boosting system reliability and resilience to ensure seamless end-user experience. Built robust relational data pipelines using PostgreSQL and Node.js, paired with an SEO-optimized, highly responsive Next.js frontend to ensure scalable performance.",
    tech: ["React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS", "PostgreSQL", "Monaco Editor"]
  },
  {
    id: "03",
    role: "Night Receiver",
    company: "Princess Auto",
    date: "July 2021 — Present",
    color: "text-blue-400",
    bgGlow: "bg-blue-500",
    description: "Handling incoming freight, maintaining warehouse and sales floor organization, and setting up in-store promotions. Thoroughly ensure products are accurately priced and securely stored, following safety protocol and practices.",
    tech: ["Customer Service", "Team Collaboration", "Communication", "Warehouse Operation", "Equipment Operation", "Resource Staging"]
  }
];

export default function ExperienceOverlay() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-6 px-4 pointer-events-auto flex flex-col">
      
      {/* Header Section */}
      <div className="mb-8 md:text-left">
        <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-indigo-300 mb-3 backdrop-blur-sm text-occlusion">
          Career Timeline // Verified
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white drop-shadow-2xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          Professional <br className="md:hidden"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-500">
            Experience
          </span>
        </h2>
      </div>

      {/* The Chrono-Timeline */}
      <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-10 pb-8">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="relative pl-8 md:pl-12">
            
            {/* Glowing Timeline Node */}
            <span className={`absolute -left-[7px] top-4 w-3 h-3 rounded-full ${exp.bgGlow} shadow-[0_0_15px_currentColor]`} />
            
            <GlassCard delay={0.2 + index * 0.15} className="group hover:border-white/20 transition-colors duration-500 relative overflow-hidden">

              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <h4 className={`text-sm font-bold uppercase tracking-widest ${exp.color} mt-1`}>
                    {exp.company}
                  </h4>
                </div>
                <div className="inline-block text-[11px] font-bold text-slate-400 border border-white/10 px-2.5 py-1 rounded-full uppercase tracking-widest bg-black/20 w-max mt-2 md:mt-0">
                  {exp.date}
                </div>
              </div>

              <p className="text-slate-300 text-[15px] leading-relaxed mb-5">
                {exp.description}
              </p>

              {/* Tech Stack Footer */}
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[12px] font-medium tracking-wide text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>

            </GlassCard>
          </div>
        ))}
      </div>
      
    </div>
  );
}