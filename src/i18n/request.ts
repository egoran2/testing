import {getRequestConfig} from 'next-intl/server';
import {headers} from 'next/headers';

const locales = ['en', 'ru', 'cs'];

export default getRequestConfig(async ({locale}) => {
  console.log('request.ts - locale received:', locale);
  
  // Get locale from URL path since the locale parameter is undefined
  let actualLocale = locale;
  
  if (!actualLocale) {
    try {
      const headersList = await headers();
      // Get locale from middleware header
      const localeFromHeader = headersList.get('x-locale');
      const pathname = headersList.get('x-pathname') || '';
      
      console.log('request.ts - locale from header:', localeFromHeader);
      console.log('request.ts - pathname from header:', pathname);
      
      if (localeFromHeader && locales.includes(localeFromHeader)) {
        actualLocale = localeFromHeader;
      } else {
        // Fallback: extract from pathname
        const pathSegments = pathname.split('/').filter(Boolean);
        const firstSegment = pathSegments[0];
        
        if (firstSegment && locales.includes(firstSegment)) {
          actualLocale = firstSegment;
        } else {
          actualLocale = 'en';
        }
      }
    } catch (error) {
      console.log('request.ts - error getting headers:', error);
      actualLocale = 'en';
    }
  }
  
  console.log('request.ts - using locale:', actualLocale);

  return {
    locale: actualLocale,
    messages: (await import(`../../messages/${actualLocale}.json`)).default
  };
});