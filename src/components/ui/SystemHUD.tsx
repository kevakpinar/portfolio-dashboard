"use client";

import React, { useState, useEffect } from "react";

// The array of background processes the HUD will cycle through
const SUBROUTINES = [
    "AURIC_FIELD_INTEGRATION",
    "NEURAL_LINK_STABLE",
    "SPATIAL_MAPPING_ONLINE",
    "LATENT_SYNC_ACTIVE",
    "DATA_STREAM_ENCRYPTED"
];

export default function SystemHUD() {
    const [zCoord, setZCoord] = useState("-12.450");
    const [xCoord, setXCoord] = useState("4.220");
    const [subroutineIndex, setSubroutineIndex] = useState(0);
    const [hexCode, setHexCode] = useState("0x00A1");

    useEffect(() => {
        // Fast Interval: Updates the physical coordinates and memory hex every 150ms
        const telemetryInterval = setInterval(() => {
            const zJitter = -12.45 + (Math.random() * 0.04 - 0.02);
            const xJitter = 4.22 + (Math.random() * 0.04 - 0.02);
            
            setZCoord(zJitter.toFixed(3));
            setXCoord(xJitter.toFixed(3));
            
            // Randomly mutate the hexadecimal memory address 30% of the time to make it feel organic
            if (Math.random() > 0.7) {
                const randomHex = Math.floor(Math.random() * 65535).toString(16).toUpperCase().padStart(4, '0');
                setHexCode(`0x${randomHex}`);
            }
        }, 150);

        // Slow Interval: Rotates the Bio-Digital subroutine text every 3.5 seconds
        const statusInterval = setInterval(() => {
            setSubroutineIndex((prev) => (prev + 1) % SUBROUTINES.length);
        }, 3500);

        return () => {
            clearInterval(telemetryInterval);
            clearInterval(statusInterval);
        };
    }, []);

    return (
        // This completely hides the HUD on phones, but shows it on tablets/desktops.
        <div className="hidden md:block absolute top-8 right-8 text-right font-mono text-[10px] text-slate-400 uppercase tracking-[0.2em] pointer-events-none z-50 mix-blend-screen opacity-80 text-occlusion">
            
            {/* Top Row: Fast Telemetry */}
            <div className="mb-1.5 drop-shadow-md">
                System Coord: [Z-Axis: {zCoord}M | X: {xCoord}M]
            </div>
            
            {/* Bottom Row: Slow Status & Memory */}
            <div className="flex justify-end items-center text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">
                
                {/* 2. THE LOCK FIX: Separating the label from the dynamic text */}
                <span className="mr-2">Bio-Digital:</span>
                
                {/* The dynamic text lives in a rigid 210px box, aligned left. It will never push the MEM hex away. */}
                <span className="w-[193px] text-left">
                    [{SUBROUTINES[subroutineIndex]}]
                </span>
                
                {/* The mutating memory hex code & divider */}
                <span className="text-cyan-400 mr-2">
                    || MEM_{hexCode}
                </span>
                
                {/* The active heartbeat indicator */}
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse flex-shrink-0" />
            </div>
            
        </div>
    );
}