"use client"

import { motion } from "framer-motion"

export default function Stats() {
  return (
    <section className="py-24 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-[#E6F4FF]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        style={{
          clipPath: "polygon(0 0, 100% 10%, 100% 90%, 0 100%)",
        }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Delivering Measurable Results</h2>
          <p className="text-gray-600">See how our ERP solutions have helped businesses like yours.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              stat: "95+",
              label: "Customer Satisfaction",
              description: "Our clients consistently rate their experience with our ERP solutions highly.",
            },
            {
              stat: "30%",
              label: "Increase in Efficiency",
              description:
                "On average, our clients experience a significant boost in operational efficiency after implementing our ERP solutions.",
            },
            {
              stat: "15%",
              label: "Reduction in Costs",
              description:
                "Our solutions help businesses streamline operations and reduce costs associated with manual processes.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl font-bold text-[#4169E1] mb-2">{item.stat}</div>
              <h3 className="text-xl font-semibold mb-3">{item.label}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

