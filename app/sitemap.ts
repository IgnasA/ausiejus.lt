import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://ausiejus.lt/', priority: 1 },
    { url: 'https://ausiejus.lt/projects', priority: 0.8 },
  ];
}
