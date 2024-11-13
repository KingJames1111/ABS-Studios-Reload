'use client';

import { Brain, Mail, Phone, Building2, Twitter, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#0A0416] border-t border-[hsl(var(--royal-purple-light)/0.2)]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Company Info */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-2 mb-4">
              <Brain className="h-8 w-8 text-[hsl(var(--electric-green))]" />
              <h3 className="text-2xl font-orbitron font-bold text-white">ABS Studios</h3>
            </div>
            <p className="text-[hsl(var(--text-muted))] mb-6">
              Transform your marketing with AI-powered automation and neural pattern recognition. Achieve 110X content reach with automated content creation and distribution.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com/absstudios" className="text-[hsl(var(--text-muted))] hover:text-[hsl(var(--flame-orange))] transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://linkedin.com/company/abs-studios" className="text-[hsl(var(--text-muted))] hover:text-[hsl(var(--flame-orange))] transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://github.com/abs-studios" className="text-[hsl(var(--text-muted))] hover:text-[hsl(var(--flame-orange))] transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3 text-[hsl(var(--text-muted))]">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Resources</Link></li>
            </ul>
          </div>

          {/* Core Solutions */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold text-white mb-4">Core Solutions</h4>
            <ul className="space-y-3 text-[hsl(var(--text-muted))]">
              <li><Link href="/solutions/neural-codex" className="hover:text-white transition-colors">Neural Codex System</Link></li>
              <li><Link href="/solutions/brand-voice" className="hover:text-white transition-colors">Brand Voice AI</Link></li>
              <li><Link href="/solutions/content-automation" className="hover:text-white transition-colors">Content Automation</Link></li>
              <li><Link href="/solutions/distribution" className="hover:text-white transition-colors">Multi-Channel Distribution</Link></li>
              <li><Link href="/solutions/analytics" className="hover:text-white transition-colors">AI-Powered Analytics</Link></li>
            </ul>
          </div>

          {/* Advanced Solutions */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold text-white mb-4">Advanced Solutions</h4>
            <ul className="space-y-3 text-[hsl(var(--text-muted))]">
              <li><Link href="/solutions/splinter-marketing" className="hover:text-white transition-colors">Splinter Marketing</Link></li>
              <li><Link href="/solutions/content-pool" className="hover:text-white transition-colors">Neural Content Pool</Link></li>
              <li><Link href="/solutions/process-automation" className="hover:text-white transition-colors">Process Automation</Link></li>
              <li><Link href="/solutions/business-automation" className="hover:text-white transition-colors">Business Automation</Link></li>
              <li><Link href="/solutions/strategic-marketing" className="hover:text-white transition-colors">Strategic Marketing</Link></li>
              <li><Link href="/solutions/roi-optimization" className="hover:text-white transition-colors">ROI Optimization</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-[hsl(var(--text-muted))]">
                <Mail className="w-5 h-5 text-[hsl(var(--flame-orange))] flex-shrink-0" />
                <a href="mailto:YourFuture@ABS.Studios" className="hover:text-white transition-colors">
                  YourFuture@ABS.Studio
                </a>
              </div>
              <div className="flex items-center gap-3 text-[hsl(var(--text-muted))]">
                <Phone className="w-5 h-5 text-[hsl(var(--flame-orange))] flex-shrink-0" />
                <a href="tel:+18582243608" className="hover:text-white transition-colors">
                  +1 (858) 224-3608
                </a>
              </div>
              <div className="flex items-start gap-3 text-[hsl(var(--text-muted))]">
                <Building2 className="w-5 h-5 mt-1 text-[hsl(var(--flame-orange))] flex-shrink-0" />
                <div>
                  <span className="block">6790 Embarcadero Lane</span>
                  <span className="block">Suite 100</span>
                  <span className="block">Carlsbad, CA 92011</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[hsl(var(--royal-purple-light)/0.2)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[hsl(var(--text-muted))]">
              © {new Date().getFullYear()} ABS Studios. All rights reserved.
            </p>
            <div className="flex items-center gap-8 text-[hsl(var(--text-muted))]">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
              <span>© 2024 ABS Studios</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}