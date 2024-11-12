import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | ABS Studios - Join Our Team',
  description: 'Join ABS Studios and help shape the future of AI-powered marketing automation.',
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[hsl(var(--bg-dark))]">
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 font-orbitron">
          Careers
        </h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-[hsl(var(--text-muted))] mb-8">
            Coming soon - Join our team of innovators in AI marketing automation.
          </p>
        </div>
      </div>
    </main>
  );
}