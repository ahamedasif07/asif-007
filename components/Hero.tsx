"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import asifImage from "../public/assets/asif13_image-.png";
import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";
import { motion, Variants } from "framer-motion";
import TypingTitle from "./TypingText";

const Hero: React.FC = () => {
  const particleContainerRef = useRef<HTMLDivElement | null>(null);

  // কন্টেইনার ভেরিয়েন্ট: এটি নিশ্চিত করবে চাইল্ডগুলো একের পর এক আসবে
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // টেক্সট আইটেম ভেরিয়েন্ট
  const textItemVariants: Variants = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // ইমেজের জন্য ভেরিয়েন্ট
  const imageVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const container = particleContainerRef.current;
    if (container) {
      const particleCount = 60;
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.className = "spark";
        container.appendChild(particle);
        const size = Math.random() * 3 + 2;

        gsap.set(particle, {
          width: size,
          height: size,
          x: Math.random() * 400 - 200,
          y: Math.random() * 400 - 200,
          opacity: Math.random(),
          backgroundColor: "#3b82f6",
          borderRadius: "50%",
          position: "absolute",
        });

        gsap.to(particle, {
          x: "+=" + (Math.random() * 100 - 50),
          y: "-=" + (Math.random() * 150 + 50),
          opacity: 0,
          duration: Math.random() * 2 + 1,
          repeat: -1,
          ease: "power1.out",
        });
      }
    }
    return () => {
      if (container) container.innerHTML = "";
    };
  }, []);

  const handleScroll = (id: string): void => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="max-w-[1400px] mt-6 md:mt-0 px-4 mx-auto overflow-hidden">
      <div className="relative hero">
        <section className="mb-9">
          <div className="md:flex justify-between min-h-[680px] items-center">
            {/* Left Section - Text Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible" // "animate" এর বদলে এটি ব্যবহার করলে স্ক্রিনে আসা মাত্র দেখা যাবে
              viewport={{ once: true }}
              className="md:w-1/2 mx-auto px-4 md:px-0 md:mt-[80px] md:ml-[68px] text-center lg:text-left"
            >
              <motion.h1
                variants={textItemVariants}
                className="text-4xl lg:text-6xl font-extrabold text-[#235692] mb-2 tracking-tight"
              >
                Hi, I'm <span className="text-blue-600">Asif Hosen</span>
              </motion.h1>

              <motion.div variants={textItemVariants} className="mb-4">
                <TypingTitle />
              </motion.div>

              <motion.p
                variants={textItemVariants}
                className="text-gray-700 px-4 lg:ml-0 md:px-0 text-lg leading-relaxed mb-8 max-w-[500px]"
              >
                Always love to learn something new. Love to get error and handle
                error. Programming is my{" "}
                <span className="font-bold text-blue-600 underline">Heart</span>
                .
              </motion.p>

              <motion.div
                variants={textItemVariants}
                className="flex flex-col gap-4 md:flex-row justify-center lg:justify-start"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleScroll("contact")}
                  className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg"
                >
                  Contact Me
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleScroll("projects")}
                  className="md:ml-4 px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-bold"
                >
                  My Projects
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Section - Image */}
            <div className="flex md:w-1/2 justify-center md:ml-[120px] relative mt-12 lg:mt-0">
              <div
                ref={particleContainerRef}
                className="absolute inset-0 z-0 pointer-events-none"
              />

              <motion.div
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative z-10"
              >
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="md:w-[470px] w-[320px] h-[430px] md:h-[550px] overflow-hidden mask-gradient"
                >
                  <Image
                    src={asifImage}
                    alt="Asif Hosen"
                    priority
                    className="mt-[40px] object-contain w-full h-full drop-shadow-2xl"
                  />
                </motion.div>
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-2/3 h-20 bg-blue-400/20 blur-3xl -z-10 rounded-full" />
              </motion.div>
            </div>

            <style jsx>{`
              .mask-gradient {
                -webkit-mask-image: linear-gradient(
                  to bottom,
                  black 85%,
                  transparent 100%
                );
                mask-image: linear-gradient(
                  to bottom,
                  black 85%,
                  transparent 100%
                );
              }
            `}</style>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
