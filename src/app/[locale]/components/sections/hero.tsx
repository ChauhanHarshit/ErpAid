"use client";

import { Button } from "@/app/[locale]/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const imagePaths = [
  // "/nestle.svg",
  "/captionlab.svg",
  "/ecom.jpeg",
  "/myhelpa.svg",
  "/xenialabs.svg",
];

export default function Hero() {
  const router = useRouter();
  const t = useTranslations("Hero"); // Using translations for Hero section

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {t("unlockingBusinessGrowth")}
            <br />
            {t("withIntelligentERP")}
          </h1>

          <p className="text-center text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            {t("streamlineOperations")}
          </p>

          <div className="flex justify-center space-x-4 mb-12">
            <Button
              size="lg"
              className="bg-[#4169E1] hover:bg-[#4169E1]/90"
              onClick={() => router.push("/contact")}
            >
              {t("requestADemo")}
            </Button>
            <Button size="lg" variant="outline">
              {t("viewServices")}
            </Button>
          </div>

          <section className="container mx-auto px-4 py-16">
            <h2 className="text-center mt-10 text-2xl font-semibold text-gray-900 mb-8">
              {t("trustedByBusinesses")}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center max-w-4xl mx-auto">
              {imagePaths.map((src, i) => (
                <div key={i} className="w-24">
                  <Image
                    src={src}
                    alt={`Company Logo ${i + 1}`}
                    width={96}
                    height={96}
                    className="opacity-80"
                  />
                </div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </section>
  );
}
