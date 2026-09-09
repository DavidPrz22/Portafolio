export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  radius: number;
  alpha: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  color: string;
  isHub: boolean;
  glowRadius: number;
}

export interface ConstellationConfig {
  particleCount: number;
  connectionDistance: number;
  mouseRadius: number;
  speed: number;
  triangles: boolean;
  glowEffect: boolean;
  interactive: boolean;
}
