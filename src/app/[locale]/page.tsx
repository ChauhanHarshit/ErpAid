import Hero from "./components/sections/hero"
import Features from "@/app/[locale]/components/sections/features"
import Stats from "@/app/[locale]/components/sections/stats"
import Testimonials from "@/app/[locale]/components/sections/testimonials"
import CTA from "@/app/[locale]/components/sections/cta"
import {useTranslations} from 'next-intl';
// import {Link} from '@/i18n/routing';

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  )
}
