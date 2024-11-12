'use client';

import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import { useDots } from '@/lib/hooks/use-dots';

export function ProcessToContent() {
  const dots = useDots(50, 43);

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--royal-purple-dark))] to-[hsl(var(--bg-dark))]" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--flame-orange)/0.15),transparent_70%)]" />
        </div>
        
        {dots.map((dot, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 bg-[hsl(var(--flame-orange))] rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [dot.opacity, dot.opacity * 2, dot.opacity],
              scale: [dot.scale, dot.scale * 1.2, dot.scale],
              y: [0, -10, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: dot.delay,
              ease: "easeInOut"
            }}
            style={{
              left: dot.left,
              top: dot.top,
            }}
          />
        ))}
      </div>

      <div className="container px-4 mx-auto relative">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-8xl md:text-9xl font-bold text-[hsl(var(--electric-green))] tracking-tight font-orbitron italic mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            IMAGINE
          </motion.h2>

          <motion.p 
            className="text-2xl md:text-3xl text-white leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A{' '}
            <span className="text-[hsl(var(--electric-green))] font-bold text-3xl md:text-4xl">
              revolutionary
            </span>{' '}
            <span className="text-[hsl(var(--flame-orange))] font-bold text-3xl md:text-4xl">
              AI-powered content ecosystem
            </span>{' '}
            that transforms every piece of media into a{' '}
            <span className="text-[hsl(var(--electric-green))] font-semibold">
              force multiplier
            </span>. {' '}
            <span className="block mt-4 text-[hsl(var(--flame-orange))] italic font-semibold">
              Unleash your content's true potential
            </span>.
          </motion.p>
        </motion.div>
      </div>

      <motion.div 
        className="absolute left-1/2 bottom-8 transform -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ArrowDownRight className="w-8 h-8 text-[hsl(var(--electric-green))] drop-shadow-[0_0_8px_rgba(0,255,0,0.3)]" />
      </motion.div>
    </section>
  );
}