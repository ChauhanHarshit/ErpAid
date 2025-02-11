import { Inter } from "next/font/google"
import "../globals.css"
import Navbar from "@/app/[locale]/components/layout/navbar"
import Footer from "@/app/[locale]/components/layout/footer"
import type React from "react" // Added import for React
import { Toaster } from "@/app/[locale]/components/ui/toaster"

// const inter = Inter({ subsets: ["latin"] })

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Navbar />
//         <main>{children}</main>
//         <Toaster />
//         <Footer />
//       </body>
//     </html>
//   )
// }



import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
 
export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
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