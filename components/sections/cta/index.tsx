'use client';

import { motion } from 'framer-motion';
import { ActionButton } from './ActionButton';
import { Brain } from 'lucide-react';

export function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--royal-purple-dark))] to-[hsl(var(--bg-dark))]" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--flame-orange)/0.3),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--flame-red)/0.3),transparent_70%)]" />
        </div>
      </div>

      <div className="container px-4 mx-auto relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[hsl(var(--royal-purple-light)/0.3)] backdrop-blur-sm mb-8 border border-[hsl(var(--royal-purple-light)/0.2)]">
              <Brain className="h-5 w-5 text-[hsl(var(--electric-green))]" />
              <span className="text-base font-medium tracking-wide text-white">
                Neural-Powered Growth Awaits
              </span>
            </div>

            <h2 className="font-orbitron text-5xl md:text-6xl font-bold mb-8 text-white">
              Transform Your Brand with{' '}
              <span className="block mt-2 bg-gradient-to-r from-[hsl(var(--flame-orange))] to-[hsl(var(--flame-red))] bg-clip-text text-transparent">
                AI-Driven Excellence
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Join the ranks of forward-thinking brands achieving{' '}
              <span className="text-[hsl(var(--flame-orange))] font-semibold">110X growth</span>{' '}
              through our{' '}
              <span className="text-[hsl(var(--electric-green))] font-semibold">neural marketing engine</span>.
            </p>

            <ActionButton />
          </motion.div>
        </div>
      </div>
    </section>
  );
}