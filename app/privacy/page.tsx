import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | ABS Studios',
  description: 'Learn about how ABS Studios protects your privacy and handles your data.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[hsl(var(--bg-dark))]">
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 font-orbitron">
          Privacy Policy
        </h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-[hsl(var(--text-muted))] mb-8">
            Coming soon - Our commitment to protecting your privacy.
          </p>
        </div>
      </div>
    </main>
  );
}