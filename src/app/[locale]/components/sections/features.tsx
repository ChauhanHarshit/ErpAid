"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/app/[locale]/components/ui/button";
import { useTranslations } from "next-intl";

export default function Features() {
  const t = useTranslations("Features");

  const features = [
    {
      title: t("financialManagement.title"),
      description: t("financialManagement.description"),
      benefits: [
        t("financialManagement.benefits.0"),
        t("financialManagement.benefits.1"),
        t("financialManagement.benefits.2")
      ],
    },
    {
      title: t("digitalTransformation.title"),
      description: t("digitalTransformation.description"),
      benefits: [
        t("digitalTransformation.benefits.0"),
        t("digitalTransformation.benefits.1"),
        t("digitalTransformation.benefits.2")
      ],
    },
    {
      title: t("erpSolutions.title"),
      description: t("erpSolutions.description"),
      benefits: [
        t("erpSolutions.benefits.0"),
        t("erpSolutions.benefits.1"),
        t("erpSolutions.benefits.2")
      ],
    },
    {
      title: t("crmSoftware.title"),
      description: t("crmSoftware.description"),
      benefits: [
        t("crmSoftware.benefits.0"),
        t("crmSoftware.benefits.1"),
        t("crmSoftware.benefits.2")
      ],
    },
    {
      title: t("supplyChain.title"),
      description: t("supplyChain.description"),
      benefits: [
        t("supplyChain.benefits.0"),
        t("supplyChain.benefits.1"),
        t("supplyChain.benefits.2")
      ],
    },
    {
      title: t("workforceManagement.title"),
      description: t("workforceManagement.description"),
      benefits: [
        t("workforceManagement.benefits.0"),
        t("workforceManagement.benefits.1"),
        t("workforceManagement.benefits.2")
      ],
    },
  ];

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
          <h2 className="text-3xl font-bold mb-4">{t("sectionTitle")}</h2>
          <p className="text-gray-600">{t("sectionDescription")}</p>
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

        {/* <div className="flex justify-center mt-10">
          <Button className="bg-[#4169E1] hover:bg-[#4169E1]/90">{t("learnMore")}</Button>
        </div> */}
      </div>
    </section>
  );
}
