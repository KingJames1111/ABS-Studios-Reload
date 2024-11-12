'use client';

import { motion } from 'framer-motion';
import { Database, Sparkles } from 'lucide-react';

export function ContentPoolHeader() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-24"
    >
      <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[hsl(var(--royal-purple-light)/0.3)] backdrop-blur-sm mb-8 border border-[hsl(var(--royal-purple-light)/0.2)]">
        <Database className="h-5 w-5 text-[hsl(var(--electric-green))]" />
        <span className="text-base font-medium tracking-wide text-white">
          Neural Content Ecosystem
        </span>
        <Sparkles className="h-5 w-5 text-[hsl(var(--flame-orange))]" />
      </div>

      <h2 className="font-orbitron text-5xl md:text-7xl font-bold text-white mb-6">
        Transform Every Idea Into
        <span className="block mt-4 bg-gradient-to-r from-[hsl(var(--flame-orange))] to-[hsl(var(--flame-red))] bg-clip-text text-transparent">
          110X Content Power
        </span>
      </h2>

      <p className="text-xl md:text-2xl text-white leading-relaxed max-w-3xl mx-auto">
        Your gateway to{' '}
        <span className="text-[hsl(var(--electric-green))] font-semibold">
          exponential growth
        </span>{' '}
        through intelligent content multiplication and{' '}
        <span className="text-[hsl(var(--flame-orange))] font-semibold">
          strategic distribution
        </span>
      </p>
    </motion.div>
  );
}