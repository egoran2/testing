
import { useTranslations } from 'next-intl';

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  console.log('HomePage rendering for locale:', locale);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-blue-600">Test with Translations - {locale}</h1>
      <TestComponent />
    </div>
  );
}

function TestComponent() {
  const t = useTranslations('hero');
  
  return (
    <div className="mt-4">
      <h2 className="text-2xl font-semibold text-blue-800">{t('headline')}</h2>
      <p className="text-gray-600">{t('subheadline')}</p>
    </div>
  );
}