"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export default function GlassCard({ children, className = "", delay = 0 }: GlassCardProps) {
    "use memo"; // Opting into React Compiler

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
            className={`glass-panel relative p-6 rounded-2xl text-slate-100 pointer-events-auto overflow-hidden ${className}`}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            <div className="absolute inset-0 glass-noise pointer-events-none opacity-80" />
            <div className="relative z-10 text-occlusion">
                {children}
            </div>
        </motion.div>
    );
}