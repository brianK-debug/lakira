'use client';

import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface FadeInOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function FadeInOnScroll({ children, className = '', delay = 0 }: FadeInOnScrollProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
