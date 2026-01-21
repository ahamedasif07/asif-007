"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const StatsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // --- 3D TILT EFFECT LOGIC ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // --- GSAP SMOOTH COUNTER ---
  useGSAP(
    () => {
      const stats = gsap.utils.toArray<HTMLElement>(".stat-value");

      stats.forEach((el) => {
        const targetValue = parseFloat(el.getAttribute("data-value") || "0");
        const suffix = el.getAttribute("data-suffix") || "";
        const isFloat = el.getAttribute("data-float") === "true";

        const countObj = { val: 0 };

        gsap.to(countObj, {
          val: targetValue,
          duration: 2.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = isFloat
              ? countObj.val.toFixed(1) + suffix
              : Math.floor(countObj.val) + suffix;
          },
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="py-32  relative overflow-hidden flex items-center justify-center border-y border-slate-800/30"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0  opacity-30" />
        <div className="absolute inset-0  opacity-20 brightness-100 contrast-150" />
      </div>

      <div className="container max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* MAIN CARD: 2.5+ YEARS */}
          <motion.div
            whileHover={{ y: -5 }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="lg:col-span-7 perspective-1000"
          >
            <div
              style={{ transform: "translateZ(50px)" }}
              className="h-full p-10 md:p-16 rounded-[3rem]  border border-white/10 backdrop-blur-2xl relative overflow-hidden flex flex-col justify-end min-h-[450px] shadow-2xl transition-all duration-500 hover:border-blue-500/30"
            >
              <div className="relative z-10">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-8"
                >
                  Expertise Level
                </motion.span>
                <h2 className="text-[8rem] md:text-[11rem] font-black text-gray-100 leading-none tracking-tighter mb-4">
                  <span
                    className="stat-value"
                    data-value="2.5"
                    data-suffix="+"
                    data-float="true"
                  >
                    0
                  </span>
                </h2>
                <p className="text-3xl md:text-3xl font-semibold font-light text-gray-100 font-semibold tracking-tight">
                  Years of{" "}
                  <span className="text-white font-semibold">
                    Development Experiences
                  </span>
                </p>
              </div>

              {/* Decorative Vector */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]" />
            </div>
          </motion.div>

          {/* RIGHT SIDE: VERTICAL BENTO */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Project Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-10 rounded-[2.5rem] bg-slate-900/60 border border-slate-800 backdrop-blur-md flex items-center justify-between group"
            >
              <div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">
                  Deployed
                </p>
                <h3
                  className="text-6xl font-black text-white stat-value"
                  data-value="17"
                  data-suffix="+"
                >
                  0+
                </h3>
                <p className="text-slate-400 text-lg mt-1 font-medium">
                  Global Projects
                </p>
              </div>
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-blue-600 to-blue-400 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </motion.div>

            {/* Consistency Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-10 rounded-[2.5rem] bg-slate-900/60 border border-slate-800 backdrop-blur-md relative overflow-hidden group"
            >
              <div className="relative z-10">
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">
                  Consistency
                </p>
                <h3
                  className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 stat-value"
                  data-value="450"
                  data-suffix="+"
                >
                  0+
                </h3>
                <p className="text-slate-400 text-lg mt-1 font-medium">
                  OSS Contributions
                </p>
              </div>

              {/* Dynamic Wave Visualization */}
              <div className="absolute bottom-0 left-0 right-0 h-20 flex items-end gap-1.5 px-10 opacity-30 group-hover:opacity-60 transition-opacity">
                {[50, 80, 60, 100, 70, 90, 110, 80, 95].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h / 1.5}%` }}
                    transition={{ delay: i * 0.05, duration: 1 }}
                    className="flex-1 bg-gradient-to-t from-blue-500 to-transparent rounded-t-lg"
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* BOTTOM BAR: OPTIMIZATION */}
          <div className="lg:col-span-12">
            <div className="p-10 rounded-[3rem] bg-slate-900/40 border border-slate-800 backdrop-blur-xl flex flex-col lg:flex-row items-center justify-between gap-10 hover:border-slate-700 transition-all group/container">
              <div className="flex items-center gap-10">
                <div className="relative">
                  <div
                    className="text-7xl font-black text-white stat-value"
                    data-value="94"
                    data-suffix="%"
                  >
                    0%
                  </div>
                  {/* Glow effect that matches the score */}
                  <div className="absolute -inset-4 bg-green-500/10 blur-2xl rounded-full group-hover/container:bg-green-500/20 transition-colors" />
                </div>

                <div className="hidden sm:block w-px h-16 bg-slate-800" />

                <div>
                  <h4 className="text-white text-xl font-bold flex items-center gap-3">
                    Optimization Core
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                  </h4>
                  <p className="text-slate-400 max-w-xs text-sm mt-1">
                    Engineered for sub-second load times and 100/100 performance
                    scores.
                  </p>
                </div>
              </div>

              {/* TECH STACK WITH REAL BRAND ICONS */}
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  {
                    name: "React 19",
                    color: "hover:text-[#61DAFB] hover:border-[#61DAFB]/30",
                    icon: (
                      <svg
                        viewBox="-11.5 -10.23174 23 20.46348"
                        className="w-5 h-5"
                      >
                        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
                        <g stroke="#61DAFB" strokeWidth="1" fill="none">
                          <ellipse rx="11" ry="4.2" />
                          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                        </g>
                      </svg>
                    ),
                  },
                  {
                    name: "Next.js 15",
                    color: "hover:text-white hover:border-white/30",
                    icon: (
                      <svg viewBox="0 0 180 180" className="w-5 h-5 fill-white">
                        <path
                          d="M145.4 145.4c-36.1 36.1-94.6 36.1-130.7 0-36.1-36.1-36.1-94.6 0-130.7 36.1-36.1 94.6-36.1 130.7 0 36.1 36.1 36.1 94.6 0 130.7z"
                          fill="#000"
                        />
                        <path
                          d="M124.6 142.2L61.7 61.7H51.4v62.3h9.3V73.4l55.8 72c3.4-1.9 6.2-3.8 8.1-3.2zM102.7 61.7h9.3v38.2l-9.3-12.1V61.7z"
                          fill="white"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "TypeScript",
                    color: "hover:text-[#3178C6] hover:border-[#3178C6]/30",
                    icon: (
                      <svg viewBox="0 0 128 128" className="w-5 h-5">
                        <path fill="#3178C6" d="M1.5 1.5h125v125H1.5z" />
                        <path
                          fill="#fff"
                          d="M106.3 103.5c-3 1.9-6.9 3.1-10.9 3.1-7.2 0-11.7-3.8-11.7-10.9V61.1h-10v-8.2h10V33.6l10.2-6.1v25.4h12.4v8.2h-12.4v31c0 3 1.6 4.6 4.3 4.6 2.1 0 3.7-.6 4.8-1.5l3.3 8.3zM45.1 61.1v34.4c0 7.8-5.3 12-13.3 12-3.8 0-7.7-1.1-10.3-2.9l3-8.3c1.9 1.2 4.1 2.2 6.5 2.2 3.1 0 5-1.5 5-4.5V61.1H45.1z"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "GSAP 3",
                    color: "hover:text-[#88CE02] hover:border-[#88CE02]/30",
                    icon: (
                      <svg
                        viewBox="0 0 100 100"
                        className="w-5 h-5 fill-[#88CE02]"
                      >
                        <path d="M50 2L15 55h25L30 98l45-55H50l15-41z" />
                      </svg>
                    ),
                  },
                ].map((tag) => (
                  <span
                    key={tag.name}
                    className={`px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-slate-300 text-sm font-semibold tracking-wide transition-all flex items-center gap-3 group/tag backdrop-blur-md ${tag.color}`}
                  >
                    <div className="opacity-70 group-hover/tag:opacity-100 transition-opacity duration-300">
                      {tag.icon}
                    </div>
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
