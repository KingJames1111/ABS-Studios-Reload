'use client';

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { ProcessStep } from './types';

interface ProcessCardProps extends ProcessStep {
  isLarge?: boolean;
}

export function ProcessCard({ 
  number, 
  icon: Icon, 
  title, 
  subtitle, 
  heading, 
  description: Description,
  features = [],
  isLarge 
}: ProcessCardProps) {
  return (
    <Card className={cn(
      "bg-[#2A0E4F] border-[hsl(var(--royal-purple-light)/0.2)]",
      "relative overflow-hidden group hover:scale-[1.02] transition-all duration-300",
      isLarge ? "p-12" : "p-8"
    )}>
      <div className="absolute inset-0 bg-gradient-card opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="flex items-start gap-6 mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--electric-green))] to-[hsl(var(--flame-orange))] rounded-full blur-xl opacity-50" />
            <div className={cn(
              "rounded-full bg-gradient-to-r from-[hsl(var(--electric-green))] to-[hsl(var(--flame-orange))] p-6",
              isLarge ? "w-24 h-24" : "w-20 h-20"
            )}>
              <Icon className="w-full h-full text-white" />
            </div>
          </div>
          <div>
            <h3 className={cn(
              "font-bold text-white mb-2",
              isLarge ? "text-4xl" : "text-3xl"
            )}>{title}</h3>
            <p className="text-[hsl(var(--flame-orange))] text-xl italic">{subtitle}</p>
          </div>
        </div>

        <h4 className={cn(
          "font-bold font-orbitron mb-6",
          heading === "DISCOVER" ? "text-[hsl(var(--flame-orange))]" :
          heading === "IMAGINE" ? "text-[hsl(var(--electric-green))]" :
          heading === "AMPLIFY" ? "text-[hsl(var(--flame-red))]" :
          "text-[hsl(var(--electric-green))]",
          isLarge ? "text-6xl" : "text-5xl"
        )}>
          {heading}
        </h4>

        <div className="mb-8">
          <Description />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 bg-[#1C0B29]/90 border border-[hsl(var(--electric-green))] rounded-xl"
            >
              <h5 className="text-[hsl(var(--electric-green))] text-xl font-bold mb-3">
                {feature.title}
              </h5>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}