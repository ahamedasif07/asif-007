"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import asifImage from "../public/assets/asif13_image-.png";
import AOS from "aos";

import "aos/dist/aos.css";
import gsap from "gsap";
import TypingTitle from "./TypingText";

const Hero: React.FC = () => {
  const particleContainerRef = useRef<HTMLDivElement | null>(null);
  const textContentRef = useRef<HTMLDivElement | null>(null); // টেক্সট অ্যানিমেশনের জন্য Ref

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: "ease-in-out",
      once: true,
    });

    // --- GSAP Text Animation ---
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // নাম, টাইটেল, প্যারাগ্রাফ এবং বাটনগুলোর জন্য এনিমেশন
      tl.from(".hero-name", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".hero-title",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4",
        ) // আগের এনিমেশন শেষ হওয়ার ০.৪ সেকেন্ড আগে শুরু হবে
        .from(
          ".hero-desc",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          ".hero-btns",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2, // বাটনগুলো একে একে আসবে
            ease: "power3.out",
          },
          "-=0.4",
        );
    }, textContentRef);

    // --- Particles Animation ---
    const container = particleContainerRef.current;
    if (container) {
      const particleCount = 100;
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.className = "spark";
        container.appendChild(particle);
        const size = Math.random() * 4 + 2;

        gsap.set(particle, {
          width: size,
          height: size,
          x: Math.random() * 400 - 200,
          y: Math.random() * 400 - 200,
          opacity: Math.random(),
          backgroundColor: "#3b82f6",
          borderRadius: "50%",
          position: "absolute",
          boxShadow: "0 0 10px #60a5fa",
        });

        gsap.to(particle, {
          x: "+=" + (Math.random() * 100 - 50),
          y: "-=" + (Math.random() * 150 + 50),
          opacity: 0,
          duration: Math.random() * 2 + 1,
          repeat: -1,
          delay: Math.random() * 2,
          ease: "power1.out",
        });
      }
    }

    return () => {
      ctx.revert(); // Cleanup GSAP animations
      if (container) container.innerHTML = "";
    };
  }, []);

  const handleScroll = (id: string): void => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="max-w-[1300px] mt-6 md:mt-0 px-4 mx-auto">
      <div className="relative hero overflow-hidden">
        <section className="mb-9 overflow-hidden">
          <div className="md:flex justify-between min-h-[680px] items-center">
            {/* Left Section: Text Content */}
            <div
              ref={textContentRef}
              className="md:w-1/2 mx-auto px-4 md:px-0 md:mt-[80px] md:ml-[68px] text-center lg:text-left md:text-left"
            >
              <h1 className="hero-name text-4xl lg:text-5xl font-bold text-[#235692]">
                Hi, I'm Asif Hosen
              </h1>
              <div className="hero-title">
                <TypingTitle />
              </div>

              <p className="hero-desc text-gray-700 px-4 lg:ml-[0px] md:px-0 text-lg leading-relaxed">
                Always love to learn something new. Love to get error and handle
                error. If I learn something special I share this with my
                friends. One secret about me I'm very fast learner programming
                is my Heart.
              </p>

              <div className="hero-btns flex flex-col gap-2 md:flex-row mt-6">
                <button
                  onClick={() => handleScroll("contact")}
                  className="px-6 py-3 w-full bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition duration-300"
                >
                  Contact Me
                </button>
                <button
                  onClick={() => handleScroll("projects")}
                  className="md:ml-4 ml-0 px-6 py-3 w-full border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
                >
                  My Projects
                </button>
              </div>
            </div>

            {/* Right Section: Image */}
            <div
              data-aos="zoom-in"
              className="flex md:w-1/2 justify-center md:ml-[120px] overflow-visible lg:mt-0 relative"
            >
              <div
                ref={particleContainerRef}
                className="absolute inset-0 flex justify-center items-center z-0"
              ></div>

              <div className="md:w-[470px] w-[350px] h-[430px] md:h-[550px] z-10 relative overflow-hidden mask-gradient">
                <Image
                  src={asifImage}
                  alt="Asif Hosen"
                  priority
                  className="relative mt-[40px] object-contain w-full h-full"
                />
              </div>
            </div>

            <style jsx>
              {`
                .mask-gradient {
                  -webkit-mask-image: linear-gradient(
                    to bottom,
                    black 75%,
                    transparent 100%
                  );
                  mask-image: linear-gradient(
                    to bottom,
                    black 75%,
                    transparent 100%
                  );
                }
              `}
            </style>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
