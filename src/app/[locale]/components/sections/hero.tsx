"use client";

import { Button } from "@/app/[locale]/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const imagePaths = [
  "/nestle.svg",
  "/captionlab.svg",
  "/ecom.jpeg",
  "/myhelpa.svg",
  "/xenialabs.svg",
];

export default function Hero() {
  const router = useRouter();

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto text-center">
        {/* <Image src="/hero.jpg"
        width={500} height={300}
          alt="hero Imag"
          /> */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Unlocking Business Growth
            <br />
            with Intelligent ERP
          </h1>

          <p className="text-center text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Streamline operations, boost efficiency, and gain a competitive edge
            with our cutting-edge ERP solutions.
          </p>

          <div className="flex justify-center space-x-4 mb-12">
            <Button size="lg" className="bg-[#4169E1] hover:bg-[#4169E1]/90"
            onClick={() => router.push("/contact")}
            >
              Request a Demo
            </Button>
            <Button size="lg" variant="outline">
              View Services
            </Button>
          </div>

          <section className="container mx-auto px-4 py-16">
            <h2 className="text-center mt-10 text-2xl font-semibold text-gray-900 mb-8">
              Trusted by Leading Businesses Worldwide
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center max-w-4xl mx-auto">
              {imagePaths.map((src, i) => (
                <div key={i} className="w-24">
                  <Image
                    src={src} // Demo Image
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
