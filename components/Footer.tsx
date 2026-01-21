"use client";

import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import logo from "../public/assets/alogo.svg";

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();
  const footerLogoRef = useRef<HTMLDivElement>(null);

  // ১. হিরো সেকশনে স্ক্রল করার ফাংশন
  const scrollToHero = () => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // ২. ফ্লোটিং অ্যানিমেশন লজিক
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (footerLogoRef.current) {
        gsap.to(footerLogoRef.current, {
          y: -10,
          duration: 2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <footer className="border-t border-gray-800 bg-black">
      <div className="py-[30px] mx-auto flex flex-col justify-center items-center">
        {/* লোগো সেকশন - এখানে onClick ইভেন্ট যোগ করা হয়েছে */}
        <div
          ref={footerLogoRef}
          onClick={scrollToHero} // ক্লিক করলে হিরোতে নিয়ে যাবে
          className="mb-4 transition-transform duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        >
          <Image
            height={120}
            width={120}
            src={logo}
            alt="Ahamed Asif Logo"
            className="drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
          />
        </div>

        {/* কপিরাইট টেক্সট */}
        <p className="mt-2 text-[13px] text-gray-500 tracking-wide text-center">
          © {currentYear}{" "}
          <span className="text-blue-500 font-medium">Ahamed Asif</span>. All
          rights reserved.
        </p>

        {/* লিঙ্কস */}
        <div className="mt-4 flex gap-4 text-gray-600 text-[12px]">
          <span className="hover:text-blue-400 cursor-pointer transition-colors">
            Privacy Policy
          </span>
          <span className="hover:text-blue-400 cursor-pointer transition-colors">
            Terms of Service
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
