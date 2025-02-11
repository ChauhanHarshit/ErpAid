"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/app/[locale]/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useRouter, usePathname } from "next/navigation" // Add usePathname
import { useTranslation } from "next-i18next"
import { Popover, PopoverContent, PopoverTrigger } from "@/app/[locale]/components/ui/popover"
import {useTranslations} from 'next-intl';

export default function Navbar() {
  const t = useTranslations('HomePage');

  const router = useRouter();
  const pathname = usePathname(); // Get the current path
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    // i18n.changeLanguage(lng); // Change language using i18n
    // router.push(`/${lng}${pathname}`); // Navigate to the same path with the new language prefix
  };

  return (
    <motion.header
      className="top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-[#002D72]">
            ERPAid
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/services" className="text-gray-600 hover:text-[#4169E1] transition-colors">
              {t("services")}
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-[#4169E1] transition-colors">
              {t("about")}
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-[#4169E1] transition-colors">
              {t("blog")}
            </Link>
            <Button className="bg-[#4169E1] hover:bg-[#4169E1]/90">
              {t("requestDemo")}
            </Button>
            <Popover>
              <PopoverTrigger>
                <Image src={"/globe1.svg"} alt="language button" width={30} height={30} />
              </PopoverTrigger>
              <PopoverContent>
                <div className="flex flex-col gap-2">
                  <button onClick={() => changeLanguage("en")}>English</button>
                  <button onClick={() => changeLanguage("es")}>Español</button>
                  <button onClick={() => changeLanguage("fr")}>Français</button>
                  <button onClick={() => changeLanguage("de")}>Deutsch</button>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            className="md:hidden pt-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-4">
              <Link href="/services" className="text-gray-600 hover:text-[#4169E1] transition-colors">
                {t("services")}
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-[#4169E1] transition-colors">
                {t("about")}
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-[#4169E1] transition-colors">
                {t("blog")}
              </Link>
              <Button className="bg-[#4169E1] hover:bg-[#4169E1]/90 w-full">
                {t("requestDemo")}
              </Button>
              <Popover>
                <PopoverTrigger>
                  <Image src={"/globe1.svg"} alt="language button" width={30} height={30} />
                </PopoverTrigger>
                <PopoverContent>
                  <div className="flex flex-col gap-2">
                    <button onClick={() => changeLanguage("en")}>English</button>
                    <button onClick={() => changeLanguage("es")}>Español</button>
                    <button onClick={() => changeLanguage("fr")}>Français</button>
                    <button onClick={() => changeLanguage("de")}>Deutsch</button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
