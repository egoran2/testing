import {NextIntlClientProvider} from 'next-intl';

const locales = ['en', 'ru', 'cs'];

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;
  console.log('LocaleLayout - locale:', locale);
  
  // Ensure that the incoming `locale` is valid
  if (!locales.includes(locale)) {
    console.log('LocaleLayout - locale not found:', locale);
    return <div>Invalid locale</div>;
  }

  // Load messages directly for the specific locale
  let messages = {};
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
    console.log('LocaleLayout - messages loaded for locale:', locale);
  } catch (error) {
    console.log('LocaleLayout - error loading messages for locale:', locale, error);
    // Fallback to English messages
    try {
      messages = (await import(`../../../messages/en.json`)).default;
      console.log('LocaleLayout - using fallback English messages');
    } catch (fallbackError) {
      console.log('LocaleLayout - failed to load fallback messages:', fallbackError);
      messages = {};
    }
  }

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <div className="flex flex-col min-h-screen">
        <nav className="bg-blue-600 text-white p-4">
          <div className="container mx-auto">
            <h1 className="text-xl font-bold">EU Residency Pro ({locale})</h1>
          </div>
        </nav>
        <main className="flex-1">
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-4">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 EU Residency Pro</p>
          </div>
        </footer>
      </div>
    </NextIntlClientProvider>
  );
}