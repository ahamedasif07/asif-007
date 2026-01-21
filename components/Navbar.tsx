"use client";
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { GoArrowUpRight } from "react-icons/go";
import aLogo from "../public/assets/alogo.svg";

interface MenuItem {
  name: string;
  id: string;
  description?: string;
}

const NavBar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  // ১. Feedback এবং FAQ সহ মেনু আইটেম
  const menuItems: MenuItem[] = [
    { name: "Home", id: "hero", description: "Return to top" },
    { name: "About", id: "about", description: "Our story & vision" },
    { name: "Projects", id: "projects", description: "Recent works" },
    { name: "Skills", id: "skills", description: "Expertise" },
    { name: "Contact", id: "contact", description: "Get in touch" },
    { name: "Feedback", id: "feedback", description: "Client testimonials" }, // New
    { name: "FAQ", id: "faq", description: "Questions & Answers" }, // New
  ];

  useEffect(() => {
    const handleScroll = () => setIsFixed(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // লোগো ফ্লোটিং
      gsap.to(logoRef.current, {
        y: -6,
        duration: 1.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      const navEl = navRef.current;
      if (!navEl) return;

      gsap.set(navEl, { height: 64 });
      gsap.set(cardsRef.current, { y: 40, opacity: 0, rotateX: -15 });

      const tl = gsap.timeline({ paused: true });

      tl.to(navEl, {
        height: window.innerWidth < 1024 ? "auto" : 320, // Desktop এ একটু বেশি হাইট
        backgroundColor: "rgba(10, 10, 10, 0.98)",
        duration: 0.5,
        ease: "expo.out",
      }).to(
        cardsRef.current,
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.4,
          stagger: 0.04,
          ease: "back.out(1.2)",
        },
        "-=0.3",
      );

      tlRef.current = tl;
    });
    return () => ctx.revert();
  }, []);

  const toggleMenu = () => {
    if (!isExpanded) {
      setIsExpanded(true);
      tlRef.current?.play();
    } else {
      tlRef.current?.reverse().eventCallback("onReverseComplete", () => {
        setIsExpanded(false);
      });
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      if (isExpanded) {
        tlRef.current?.reverse().eventCallback("onReverseComplete", () => {
          setIsExpanded(false);
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      } else {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div
      className={`w-full transition-all duration-500 z-[1000] ${isFixed ? "fixed top-2 left-0 scale-[0.98]" : "relative mt-6"}`}
    >
      <div className="max-w-[1450px] mx-auto px-4 md:px-8">
        <nav
          ref={navRef}
          className={`relative border border-blue-600/70 rounded-[2rem] backdrop-blur-2xl transition-all bg-black/40 ${
            isExpanded
              ? "shadow-[0_0_50px_rgba(59,130,246,0.15)] overflow-y-auto max-h-[90vh]"
              : "shadow-md overflow-hidden"
          }`}
        >
          {/* Top Bar */}
          <div className="h-[64px] sticky top-0 flex items-center justify-between px-8 z-30">
            <div
              className="flex items-center cursor-pointer group"
              onClick={() => scrollToSection("hero")}
            >
              <div ref={logoRef} className="flex items-center justify-center">
                <Image
                  height={35}
                  width={35}
                  src={aLogo}
                  alt="logo"
                  className="drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]"
                />
              </div>
              <h2 className="text-2xl font-black text-transparent bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500 bg-clip-text tracking-tighter">
                SIF
              </h2>
            </div>

            <button
              onClick={toggleMenu}
              className="flex flex-col gap-1.5 justify-center items-end group w-12 h-12 outline-none"
            >
              <span
                className={`h-[2px] bg-blue-500 transition-all duration-500 ${isExpanded ? "w-8 translate-y-[8px] rotate-[225deg]" : "w-8"}`}
              />
              <span
                className={`h-[2px] bg-cyan-400 transition-all duration-300 ${isExpanded ? "opacity-0 translate-x-4" : "w-5"}`}
              />
              <span
                className={`h-[2px] bg-blue-300 transition-all duration-500 ${isExpanded ? "w-8 -translate-y-[8px] -rotate-[225deg]" : "w-10"}`}
              />
            </button>
          </div>

          {/* Expanded Content - Grid layout for better responsiveness */}
          <div
            className={`p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4 transition-all duration-500 ${isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 hidden"}`}
          >
            {menuItems.map((item, idx) => (
              <div
                key={item.id}
                ref={(el) => {
                  if (el) cardsRef.current[idx] = el;
                }}
                onClick={() => scrollToSection(item.id)}
                className="group relative flex flex-col justify-between p-5 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-blue-600/[0.08] hover:border-blue-500/50 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Background Glow on Hover */}
                <div className="absolute -right-4 -top-4 w-16 h-16 bg-blue-500/10 blur-2xl group-hover:bg-blue-500/20 transition-all" />

                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono text-blue-500/60 group-hover:text-blue-400 transition-colors">
                    0{idx + 1}
                  </span>
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 translate-x-2 -translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
                    <GoArrowUpRight size={14} />
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-all duration-300 group-hover:translate-x-1">
                    {item.name}
                  </h3>
                  <p className="text-[11px] text-gray-500 mt-1 line-clamp-1 group-hover:text-gray-300 transition-colors">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Line Animation */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-600 to-cyan-400 group-hover:w-full transition-all duration-700" />
              </div>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
