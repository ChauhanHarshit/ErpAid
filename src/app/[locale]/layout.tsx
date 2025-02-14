import "../globals.css"
import Navbar from "@/app/[locale]/components/layout/navbar"
import Footer from "@/app/[locale]/components/layout/footer"
import type React from "react"
import { Toaster } from "@/app/[locale]/components/ui/toaster"

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

// Assuming routing.locales is like ['en', 'fr', 'de']
type Locale = (typeof routing.locales)[number];

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Wait for params properly
  const { locale } = await Promise.resolve(params);

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  // Providing all messages to the client
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Toaster />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
