"use client";

import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP Plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const StatsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Refs for numbers
  const skillRef = useRef<HTMLHeadingElement>(null);
  const langRef = useRef<HTMLHeadingElement>(null);
  const projectRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  useGSAP(
    () => {
      const stats = [
        { ref: skillRef, endValue: 94, suffix: "%" },
        { ref: langRef, endValue: 12, suffix: "+" },
        { ref: projectRef, endValue: 17, suffix: "+" },
      ];

      stats.forEach((stat) => {
        if (!stat.ref.current) return;

        gsap.fromTo(
          stat.ref.current,
          { innerHTML: "0" }, // Initial state as string
          {
            innerHTML: stat.endValue,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
            onUpdate: function () {
              // Number format kora (Integer conversion)
              if (stat.ref.current) {
                const rawValue = parseFloat(stat.ref.current.innerText);
                stat.ref.current.innerHTML = Math.ceil(rawValue) + stat.suffix;
              }
            },
          },
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="bg-transparent py-20 relative overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center text-white">
          {/* Stat 1 */}
          <div data-aos="zoom-in" className="flex flex-col items-center">
            <h2
              ref={skillRef}
              className="text-6xl md:text-7xl font-extrabold text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            >
              0%
            </h2>
            <p className="mt-4 text-gray-300 text-lg leading-relaxed">
              Web Development skills <br /> gained in my journey
            </p>
          </div>

          {/* Stat 2 */}
          <div
            data-aos="zoom-in"
            data-aos-delay="100"
            className="flex flex-col items-center"
          >
            <h2
              ref={langRef}
              className="text-6xl md:text-7xl font-extrabold text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            >
              0+
            </h2>
            <p className="mt-4 text-gray-300 text-lg leading-relaxed">
              Programming Languages <br /> & Libraries mastered
            </p>
          </div>

          {/* Stat 3 */}
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="flex flex-col items-center"
          >
            <h2
              ref={projectRef}
              className="text-6xl md:text-7xl font-extrabold text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            >
              0+
            </h2>
            <p className="mt-4 text-gray-300 text-lg leading-relaxed">
              Completed Projects <br /> in professional life
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
