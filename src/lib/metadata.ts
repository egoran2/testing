import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  locale: string;
  path?: string;
  image?: string;
}

export function generateSEO({
  title,
  description,
  locale,
  path = '',
  image = '/images/og-image.jpg'
}: SEOProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://euresidencypro.com';
  const url = `${baseUrl}/${locale}${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: 'EU Residency Pro',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
      languages: {
        'en': `${baseUrl}/en${path}`,
        'ru': `${baseUrl}/ru${path}`,
        'cs': `${baseUrl}/cs${path}`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}