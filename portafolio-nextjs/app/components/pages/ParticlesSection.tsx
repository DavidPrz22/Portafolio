"use client";

import { ConstellationField } from "./ConstellationField";
import { ConstellationConfig } from '@/app/lib/types';
import { useState } from 'react';
export const ParticlesSection: React.FC = () => {

    const [constellationConfig, setConstellationConfig] = useState<ConstellationConfig>({
    particleCount: 65,
    connectionDistance: 130,
    mouseRadius: 150,
    speed: 0.4,
    triangles: true,
    glowEffect: true,
    interactive: true,
  });

    return (
    <div
        id="persistent-constellation-bg"
        className="fixed top-0 right-0 h-screen w-full lg:w-3/5 xl:w-7/12 pointer-events-auto z-0 overflow-hidden"
      >
        <ConstellationField
          config={constellationConfig}
        />
      </div>
      )
};