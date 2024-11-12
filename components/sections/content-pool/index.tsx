'use client';

import { ContentPoolHeader } from './ContentPoolHeader';
import { ContentPoolFeatures } from './ContentPoolFeatures';
import { ContentPoolCTA } from './ContentPoolCTA';

export function ContentPool() {
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
        <ContentPoolHeader />
        <ContentPoolFeatures />
        <ContentPoolCTA />
      </div>
    </section>
  );
}