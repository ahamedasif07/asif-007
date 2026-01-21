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
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const menuItems: MenuItem[] = [
    { name: "Home", id: "hero", description: "Return to top" },
    { name: "About", id: "about", description: "Our story & vision" },
    { name: "Projects", id: "projects", description: "Recent works" },
    { name: "Skills", id: "skills", description: "Expertise" },
    { name: "Contact", id: "contact", description: "Get in touch" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsFixed(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const navEl = navRef.current;
      if (!navEl) return;

      gsap.set(navEl, { height: 64 });
      gsap.set(cardsRef.current, { y: 30, opacity: 0 });

      const tl = gsap.timeline({ paused: true });

      tl.to(navEl, {
        height: window.innerWidth < 768 ? "auto" : 280,
        backgroundColor: "rgba(10, 10, 10, 0.98)",
        duration: 0.4,
        ease: "power3.out",
      }).to(
        cardsRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.05,
          ease: "power2.out",
        },
        "-=0.2",
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
      // মেনু ক্লোজ করার জন্য অ্যানিমেশন রিভার্স করা
      if (isExpanded) {
        tlRef.current?.reverse().eventCallback("onReverseComplete", () => {
          setIsExpanded(false);
          // অ্যানিমেশন শেষ হলে স্ক্রল করা
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      } else {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div
      className={`w-full transition-all duration-300 z-[1000] ${
        isFixed ? "fixed top-2 left-0" : "relative mt-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <nav
          ref={navRef}
          className={`relative border border-blue-500/30 rounded-2xl backdrop-blur-xl transition-shadow bg-black/20 ${
            isExpanded
              ? "shadow-2xl overflow-y-auto max-h-[85vh]"
              : "shadow-md overflow-hidden"
          }`}
        >
          {/* Top Bar */}
          <div className="h-[64px] sticky top-0 flex items-center justify-between px-6 z-30 bg-black/10 backdrop-blur-md">
            <div
              className="flex items-center gap-0 cursor-pointer"
              onClick={() => scrollToSection("hero")}
            >
              <Image height={35} width={35} src={aLogo} alt="logo" />
              <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#1A5685] to-[#63c7ee] bg-clip-text ml-2">
                SIF
              </h2>
            </div>

            <button
              onClick={toggleMenu}
              className="flex flex-col gap-1.5 justify-center items-end group w-10 h-10"
              aria-label="Toggle Menu"
            >
              <span
                className={`h-[2px] bg-blue-500 transition-all duration-300 ${isExpanded ? "w-8 translate-y-[8px] rotate-45" : "w-8"}`}
              />
              <span
                className={`h-[2px] bg-blue-400 transition-all duration-300 ${isExpanded ? "opacity-0" : "w-5"}`}
              />
              <span
                className={`h-[2px] bg-blue-300 transition-all duration-300 ${isExpanded ? "w-8 -translate-y-[8px] -rotate-45" : "w-6"}`}
              />
            </button>
          </div>

          {/* Expanded Content */}
          <div
            className={`card-content p-6 flex flex-col md:flex-row gap-4 transition-all ${
              isExpanded ? "flex opacity-100" : "hidden opacity-0"
            }`}
          >
            {menuItems.map((item, idx) => (
              <div
                key={item.id}
                ref={(el) => {
                  if (el) cardsRef.current[idx] = el;
                }}
                onClick={() => scrollToSection(item.id)}
                className="flex-shrink-0 md:flex-1 group cursor-pointer p-5 rounded-xl border border-white/5 bg-white/5 hover:bg-blue-500/10 hover:border-blue-500/40 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-mono text-blue-400">
                    0{idx + 1}
                  </span>
                  <GoArrowUpRight className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-400 mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
