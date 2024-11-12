import { Metadata } from 'next';
import { Hero } from '@/components/sections/hero';
import { ImagineTransition } from '@/components/sections/transitions/ImagineTransition';
import { Process } from '@/components/sections/process';
import { ProcessToContent } from '@/components/sections/transitions/ProcessToContent';
import { ContentPool } from '@/components/sections/content-pool';
import { Testimonials } from '@/components/sections/testimonials';
import { SuccessToFAQ } from '@/components/sections/transitions/SuccessToFAQ';
import { FAQ } from '@/components/sections/faq';
import { CTA } from '@/components/sections/cta';
import { Footer } from '@/components/sections/footer';

export const metadata: Metadata = {
  title: 'AI Marketing Automation | Neural Pattern Recognition for 110X Growth',
  description: 'Transform your marketing with AI-powered automation and neural pattern recognition. Achieve 110X content reach with automated content creation and distribution.',
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <h1 className="sr-only">
        AI Marketing Automation Platform - Transform Your Marketing with Neural Pattern Recognition
      </h1>
      <Hero />
      <ImagineTransition />
      <Process />
      <ProcessToContent />
      <ContentPool />
      <Testimonials />
      <SuccessToFAQ />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}