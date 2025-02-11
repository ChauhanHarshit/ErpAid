"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/app/[locale]/components/ui/button"

const features = [
  {
    title: "Financial Management",
    description: "Efficient workforce management and optimization.",
    benefits: ["Employee scheduling", "Performance tracking", "Resource allocation"],
  },
  {
    title: "Digital Transformation",
    description: "Transform your business with cutting-edge digital solutions.",
    benefits: ["Automated workflows", "Digital process optimization", "Enhanced productivity"],
  },
  {
    title: "ERP Solutions",
    description: "Comprehensive ERP solutions tailored to your needs.",
    benefits: ["Streamlined operations", "Real-time analytics", "Integrated systems"],
  },
  {
    title: "CRM Software",
    description: "Efficient workforce management and optimization.",
    benefits: ["Employee scheduling", "Performance tracking", "Resource allocation"],
  },
  {
    title: "Supply Chain",
    description: "Efficient workforce management and optimization.",
    benefits: ["Employee scheduling", "Performance tracking", "Resource allocation"],
  },
  {
    title: "Workforce Management",
    description: "Efficient workforce management and optimization.",
    benefits: ["Employee scheduling", "Performance tracking", "Resource allocation"],
  },
]

export default function Features() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Comprehensive ERP Solutions</h2>
          <p className="text-gray-600">
            Discover how our solutions can transform your business operations and drive growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <ul className="space-y-3">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-[#4169E1]" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Button className="bg-[#4169E1] hover:bg-[#4169E1]/90">Learn More</Button>
        </div>
      </div>
    </section>
  )
}

