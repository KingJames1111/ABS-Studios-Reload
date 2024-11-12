import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | ABS Studios - AI Marketing Automation',
  description: 'Learn about ABS Studios and our mission to transform marketing through AI-powered automation and neural pattern recognition.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[hsl(var(--bg-dark))]">
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 font-orbitron">
          About ABS Studios
        </h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-[hsl(var(--text-muted))] mb-8">
            Coming soon - Our story of transforming marketing through AI innovation.
          </p>
        </div>
      </div>
    </main>
  );
}