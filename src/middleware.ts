import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
import {NextRequest, NextResponse} from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // Get the locale from the pathname
  const pathname = request.nextUrl.pathname;
  const locale = pathname.split('/')[1] || 'en';
  
  console.log('middleware - pathname:', pathname, 'detected locale:', locale);
  
  // Call the next-intl middleware
  const response = intlMiddleware(request);
  
  // Add the locale to the response headers so request.ts can access it
  if (response instanceof NextResponse) {
    response.headers.set('x-locale', locale);
    response.headers.set('x-pathname', pathname);
  }
  
  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/((?!_next|_vercel|.*\\..*).*)', '/(cs|en|ru)/:path*']
};