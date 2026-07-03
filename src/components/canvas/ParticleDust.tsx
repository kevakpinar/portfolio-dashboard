"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ParticleDust() {
    const pointsRef = useRef<THREE.Points>(null);

    const particlesCount = 2500;
    const positions = useMemo(() => {
        const pos = new Float32Array(particlesCount*3);
        for (let i = 0; i < particlesCount*3; i++) {
            pos[i] = (Math.random() - 0.5) * 25;
        }
        return pos;
    }, []);

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.015;
            pointsRef.current.position.y = Math.sin(state.clock.getElapsedTime()*0.2)*0.5;
        }
    });

    return (
        <points ref={pointsRef} position={[0,0,-1]}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.015}
                color="#ffffff"
                transparent={true}
                opacity={0.3}
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    );
}