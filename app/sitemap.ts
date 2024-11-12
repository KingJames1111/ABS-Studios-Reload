import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://absstudios.com';
  
  const routes = [
    '',
    '/services',
    '/case-studies',
    '/about',
    '/contact',
    '/blog',
    '/resources',
    '/solutions/content-automation',
    '/solutions/brand-voice-ai',
    '/solutions/neural-analytics',
    '/solutions/distribution',
    '/solutions/roi-optimization'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}