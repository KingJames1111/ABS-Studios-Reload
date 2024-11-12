import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | ABS Studios',
  description: 'Review the terms of service for ABS Studios marketing automation platform.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[hsl(var(--bg-dark))]">
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 font-orbitron">
          Terms of Service
        </h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-[hsl(var(--text-muted))] mb-8">
            Coming soon - Our terms of service and platform usage guidelines.
          </p>
        </div>
      </div>
    </main>
  );
}