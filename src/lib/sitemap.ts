import type { MetadataRoute } from 'next';
import type { Metadata } from 'next';

export const siteConfig = {
  name: 'Opsio',
  description: 'Secure environment variable management for teams and projects.',
  url: 'https://rusil.me',
  repo: 'https://github.com/rusilkoirala/Opsio',
  github: 'https://github.com/rusilkoirala',
  authors: [
    {
      name: 'Rusil Koirala',
      url: 'https://rusil.me',
    },
  ],
  ogImage: '/og.png',
  logo: '/logo.svg',
  twitter: '@rusilkoirala',
};

const title = `${siteConfig.name} - Secure environment variable management`;

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: siteConfig.authors,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitter,
  },
  metadataBase: new URL(siteConfig.url),
};

export function generateSitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  return [
    { url: `${siteConfig.url}/`, lastModified: now },
    { url: `${siteConfig.url}/privacy`, lastModified: now },
    { url: `${siteConfig.url}/terms`, lastModified: now },
    { url: `${siteConfig.url}/contact`, lastModified: now },
    { url: `${siteConfig.url}/dashboard`, lastModified: now },
  ];
}
