'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ActionButton() {
  return (
    <div className="relative group">
      {/* Animated background glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[hsl(var(--flame-orange))] to-[hsl(var(--flame-red))] rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
      
      {/* Main button */}
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
          <span>Activate Your AI Future</span>
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          <Sparkles className="absolute top-1/2 -right-12 w-4 h-4 text-[hsl(var(--flame-orange))] transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-12 transition-all duration-500" />
        </span>
      </Button>
    </div>
  );
}