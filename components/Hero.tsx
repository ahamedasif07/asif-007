"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import asifImage from "../public/assets/asif13_image-.png";
import AOS from "aos";

import "aos/dist/aos.css";
import gsap from "gsap";
import TypingTitle from "./TypingTitle";

const Hero: React.FC = () => {
  const particleContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: "ease-in-out",
      once: true,
    });

    const container = particleContainerRef.current;
    if (!container) return;

    const particleCount = 150; // Performance এর জন্য কিছুটা কমিয়েছি

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

    return () => {
      if (container) container.innerHTML = "";
    };
  }, []);

  const handleScroll = (id: string): void => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-[1300px] px-4 mx-auto">
      <div className="relative hero overflow-hidden">
        <section className="mb-9 overflow-hidden">
          <div className="md:flex justify-between min-h-[680px] items-center">
            {/* Left Section */}
            <div className="md:w-1/2 mx-auto px-4 md:px-0 md:mt-[80px] md:ml-[68px] text-center lg:text-left md:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-[#235692]">
                Hi, I'm Asif Hosen
              </h1>
              <div>
                <TypingTitle />
              </div>
              <p className="text-gray-700 px-4 lg:ml-[0px] md:px-0 text-lg leading-relaxed">
                Always love to learn something new. Love to get error and handle
                error. If I learn something special I share this with my
                friends. One secret about me I'm very fast learner programming
                is my Heart.
              </p>
              <div className="flex flex-col gap-2 md:flex-row mt-6">
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

            {/* Right Section: Image with Blending Effect */}
            <div
              data-aos="zoom-in"
              className="flex md:w-1/2 justify-center md:ml-[120px] overflow-visible lg:mt-0 relative"
            >
              <div
                ref={particleContainerRef}
                className="absolute inset-0 flex justify-center items-center z-0"
              ></div>

              {/* Mask Gradient Applied Here */}
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
                @keyframes pulseLight {
                  0%,
                  100% {
                    box-shadow:
                      0 0 10px 0 rgba(59, 130, 246, 0.5),
                      0 0 30px 10px rgba(59, 130, 246, 0.4);
                  }
                  50% {
                    box-shadow:
                      0 0 20px 5px rgba(59, 130, 246, 0.6),
                      0 0 40px 20px rgba(59, 130, 246, 0.5);
                  }
                }
                .animate-pulseLight {
                  animation: pulseLight 2s infinite;
                }
                /* নিচের অংশটি ব্যাকগ্রাউন্ডের সাথে ব্লেন্ড করবে */
                .mask-gradient {
                  -webkit-mask-image: linear-gradient(
                    to bottom,
                    black 70%,
                    transparent 100%
                  );
                  mask-image: linear-gradient(
                    to bottom,
                    black 70%,
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
