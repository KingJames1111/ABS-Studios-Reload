'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";

export function CTA() {
  const handleStrategyClick = () => {
    window.location.href = '#contact';
  };

  const handleDemoClick = () => {
    window.location.href = '#demo';
  };

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--royal-purple-dark))] to-[hsl(var(--bg-dark))]" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--flame-orange)/0.3),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--flame-red)/0.3),transparent_70%)]" />
        </div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-orbitron text-5xl md:text-6xl font-bold mb-8 text-white">
            Ready to Transform 
            <span className="block mt-2 bg-gradient-to-r from-[hsl(var(--flame-orange))] to-[hsl(var(--flame-red))] bg-clip-text text-transparent">
              Your Marketing Strategy?
            </span>
          </h2>
          
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Take the first step towards unprecedented growth with our AI-powered solutions
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="relative flex items-center gap-4">
              <motion.div
                animate={{ 
                  x: [0, 10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-[hsl(var(--electric-green))]"
              >
                <ArrowDownRight className="w-8 h-8 rotate-[-45deg] drop-shadow-[0_0_8px_rgba(0,255,0,0.3)]" />
              </motion.div>

              <Button 
                className="cta-primary text-lg px-8 py-6 group relative overflow-hidden"
                onClick={handleStrategyClick}
              >
                <span className="relative z-10">Get <span className="text-[hsl(var(--royal-purple-dark))] font-bold">YOUR</span> Strategy Call</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <Button 
              variant="outline"
              className="text-lg px-8 py-6 bg-[hsl(var(--bg-dark))] border-[hsl(var(--royal-purple-light)/0.2)] text-white hover:bg-[hsl(var(--royal-purple-dark)/0.1)] hover:border-[hsl(var(--royal-purple-light)/0.3)] group relative overflow-hidden transition-all duration-300"
              onClick={handleDemoClick}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(var(--flame-orange)/0.05)] via-[hsl(var(--flame-red)/0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--royal-purple-light)/0.1)] via-[hsl(var(--royal-purple-dark)/0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Watch Demo</span>
              <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[hsl(var(--bg-dark))] to-transparent" />
    </section>
  );
}