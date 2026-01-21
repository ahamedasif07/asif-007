"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules"; // FreeMode যোগ করা হয়েছে
import { Star } from "lucide-react";
import SectionTitle from "./sectionTitle/SectionTitle";

// Swiper Styles
import "swiper/css";
import "swiper/css/free-mode";

const testimonials = [
  {
    name: "Arif Hosen Jibon",
    position: "SSL Wireless - DevOps Engineer",
    feedback:
      "A hard-working developer with a never-give-up attitude. I'm confident he will excel in any tech stack he chooses.",
    image:
      "https://i.ibb.co/YBTZpFdM/Whats-App-Image-2025-02-06-at-08-59-38-92f3b142.jpg",
  },
  {
    name: "Jorna Katun",
    position: "Software Engineer - SSL",
    feedback:
      "Creative and technically sound. He efficiently solves complex UI challenges and always delivers clean, maintainable code.",
    image: "https://i.ibb.co/4gmjTSk4/jorna.jpg",
  },
  {
    name: "Shoiab Sheikh Samy",
    position: "Full Stack Developer",
    feedback:
      "A true programming enthusiast. His dedication to mastering new frameworks and modern tools is truly inspiring.",
    image:
      "https://i.ibb.co/snHdHCy/Whats-App-Image-2025-02-06-at-08-51-41-a52d4721.jpg",
  },
  {
    name: "Tanvir Ahmed",
    position: "Senior React Developer",
    feedback:
      "Exceptional eye for detail. He expertly transforms complex Figma designs into high-performance React components.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    name: "Rakibul Islam",
    position: "PHP Laravel Expert",
    feedback:
      "Expert in backend logic and database optimization. A reliable developer for building scalable, high-quality applications.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    name: "Mahfuzur Rahman",
    position: "Cyber Security Analyst",
    feedback:
      "Focused on security best practices. He ensures code is functional, robust, and safe from common vulnerabilities.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
  },
];

export default function SimpleAwesomeSlider() {
  return (
    <section className="py-20 max-w-[1400px] mx-auto overflow-hidden">
      <div className="flex justify-center mb-16">
        <SectionTitle title="FEEDBACK" />
      </div>

      <Swiper
        modules={[Autoplay, FreeMode]} // FreeMode মডিউলটি এখানে দিতে হবে
        spaceBetween={30}
        slidesPerView={1.2}
        loop={true}
        freeMode={true} // এটি স্লাইডারকে ফ্রি মুভমেন্ট দেয়
        speed={6000} // স্লাইডিং স্পিড (মিলিসেকেন্ডে)
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1440: { slidesPerView: 4 },
        }}
        className="premium-marquee"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#0A0A0A] border border-white/5 p-6 rounded-2xl hover:border-blue-500/40 transition-colors duration-500 h-[220px] flex flex-col justify-between select-none">
              <div>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-blue-600 text-blue-600"
                    />
                  ))}
                </div>
                <p className="text-gray-400 text-[14px] leading-relaxed italic">
                  &ldquo;{item.feedback}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 mt-6 border-t border-white/5 pt-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="rounded-full  hover:grayscale-0 transition-all duration-500"
                />
                <div>
                  <h4 className="text-white text-sm font-semibold">
                    {item.name}
                  </h4>
                  <p className="text-blue-500 text-[11px] uppercase tracking-tighter">
                    {item.position}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        /* এটি স্লাইডারকে একদম স্মুথ এবং থামলে আবার শুরু করে এমন লিনিয়ার মোশন দেয় */
        .premium-marquee .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
}
