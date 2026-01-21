/* eslint-disable react/no-unescaped-entities */
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

  const textItemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const container = particleContainerRef.current;
    if (container) {
      const particleCount = 40;
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.className = "spark";
        container.appendChild(particle);
        const size = Math.random() * 2 + 1;
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
  }, []);

  const handleScroll = (id: string): void => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="max-w-[1400px] mt-10 md:mt-0 px-4 mx-auto overflow-hidden">
      <div className="relative hero">
        <section className="mb-9">
          <div className="md:flex justify-between min-h-[750px] items-center">
            {/* Left Section - Text Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <motion.span
                variants={textItemVariants}
                className="text-blue-600 font-semibold tracking-widest uppercase text-sm mb-4 block"
              >
                Welcome to my world
              </motion.span>

              <motion.h1
                variants={textItemVariants}
                className="text-5xl lg:text-7xl font-black text-slate-600 dark:text-white mb-4 leading-[1.1]"
              >
                Hi, I'm <span className="text-blue-600">Asif Hosen </span>
              </motion.h1>

              <motion.div variants={textItemVariants} className="mb-6 h-12">
                <TypingTitle />
              </motion.div>

              <motion.p
                variants={textItemVariants}
                className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed mb-10 max-w-[550px]"
              >
                A passionate{" "}
                <span className="text-blue-700 dark:text-white font-medium">
                  Frontend Developer
                </span>{" "}
                dedicated to building immersive and functional web applications.
              </motion.p>

              <motion.div
                variants={textItemVariants}
                className="flex flex-wrap gap-5 justify-center lg:justify-start"
              >
                <motion.button
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleScroll("contact")}
                  className="px-10 py-4 bg-blue-700 text-white rounded-full font-bold shadow-xl shadow-blue-500/20 transition-all"
                >
                  Contact Me
                </motion.button>

                <motion.a
                  href="/asif-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 border-2 border-blue-700 text-blue-700 rounded-full font-bold flex items-center gap-2 bg-transparent dark:hover:bg-slate-900 transition-all"
                >
                  Download CV
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Section - Image with Black Fade Overlay */}
            <div className="flex md:w-1/2 justify-center relative mt-16 lg:mt-0">
              <div
                ref={particleContainerRef}
                className="absolute inset-0 z-0 pointer-events-none"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative md:w-[500px] w-[300px] h-[450px] md:h-[600px] overflow-hidden mask-gradient"
                >
                  <Image
                    src={asifImage}
                    alt="Asif Hosen"
                    priority
                    className="object-contain w-full h-full"
                  />

                  {/* --- Black Overlay Gradient --- */}
                  <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black via-black/40 to-transparent z-20" />
                </motion.div>

                {/* Blue Glow effect below image */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-2/3 h-24 bg-blue-500/10 blur-[100px] -z-10 rounded-full" />
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .mask-gradient {
          -webkit-mask-image: linear-gradient(
            to bottom,
            black 75%,
            transparent 100%
          );
          mask-image: linear-gradient(to bottom, black 75%, transparent 100%);
        }
      `}</style>
    </div>
  );
};

export default Hero;
