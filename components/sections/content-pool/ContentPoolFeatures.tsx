'use client';

import { motion } from 'framer-motion';
import { Database, Tags, Sparkles, Brain, Rocket, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';

const features = [
  {
    icon: Database,
    title: "Neural Content Vault",
    description: <>
      Your brand's{' '}
      <span className="text-2xl font-bold text-[hsl(var(--electric-green))]">cognitive core</span>{' '}
      - an AI-powered vault that{' '}
      <span className="italic text-[hsl(var(--flame-orange))]">learns and evolves</span>. 
      Transform scattered content into a{' '}
      <span className="font-semibold text-white">unified powerhouse</span>{' '}
      of brand intelligence.
    </>,
    gradient: "from-[hsl(var(--flame-orange))] to-[hsl(var(--flame-red))]",
    heading: "CENTRALIZE",
    delay: 0.1
  },
  {
    icon: Brain,
    title: "Living Idea Factory",
    description: <>
      A{' '}
      <span className="text-2xl text-[hsl(var(--electric-green))] font-bold">revolutionary system</span>{' '}
      that becomes the{' '}
      <span className="text-xl bg-gradient-to-r from-[hsl(var(--flame-orange))] to-[hsl(var(--flame-red))] bg-clip-text text-transparent font-bold">neural engine</span>{' '}
      of your brand, transforming every concept into{' '}
      <span className="italic text-[hsl(var(--flame-orange))]">high-impact content</span>.
    </>,
    gradient: "from-[hsl(var(--electric-green))] to-[hsl(var(--flame-orange))]",
    heading: "CREATE",
    delay: 0.2,
    isLarge: true
  },
  {
    icon: Tags,
    title: "Intelligent Organization",
    description: <>
      <span className="text-xl font-bold text-[hsl(var(--electric-green))]">AI-driven tagging</span>{' '}
      that understands{' '}
      <span className="italic text-[hsl(var(--flame-orange))]">context, sentiment, and impact</span>. 
      Find the perfect content in{' '}
      <span className="font-semibold text-white">seconds, not hours</span>. 
      Scale without chaos.
    </>,
    gradient: "from-[hsl(var(--flame-red))] to-[hsl(var(--royal-purple-light))]",
    heading: "OPTIMIZE",
    delay: 0.3
  },
  {
    icon: Target,
    title: "Omnichannel Distribution",
    description: <>
      <span className="text-xl font-bold text-[hsl(var(--electric-green))]">Strategic deployment</span>{' '}
      across{' '}
      <span className="italic text-[hsl(var(--flame-orange))]">
        social media, email, blogs, podcasts, and video platforms
      </span>. 
      Reach your audience{' '}
      <span className="font-semibold text-white">everywhere</span>{' '}
      with perfectly adapted content.
    </>,
    gradient: "from-[hsl(var(--royal-purple-light))] to-[hsl(var(--electric-green))]",
    heading: "DEPLOY",
    delay: 0.4
  },
  {
    icon: Sparkles,
    title: "AI Enhancement Engine",
    description: <>
      <span className="text-xl font-bold text-[hsl(var(--electric-green))]">
        Automatically optimize
      </span>{' '}
      every piece for{' '}
      <span className="italic text-[hsl(var(--flame-orange))]">maximum engagement</span>. 
      From{' '}
      <span className="font-semibold text-white">tone refinement to audience targeting</span>, 
      your content evolves for peak performance.
    </>,
    gradient: "from-[hsl(var(--flame-orange))] to-[hsl(var(--electric-green))]",
    heading: "AMPLIFY",
    delay: 0.5
  },
  {
    icon: Rocket,
    title: "Exponential Growth Engine",
    description: <>
      Scale your impact from{' '}
      <span className="text-xl font-bold text-[hsl(var(--electric-green))]">
        100,000 to 1,000,000+
      </span>{' '}
      touchpoints. Transform one piece into an{' '}
      <span className="italic text-[hsl(var(--flame-orange))]">entire campaign arsenal</span>{' '}
      that drives{' '}
      <span className="font-semibold text-white">unstoppable growth</span>.
    </>,
    gradient: "from-[hsl(var(--electric-green))] to-[hsl(var(--flame-red))]",
    heading: "SCALE",
    delay: 0.6
  }
];

export function ContentPoolFeatures() {
  return (
    <div className="flex flex-col gap-12 mb-16">
      {/* Main Feature - Living Idea Factory */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card className="bg-[hsl(var(--royal-purple-dark))] border-[hsl(var(--royal-purple-light)/0.2)] p-12 relative group hover:scale-[1.02] transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--flame-orange)/0.1)] to-[hsl(var(--flame-red)/0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
          
          <div className="relative flex items-start gap-8 mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--electric-green))] to-[hsl(var(--flame-orange))] rounded-full blur-xl opacity-50" />
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[hsl(var(--electric-green))] to-[hsl(var(--flame-orange))] p-6 relative">
                <Brain className="w-full h-full text-white" />
              </div>
            </div>
            <div>
              <h4 className="text-6xl font-bold font-orbitron text-[hsl(var(--electric-green))] mb-2">
                CREATE
              </h4>
              <h3 className="text-4xl font-bold text-white mb-2">Living Idea Factory</h3>
              <p className="text-xl text-[hsl(var(--flame-orange))] italic">Transform Concepts into Content Power</p>
            </div>
          </div>

          <p className="text-xl text-white leading-relaxed mb-8">
            A{' '}
            <span className="text-2xl text-[hsl(var(--electric-green))] font-bold">
              revolutionary system
            </span>{' '}
            that becomes the{' '}
            <span className="text-2xl bg-gradient-to-r from-[hsl(var(--flame-orange))] to-[hsl(var(--flame-red))] bg-clip-text text-transparent font-bold">
              neural engine
            </span>{' '}
            of your brand. Transform raw concepts into an{' '}
            <span className="italic text-[hsl(var(--flame-orange))]">
              interconnected network
            </span>{' '}
            of ideas ready for{' '}
            <span className="font-semibold text-white">
              explosive growth
            </span>.
          </p>
        </Card>
      </motion.div>

      {/* Other Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.filter(f => !f.isLarge).map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: feature.delay }}
          >
            <Card className="bg-[hsl(var(--royal-purple-dark))] border-[hsl(var(--royal-purple-light)/0.2)] p-8 relative group hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--flame-orange)/0.1)] to-[hsl(var(--flame-red)/0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--flame-orange)/0.3)] to-[hsl(var(--flame-red)/0.3)] rounded-full blur-xl" />
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.gradient} p-4 flex items-center justify-center`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              <h4 className="text-2xl font-bold font-orbitron text-[hsl(var(--electric-green))] mb-2">
                {feature.heading}
              </h4>

              <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-lg leading-relaxed">{feature.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}