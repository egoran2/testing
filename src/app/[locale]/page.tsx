
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import ProcessSection from '@/components/ProcessSection';
import TrustSection from '@/components/TrustSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import QuizCTA from '@/components/QuizCTA';
import { generateSEO } from '@/lib/metadata';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo' });
  
  return generateSEO({
    title: t('home.title'),
    description: t('home.description'),
    locale,
    path: '/'
  });
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  return (
    <main className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <ProcessSection />
      <TrustSection />
      <TestimonialsSection />
      <QuizCTA />
    </main>
  );
}