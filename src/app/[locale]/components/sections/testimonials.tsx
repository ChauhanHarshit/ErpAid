"use client";

import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useTranslations } from "next-intl";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonials() {
  const t = useTranslations("Testimonials");

  const testimonials = [
    {
      quote: t("testimonial1.quote"),
      author: t("testimonial1.author"),
      role: t("testimonial1.role"),
      company: t("testimonial1.company"),
    },
    {
      quote: t("testimonial2.quote"),
      author: t("testimonial2.author"),
      role: t("testimonial2.role"),
      company: t("testimonial2.company"),
    },
    {
      quote: t("testimonial3.quote"),
      author: t("testimonial3.author"),
      role: t("testimonial3.role"),
      company: t("testimonial3.company"),
    },
    {
      quote: t("testimonial4.quote"),
      author: t("testimonial4.author"),
      role: t("testimonial4.role"),
      company: t("testimonial4.company"),
    },
    {
      quote: t("testimonial5.quote"),
      author: t("testimonial5.author"),
      role: t("testimonial5.role"),
      company: t("testimonial5.company"),
    },
    {
      quote: t("testimonial6.quote"),
      author: t("testimonial6.author"),
      role: t("testimonial6.role"),
      company: t("testimonial6.company"),
    },
  ];

  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">{t("sectionTitle")}</h2>
          <p className="text-gray-600">{t("sectionDescription")}</p>
        </div>

        {/* Custom Navigation Buttons */}
        <div className="absolute left-0 top-1/2 transform translate-y-8 z-10">
          <button className="swiper-button-prev p-5 !text-[#4169E1] cursor-pointer">
            <ChevronLeft className="h-6 w-6" />
          </button>
        </div>

        <div className="absolute right-0 top-1/2 transform translate-y-8 z-10">
          <button className="swiper-button-next p-5 !text-[#4169E1] cursor-pointer">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          loop
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 }, // Mobile
            768: { slidesPerView: 2 }, // Tablet
            1024: { slidesPerView: 2 }, // Desktop
          }}
          className="!pb-10"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full">
                <Quote className="h-8 w-8 text-[#4169E1] mb-4" />
                <p className="text-gray-600 mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
