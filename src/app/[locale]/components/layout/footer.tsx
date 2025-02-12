"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[#4169E1] font-semibold text-lg mb-4">{t("companyName")}</h3>
            <p className="text-gray-600 text-sm">{t("description")}</p>
          </motion.div>

          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">{t("services")}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/digital-transformation" className="text-gray-600 hover:text-[#4169E1] text-sm transition-colors">
                  {t("digitalTransformation")}
                </Link>
              </li>
              <li>
                <Link href="/services/erp-solutions" className="text-gray-600 hover:text-[#4169E1] text-sm transition-colors">
                  {t("personalizedERP")}
                </Link>
              </li>
              <li>
                <Link href="/services/software" className="text-gray-600 hover:text-[#4169E1] text-sm transition-colors">
                  {t("erpSoftware")}
                </Link>
              </li>
              <li>
                <Link href="/services/workforce" className="text-gray-600 hover:text-[#4169E1] text-sm transition-colors">
                  {t("workforceMgmt")}
                </Link>
              </li>
              <li>
                <Link href="/services/integrations" className="text-gray-600 hover:text-[#4169E1] text-sm transition-colors">
                  {t("integrations")}
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">{t("connect")}</h4>
            <div className="space-y-4">
              <Link href="/blog" className="block text-gray-600 hover:text-[#4169E1] text-sm transition-colors">
                {t("blog")}
              </Link>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#4169E1]" aria-label="Twitter">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-[#4169E1]" aria-label="LinkedIn">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-[#4169E1]" aria-label="GitHub">
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 pt-8 border-t text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p>&copy; {new Date().getFullYear()} {t("companyName")}. {t("allRightsReserved")}</p>
        </motion.div>
      </div>
    </footer>
  );
}
