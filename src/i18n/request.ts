import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

// Define a union type for supported locales
type Locale = (typeof routing.locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
  // Await the promise to get the actual locale value
  const resolvedLocale = await requestLocale;

  const locale: Locale | undefined = routing.locales.includes(resolvedLocale as Locale)
    ? (resolvedLocale as Locale)
    : (routing.defaultLocale as Locale);

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
