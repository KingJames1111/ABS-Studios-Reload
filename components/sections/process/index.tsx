'use client';

import { BackgroundEffects } from './BackgroundEffects';
import { ProcessHeader } from './ProcessHeader';
import { ProcessCard } from './ProcessCard';
import { processSteps } from './data';

export function Process() {
  return (
    <section className="relative py-32 overflow-hidden">
      <BackgroundEffects />
      
      <div className="container px-4 mx-auto relative z-10">
        <ProcessHeader />
        
        <div className="flex flex-col gap-12">
          {/* Main Feature - Build Your Brand's Big Brain */}
          <ProcessCard {...processSteps[1]} isLarge />
          
          {/* Define Your Voice and Create & Multiply side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProcessCard {...processSteps[0]} />
            <ProcessCard {...processSteps[2]} />
          </div>
          
          {/* Measure & Refine */}
          <ProcessCard {...processSteps[3]} />
        </div>
      </div>
    </section>
  );
}