"use client";

import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Icosahedron, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function InteractiveObject() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport, mouse } = useThree();

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Base rotation
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;

      // Mouse tracking
      const targetX = (mouse.x * viewport.width) / 2;
      const targetY = (mouse.y * viewport.height) / 2;
      
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX * 0.1, 0.05);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY * 0.1, 0.05);
    }
  });

  return (
    <Icosahedron ref={meshRef} args={[1, 0]} position={[0, 0, 0]}>
      <MeshTransmissionMaterial
        backside
        samples={4}
        thickness={0.5}
        chromaticAberration={0.3}
        anisotropy={0.1}
        distortion={0.5}
        distortionScale={0.5}
        temporalDistortion={0.1}
        color="#ffffff"
      />
    </Icosahedron>
  );
}
