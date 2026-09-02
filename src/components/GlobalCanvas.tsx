"use client";

import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { ReactNode } from 'react';
import Particles from './Particles';
import InteractiveObject from './InteractiveObject';

export default function GlobalCanvas({ children }: { children?: ReactNode }) {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Particles />
        <InteractiveObject />
        
        {/* We can inject route-specific 3D objects as children later using a global state or React Context, 
            but for now, we'll keep it simple with a persistent background effect */}
        {children}

        <Preload all />
      </Canvas>
    </div>
  );
}
