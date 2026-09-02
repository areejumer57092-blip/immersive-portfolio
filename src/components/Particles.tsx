"use client";

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Particles() {
  const count = 300;
  const mesh = useRef<THREE.InstancedMesh>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      // Create random starting phases and velocities
      const t = Math.random() * 100;
      // Spread them wide across the view
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 10 - 5;
      // Very slow drift speed
      const speed = 0.001 + Math.random() * 0.002;
      
      temp.push({ t, speed, x, y, z });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(() => {
    particles.forEach((particle, i) => {
      let { t, speed, x, y, z } = particle;
      // Slowly advance time
      t = particle.t += speed;
      
      // Calculate slow, elegant drifting drift based on sine waves
      const dx = Math.sin(t * 0.5) * 2;
      const dy = Math.cos(t * 0.4) * 2;
      
      dummy.position.set(x + dx, y + dy, z);
      
      // Subtle pulsing scale
      const scale = 0.5 + Math.sin(t * 2) * 0.2;
      dummy.scale.set(scale, scale, scale);
      
      dummy.updateMatrix();
      
      if (mesh.current) {
        mesh.current.setMatrixAt(i, dummy.matrix);
      }
    });
    
    if (mesh.current) {
      mesh.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <>
      {/* Fog to hide particles as they go deep into the Z-axis */}
      <fog attach="fog" args={['#050507', 5, 15]} />
      
      <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.3} />
      </instancedMesh>
    </>
  );
}
