"use client";

import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    quote:
      "ERPAid has transformed how we manage our operations. The efficiency gains have been remarkable.",
    author: "Sarah Johnson",
    role: "Operations Director",
    company: "Tech Solutions Inc.",
  },
  {
    quote:
      "Implementation was smooth and the results were immediate. Highly recommend their services.",
    author: "Michael Chen",
    role: "CEO",
    company: "Global Logistics",
  },
  {
    quote:
      "The level of support and expertise from the ERPAid team has been exceptional.",
    author: "Emma Williams",
    role: "IT Manager",
    company: "Manufacturing Pro",
  },
  {
    quote:
      "ERPAid's flexible features made it easy for us to adapt to new business processes.",
    author: "David Lee",
    role: "CTO",
    company: "Innovatech Corp.",
  },
  {
    quote:
      "We've seen a 30% increase in productivity since implementing ERPAid. Thanks to ERPAid",
    author: "Sophia Brown",
    role: "Project Manager",
    company: "Enterprise Dynamics",
  },
  {
    quote:
      "ERPAid is a game-changer for our organization. Excellent support from their team.",
    author: "James Wilson",
    role: "CFO",
    company: "Global Ventures",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600">
            Don't just take our word for it - hear from some of our satisfied
            clients
          </p>
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
                <p className="text-gray-600 mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.author}
                  </p>
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
