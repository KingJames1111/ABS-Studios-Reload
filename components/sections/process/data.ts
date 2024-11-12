import { Brain, Target, Rocket, Sparkles } from "lucide-react";
import type { ProcessStep } from './types';
import {
  DiscoverDescription,
  ImagineDescription,
  AmplifyDescription,
  OptimizeDescription
} from './descriptions';

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    icon: Target,
    title: "Define Your Voice",
    subtitle: "Unleash Your Brand's True Power",
    heading: "DISCOVER",
    description: DiscoverDescription,
    features: [
      {
        title: "Voice Mastery",
        description: "Forge a signature voice that thunders above the noise"
      },
      {
        title: "Audience Connection",
        description: "Strike deep, lasting chords with your target market"
      },
      {
        title: "Brand Impact",
        description: "Build a presence that ignites action and drives results"
      }
    ]
  },
  {
    number: "02",
    icon: Brain,
    title: "Build Your Brand's Big Brain",
    subtitle: "ABS's Neural Codex System - Your AI-powered network",
    heading: "IMAGINE",
    description: ImagineDescription,
    features: [
      {
        title: "Pattern Recognition",
        description: "Decode and amplify winning communication patterns"
      },
      {
        title: "Perceptual Integration",
        description: "Transform insights into engagement strategies"
      },
      {
        title: "Semantic Harmony",
        description: "Craft messages that resonate with precision"
      }
    ]
  },
  {
    number: "03",
    icon: Rocket,
    title: "Create & Multiply",
    subtitle: "Scale Your Impact",
    heading: "AMPLIFY",
    description: AmplifyDescription,
    features: [
      {
        title: "Content Transformation",
        description: "Turn every idea into an arsenal of high-impact content formats"
      },
      {
        title: "Strategic Distribution",
        description: "Dominate social media, high-traffic platforms, and earned media channels"
      },
      {
        title: "Organic Growth",
        description: "Explode your reach through organic content, not paid ads"
      }
    ]
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Measure & Refine",
    subtitle: "Optimize for Growth",
    heading: "OPTIMIZE",
    description: OptimizeDescription,
    features: [
      {
        title: "Performance Mastery",
        description: "Track and amplify every engagement metric"
      },
      {
        title: "Audience Intelligence",
        description: "Turn audience insights into strategic advantages"
      },
      {
        title: "Growth Acceleration",
        description: "Scale your impact with data-driven precision"
      }
    ]
  }
];