import type { MetadataRoute } from 'next';
import { siteUrl } from '@/content/site';

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: siteUrl,
  },
];

export default sitemap;
