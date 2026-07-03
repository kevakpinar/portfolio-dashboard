"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function CoreOrb() {
    const orbRef = useRef<THREE.Mesh>(null);

    //This rotates the sphere
    useFrame((state) => {
        if (orbRef.current) {
            orbRef.current.rotation.y = state.clock.getElapsedTime()*0.03;
            orbRef.current.rotation.x = state.clock.getElapsedTime()*0.015;
        }
    });

    return (
        <mesh position={[0,0,-2]} ref={orbRef}>
            <sphereGeometry args={[2.8,64,64]} />
            <meshBasicMaterial
                color="#ffffff"
                wireframe={true}
                transparent={true}
                opacity={0.08}
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </mesh>
    );
}