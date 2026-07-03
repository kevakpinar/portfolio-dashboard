"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function BackgroundShape() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const shaderData = useMemo(() => ({
    vertexShader: `
      varying vec3 vWorldPosition;

      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * viewMatrix * worldPosition;
      }
    `,
    fragmentShader: `
      uniform float uTime;
      varying vec3 vWorldPosition;

      void main() {
        // Map 3D world coordinates
        vec2 p = vWorldPosition.xy * 0.035;
        
        // --- THE CINEMATIC COLOR PALETTE ---
        vec3 colorLeft = vec3(0.12, 0.14, 0.18);   // Deep, premium charcoal
        vec3 colorRight = vec3(1.0, 0.35, 0.02);   // Rich, fiery amber
        vec3 glowLeft = vec3(0.5, 0.6, 0.75);      // Icy silver/blue moonlit sheen
        vec3 glowRight = vec3(1.0, 0.9, 0.5);      // Blinding white-gold plasma core
        
        // Smooth horizontal transition mapped to the 3D sphere
        float mixFactor = smoothstep(-18.0, 18.0, vWorldPosition.x);
        vec3 baseColor = mix(colorLeft, colorRight, mixFactor);
        vec3 highlightColor = mix(glowLeft, glowRight, mixFactor);
        
        vec3 bgColor = vec3(0.015, 0.015, 0.02); // Absolute deep studio void

        // --- THE FLUID MATH (UPGRADED) ---
        // 1. Elegant diagonal drift
        p.x -= uTime * 0.12;
        p.y += sin(uTime * 0.05) * 0.2; 
        
        // 2. Asymmetric Domain Warping
        // By pulling X harder than Y, we create long, sweeping ribbons instead of round bubbles
        for(float i = 1.0; i < 7.0; i++) {
            vec2 newp = p;
            newp.x += 0.8 / i * sin(i * p.y + uTime * 0.2);
            newp.y += 0.4 / i * cos(i * p.x + uTime * 0.15);
            p = newp;
        }

        // --- DRAWING THE SATIN FABRIC ---
        float fabric = cos(p.x + p.y); 
        fabric = fabric * 0.5 + 0.5; // Clean [0, 1] normalization

        // LAYER 1: Deep volumetric body folds
        float body = smoothstep(0.1, 0.8, fabric);
        
        // LAYER 2: Broad, soft ambient light sheen
        float sheen = smoothstep(0.4, 0.65, fabric) - smoothstep(0.65, 0.9, fabric);
        
        // LAYER 3: Razor-sharp specular rim light (The "expensive" glossy look)
        float specular = smoothstep(0.55, 0.6, fabric) - smoothstep(0.6, 0.65, fabric);

        // --- FINAL COMPOSITION ---
        // Lay down the background and the deep fabric body
        vec3 finalColor = mix(bgColor, baseColor, body * 0.8);
        
        // Add the sweeping, soft color illumination
        finalColor += baseColor * sheen * 1.5;
        
        // Ignite the blinding plasma cores on the sharpest crests of the fabric
        finalColor += highlightColor * specular * 2.5;

        // --- CINEMATIC MICRO-GRAIN ---
        // Prevents digital color banding and adds a physical, textured lens feel
        float grain = fract(sin(dot(vWorldPosition.xy, vec2(12.9898, 78.233))) * 43758.5453);
        finalColor -= grain * 0.02;

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `
  }), []);

  const uniforms = useRef({
    uTime: { value: 0 }
  });

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[50, 64, 64]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={shaderData.vertexShader}
        fragmentShader={shaderData.fragmentShader}
        uniforms={uniforms.current}
        side={THREE.BackSide}
        depthWrite={false}
      />
    </mesh>
  );
}