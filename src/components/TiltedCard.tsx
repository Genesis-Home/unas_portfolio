import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltedCardProps {
  children: React.ReactNode;
  glowColor?: string;
  className?: string;
}

export const TiltedCard: React.FC<TiltedCardProps> = ({ 
  children, 
  glowColor = "rgba(37, 99, 235, 0.2)",
  className = "" 
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Rotation values for the 3D tilt effect
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  // Glow position for the mouse-follow effect
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Normalize coordinates for rotation
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
    
    // Update glow position in pixels
    setGlowPos({ x: mouseX, y: mouseY });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setOpacity(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className={`relative group rounded-[40px] transition-all duration-300 ${className}`}
    >
      {/* Dynamic Glow Layer */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0 rounded-[40px] overflow-hidden"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${glowPos.x}px ${glowPos.y}px, ${glowColor}, transparent 40%)`
        }}
      />
      
      {/* Content Container (Layered for 3D depth) */}
      <div 
        className="relative z-10 w-full h-full bg-[#090d16]/55 backdrop-blur-xl border border-white/5 shadow-2xl overflow-hidden rounded-[40px]"
        style={{ transform: "translateZ(50px)" }}
      >
        {children}
      </div>
      
      {/* Outer Border Glow (Subtle) */}
      <div className="absolute -inset-px bg-gradient-to-br from-primary/10 to-accent/10 rounded-[40px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};
