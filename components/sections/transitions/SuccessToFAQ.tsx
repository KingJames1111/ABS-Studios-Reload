'use client';

import { motion } from 'framer-motion';
import { ArrowDownRight, Sparkles, Rocket, ArrowUpRight, Zap } from 'lucide-react';
import { useDots } from '@/lib/hooks/use-dots';
import { Button } from '@/components/ui/button';

export function SuccessToFAQ() {
  const dots = useDots(50, 44);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Previous background code remains the same */}
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
          {/* Previous badge and heading code remains the same */}
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[hsl(var(--royal-purple-light)/0.3)] backdrop-blur-sm mb-8 border border-[hsl(var(--royal-purple-light)/0.2)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Rocket className="h-5 w-5 text-[hsl(var(--electric-green))]" />
            <span className="text-base font-medium tracking-wide text-white">
              Future-Proof Your Brand
            </span>
            <Sparkles className="h-5 w-5 text-[hsl(var(--flame-orange))]" />
          </motion.div>

          <motion.h2 
            className="text-6xl md:text-7xl font-bold tracking-tight font-orbitron mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-[hsl(var(--flame-orange))] to-[hsl(var(--flame-red))] bg-clip-text text-transparent">
              Dominate Your Market
            </span>
          </motion.h2>

          <motion.p 
            className="text-2xl md:text-3xl text-white leading-relaxed max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Our{' '}
            <span className="text-[hsl(var(--electric-green))] font-bold">
              cutting-edge AI
            </span>{' '}
            and{' '}
            <span className="text-[hsl(var(--flame-orange))] font-semibold">
              strategic human expertise
            </span>{' '}
            are ready to{' '}
            <span className="text-white font-bold">
              position your brand
            </span>{' '}
            as a{' '}
            <span className="text-[hsl(var(--electric-green))] font-bold">
              market leader
            </span>. 
            <span className="block mt-4 text-2xl italic text-[hsl(var(--flame-orange))]">
              Drive exponential growth while slashing costs—your AI-powered future starts now.
            </span>
          </motion.p>

          {/* New CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative group inline-block"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[hsl(var(--flame-orange))] to-[hsl(var(--flame-red))] rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-500" />
            
            <Button 
              className="relative px-8 py-6 bg-gradient-to-r from-[hsl(var(--royal-purple-dark))] to-[hsl(var(--royal-purple-light))] hover:from-[hsl(var(--flame-orange))] hover:to-[hsl(var(--flame-red))] text-white border border-[hsl(var(--royal-purple-light)/0.3)] rounded-lg group overflow-hidden"
              onClick={() => window.location.href = '#contact'}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--electric-green)/0.2)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
                whileHover={{ scale: 1.2, rotate: 5 }}
              />
              
              <span className="relative flex items-center gap-3 text-lg font-semibold">
                <Zap className="w-5 h-5 text-[hsl(var(--electric-green))]" />
                <span>Future-Proof Your Growth</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                <Sparkles className="absolute top-1/2 -right-12 w-4 h-4 text-[hsl(var(--flame-orange))] transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-12 transition-all duration-500" />
              </span>
            </Button>
          </motion.div>
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
        <ArrowDownRight className="w-8 h-8 text-[hsl(var(--flame-orange))] drop-shadow-[0_0_8px_rgba(255,98,0,0.3)]" />
      </motion.div>
    </section>
  );
}