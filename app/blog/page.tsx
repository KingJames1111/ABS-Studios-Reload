import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | ABS Studios - AI Marketing Insights',
  description: 'Explore the latest insights on AI marketing automation, content strategy, and neural pattern recognition.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[hsl(var(--bg-dark))]">
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 font-orbitron">
          Blog
        </h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-[hsl(var(--text-muted))] mb-8">
            Coming soon - Expert insights on AI marketing automation and content strategy.
          </p>
        </div>
      </div>
    </main>
  );
}