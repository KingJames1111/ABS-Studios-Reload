'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ContentPoolCTA() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="text-center"
    >
      <div className="max-w-4xl mx-auto bg-[hsl(var(--royal-purple-dark)/0.5)] border border-[hsl(var(--royal-purple-light)/0.2)] rounded-xl p-12 backdrop-blur-sm">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--royal-purple-light)/0.3)] backdrop-blur-sm mb-6">
          <Zap className="h-5 w-5 text-[hsl(var(--electric-green))]" />
          <span className="text-sm font-medium text-white">Transform Your Content Today</span>
        </div>

        <h3 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 bg-gradient-to-r from-white via-[hsl(var(--flame-orange))] to-[hsl(var(--text-light)/0.9)] bg-clip-text text-transparent">
          Ready to Unleash Your Content's Full Potential?
        </h3>
        
        <p className="text-xl text-white mb-8 leading-relaxed">
          Join brands achieving <span className="text-[hsl(var(--flame-orange))] font-semibold">110X content reach</span> with our AI-powered content pool.{" "}
          <span className="text-[hsl(var(--electric-green))] italic">Transform your media into an unstoppable growth engine.</span>
        </p>

        <Button 
          className="cta-primary text-lg px-8 py-6 group relative overflow-hidden"
          onClick={() => window.location.href = '#contact'}
        >
          <span className="relative z-10">Activate Your Content Pool</span>
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--flame-orange))] to-[hsl(var(--flame-red))] opacity-0 group-hover:opacity-100 transition-opacity" />
        </Button>
      </div>
    </motion.div>
  );
}