import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | ABS Studios',
  description: 'Get in touch with ABS Studios for AI-powered marketing automation solutions.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[hsl(var(--bg-dark))]">
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 font-orbitron">
          Contact Us
        </h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-[hsl(var(--text-muted))] mb-8">
            Coming soon - Connect with our team to explore AI marketing solutions.
          </p>
        </div>
      </div>
    </main>
  );
}