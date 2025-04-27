import { ReactNode } from 'react';

declare module '@/components/three-d-scene' {
  export const ThreeDScene: React.FC<{}>;
}

declare module '@/components/scroll-indicator' {
  export interface ScrollIndicatorProps {
    scrollY: number;
  }
  export const ScrollIndicator: React.FC<ScrollIndicatorProps>;
}

declare module '@/components/parallax-section' {
  export interface ParallaxSectionProps {
    id: string;
    className?: string;
    direction: 'up' | 'right' | 'left' | 'down';
    children: ReactNode;
    ref?: React.RefObject<HTMLElement>;
  }
  export const ParallaxSection: React.FC<ParallaxSectionProps>;
}

declare module '@/components/animated-background' {
  export const AnimatedBackground: React.FC;
}

declare module '@/components/animated-button' {
  export interface AnimatedButtonProps {
    children: ReactNode;
    className?: string;
    variant?: 'default' | 'outline';
    onClick?: () => void;
    href?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
  }
  export const AnimatedButton: React.FC<AnimatedButtonProps>;
}

declare module '@/components/interactive-feature-card' {
  export interface InteractiveFeatureCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    delay?: number;
    color?: string;
  }
  export const InteractiveFeatureCard: React.FC<InteractiveFeatureCardProps>;
}

declare module '@/components/animated-text' {
  export interface AnimatedTextProps {
    text: string;
    className?: string;
    delay?: number;
    staggerChildren?: number;
  }
  export const AnimatedText: React.FC<AnimatedTextProps>;
}

declare module '@/components/floating-particles' {
  export interface FloatingParticlesProps {
    count?: number;
    color?: string;
    size?: number;
    className?: string;
  }
  export const FloatingParticles: React.FC<FloatingParticlesProps>;
} 