"use client"

import { useState, MouseEvent } from "react";
import Link from "next/link";
import { Button } from "@/app/[locale]/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Popover, PopoverContent, PopoverTrigger } from "@/app/[locale]/components/ui/popover";
import { useTranslations } from 'next-intl';

export default function Navbar() {
  const t = useTranslations('HomePage');

  const router = useRouter();
  const pathname = usePathname(); 
  const [isOpen, setIsOpen] = useState(false);
  const pathSegments = pathname.split("/");
  const currentLocale = pathSegments[1]; 

  const changeLanguage = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent default event
    const nextLocale = e.currentTarget.value;
    const newPath = `/${nextLocale}${pathname.substring(currentLocale.length + 1)}`;
    console.log('Attempting to change language to:', nextLocale);
    router.push(newPath);
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
          {/* Logo with link to the homepage */}
          <Link href={`/${currentLocale}`} className="flex text-xl font-bold text-[#002D72]">
            ERPAid <Image alt="aid icon" src={"/plus.png"} width={25} height={25} />
          </Link>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href={`/${currentLocale}/services`} className="text-gray-600 hover:text-[#4169E1] transition-colors">
              {t("services")}
            </Link>
            <Link href={`/${currentLocale}/about`} className="text-gray-600 hover:text-[#4169E1] transition-colors">
              {t("about")}
            </Link>
            <Button className="bg-[#4169E1] hover:bg-[#4169E1]/90"
              onClick={() => router.push(`/${currentLocale}/contact`)}
            >
              {t("requestDemo")}
            </Button>
            {/* Language selection dropdown */}
            <Popover>
              <PopoverTrigger>
                <Image src={"/globe1.svg"} alt="language button" width={30} height={30} />
              </PopoverTrigger>
              <PopoverContent>
                <div className="flex flex-col gap-2">
                  <button className="hover:bg-[#f0f0f3]" value='en' onClick={changeLanguage}>English</button>
                  <button className="hover:bg-[#f0f0f3]" value='fr' onClick={changeLanguage}>Français</button>
                  <button className="hover:bg-[#f0f0f3]" value='de' onClick={changeLanguage}>Deutsch</button>
                  <button className="hover:bg-[#f0f0f3]" value='ch' onClick={changeLanguage}>中文</button>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col mt-4 gap-4">
            <Link href={`/${currentLocale}/services`} className="text-gray-600 hover:text-[#4169E1] transition-colors" onClick={() => setIsOpen(false)}>
              {t("services")}
            </Link>
            <Link href={`/${currentLocale}/about`} className="text-gray-600 hover:text-[#4169E1] transition-colors" onClick={() => setIsOpen(false)}>
              {t("about")}
            </Link>
            <Button className="bg-[#4169E1] hover:bg-[#4169E1]/90"
              onClick={() => {
                router.push(`/${currentLocale}/contact`);
                setIsOpen(false);
              }}
            >
              {t("requestDemo")}
            </Button>
            {/* Language selection dropdown for mobile */}
            <div className="flex flex-col gap-2 border-t pt-4">
              <button className="hover:bg-[#f0f0f3]" value='en' onClick={changeLanguage}>English</button>
              <button className="hover:bg-[#f0f0f3]" value='fr' onClick={changeLanguage}>Français</button>
              <button className="hover:bg-[#f0f0f3]" value='de' onClick={changeLanguage}>Deutsch</button>
              <button className="hover:bg-[#f0f0f3]" value='ch' onClick={changeLanguage}>中文</button>
            </div>
          </div>
        )}
      </nav>
    </motion.header>
  );
} 
