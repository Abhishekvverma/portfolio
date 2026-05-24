"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface InteractiveGlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

const InteractiveGlowCard = ({
  children,
  className = "",
  glowColor = "rgba(0, 112, 243, 0.15)",
}: InteractiveGlowCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const opacity = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 30 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  const smoothOpacity = useSpring(opacity, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    mouseX.set(x);
    mouseY.set(y);
    opacity.set(1);
  };

  const handleMouseLeave = () => {
    opacity.set(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden group ${className}`}
    >
      {/* Glow background spotlight */}
      <motion.div
        className="absolute pointer-events-none rounded-full blur-[80px] z-0"
        style={{
          width: "250px",
          height: "250px",
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 80%)`,
          left: smoothX,
          top: smoothY,
          x: "-50%",
          y: "-50%",
          opacity: smoothOpacity,
        }}
      />
      
      {/* Glow card sub-borders */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[inherit]"
        style={{
          border: "1px solid var(--interactive-glow-border)",
          background: `radial-gradient(400px circle at ${smoothX}px ${smoothY}px, var(--interactive-glow-bg), transparent 80%)`,
          WebkitMaskImage: `radial-gradient(300px circle at ${smoothX}px ${smoothY}px, black, transparent 80%)`,
        }}
      />

      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default InteractiveGlowCard;
