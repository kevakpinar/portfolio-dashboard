"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { usePortfolioStore } from "@/hooks/usePortfolioStore";
import * as THREE from "three";

// --------------------------------------------------------
// ULTRA-CLOSE CINEMATIC DOLLY TRACKS
// position: Where the camera physically sits in the void
// lookAt: The exact point in 3D space the lens is pointing at
// --------------------------------------------------------
const CAMERA_VIEWS = {
  // 1. HOME: Dead Center & Close
  // (Untouched per your request)
  home: {
    position: new THREE.Vector3(0, 0, 4.5),
    lookAt: new THREE.Vector3(0, 0, 0)
  },
  
  // 2. SKILLS: Tight Left Shoulder, Looking Slightly Up
  // Camera is pushed aggressively close to the left equator.
  // The lens points across to the right, and tilts just slightly upward.
  skills: {
    position: new THREE.Vector3(-2.2, 0.5, 1.5),
    lookAt: new THREE.Vector3(1.0, -0.8, -0.5)
  },
  
  // 3. PROJECTS: Extreme Underbelly Skim
  // Camera dives very tight under the right side of the orb.
  // Looks up and left, making the geometry feel like a massive canopy overhead.
  projects: {
    position: new THREE.Vector3(1.8, -1.2, 1.5),
    lookAt: new THREE.Vector3(-0.5, 0.5, -0.5)
  },
  
  // 4. EXPERIENCE: Tight North Pole Drop
  // Camera hovers just above the top surface of the geometry.
  // Looks down into the core, creating a highly detailed, abstract tech-texture.
  experience: {
    position: new THREE.Vector3(-0.2, 2.4, 1.8),
    lookAt: new THREE.Vector3(0.2, 0.3, -0.5)
  },
  
  // 5. CONTACT: The "Sunrise" Angle (Completely Redesigned)
  // Camera drops low to the bottom-right and looks diagonally upward across the face.
  // The glowing core radiates upward from the bottom, leaving the UI perfectly legible.
  contact: {
    position: new THREE.Vector3(1.5, -2.0, 2.5),
    lookAt: new THREE.Vector3(-0.5, -1.0, 0)
  },
};

export default function CameraController() {
  const activeSection = usePortfolioStore((state) => state.activeSection);

  // Track the current actual position and what it's looking at
  const currentPosition = useRef(new THREE.Vector3(0, 0, 5.5));
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((state, delta) => {
    // 1. Grab the target view based on the active tab
    const targetView = CAMERA_VIEWS[activeSection as keyof typeof CAMERA_VIEWS] || CAMERA_VIEWS.home;

    // 2. The Ease-Out Dampening Curve
    const dampSpeed = 1.0;
    const dampFactor = 1 - Math.exp(-dampSpeed * delta);

    // 3. Smoothly interpolate (lerp) both the camera's body AND its lens target
    currentPosition.current.lerp(targetView.position, dampFactor);
    currentLookAt.current.lerp(targetView.lookAt, dampFactor);

    // 4. Apply the math to the Three.js camera
    state.camera.position.copy(currentPosition.current);
    state.camera.lookAt(currentLookAt.current);
  });

  return null;
}