"use client"

import { Button } from "@/app/[locale]/components/ui/button"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function CTA() {
  const router = useRouter();

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="bg-[#4169E1] rounded-2xl p-12 text-center text-white max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to learn how our ERP solutions can help streamline your operations and boost
            efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#4169E1] hover:bg-white/90"
            onClick={() => router.push("/contact")}
            >
              Schedule a Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-[#4169E1] hover:bg-white/10">
              Contact Sales
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

