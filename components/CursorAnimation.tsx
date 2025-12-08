"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface TrailParticle {
  id: number;
  x: number;
  y: number;
  opacity: number;
}

const CursorAnimation = () => {
  const [isTouch, setIsTouch] = useState(false);
  const [trails, setTrails] = useState<TrailParticle[]>([]);
  const trailIdRef = useRef(0);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Smooth spring animation for cursor
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device supports touch
    const checkTouch = () => {
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    
    checkTouch();
    
    // Don't render on touch devices
    if (isTouch) return;

    let animationFrameId: number;
    let lastTrailTime = 0;
    const trailInterval = 30; // Create trail every 30ms

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Create trail particles
      const currentTime = Date.now();
      if (currentTime - lastTrailTime > trailInterval) {
        const newTrail: TrailParticle = {
          id: trailIdRef.current++,
          x: e.clientX,
          y: e.clientY,
          opacity: 1,
        };

        setTrails(prev => [...prev.slice(-15), newTrail]); // Keep last 15 trails
        lastTrailTime = currentTime;
      }
    };

    // Fade out trails
    const fadeTrails = () => {
      setTrails(prev => 
        prev
          .map(trail => ({ ...trail, opacity: trail.opacity - 0.05 }))
          .filter(trail => trail.opacity > 0)
      );
      animationFrameId = requestAnimationFrame(fadeTrails);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(fadeTrails);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isTouch, cursorX, cursorY]);

  // Don't render on touch devices
  if (isTouch) return null;

  return (
    <div className="cursor-container pointer-events-none fixed inset-0 z-50">
      {/* Main cursor glow */}
      <motion.div
        className="cursor-glow"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
      
      {/* Trail particles */}
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: trail.x,
            top: trail.y,
            opacity: trail.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default CursorAnimation;
