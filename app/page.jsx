"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// কম্পোনেন্টসমূহ
import Hero from "@/components/Hero";
import NavBar from "@/components/Navbar";
import Particles from "@/components/Particles";
import SocialMedia from "@/components/SocailMedia";
import StatsSection from "@/components/StateSection";
import About from "@/components/About";
import Projects from "@/components/Proiject";
import SkillsSection from "@/components/SkillsSection";
import Contact from "@/components/Contact";
import TestimonialSlider from "@/components/Testimonials";
import FAQSection from "@/components/Faq";
import Footer from "@/components/Footer";
import SmokeyCursor from "@/components/lightswind/smokey-cursor";
import CutomSmockCarsor from "@/components/lightswind/CustomSmockCarsor";

export default function Home() {
  const container = useRef(null);
  const [isOpened, setIsOpened] = useState(false);

  const { contextSafe } = useGSAP({ scope: container });

  // ১. রোবট আই ফলো লজিক
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isOpened) return;
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 30;
      const yPos = (clientY / window.innerHeight - 0.5) * 20;

      gsap.to(".robot-pupil", {
        x: xPos,
        y: yPos,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isOpened]);

  // ২. ইন্ট্রো এনিমেশন
  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(".robot-assembly", {
        y: -200,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
      })
        .from(
          ".animate-letter",
          {
            y: -500,
            opacity: 0,
            rotateZ: 10,
            duration: 1,
            stagger: 0.07,
            ease: "bounce.out",
          },
          "-=0.5",
        )
        .to(".open-btn", { opacity: 1, y: 0, duration: 0.2 });

      gsap.to(".robot-outer-ring", {
        rotate: 360,
        repeat: -1,
        duration: 8,
        ease: "none",
      });
    },
    { scope: container },
  );

  // ৩. ডোর ওপেনিং লজিক
  const openDoors = contextSafe(() => {
    if (isOpened) return;
    const tl = gsap.timeline({
      onComplete: () => {
        setIsOpened(true);
        // পার্টিকেলস রি-ফ্রেশ করার জন্য সামান্য ডিলে
        window.dispatchEvent(new Event("resize"));
      },
    });

    tl.to(".open-btn", { scale: 0.8, opacity: 0, duration: 0.3 })
      .to(".intro-content, .robot-assembly", {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power2.in",
      })
      .to(
        ".left-door-panel",
        { xPercent: -100, duration: 1.5, ease: "expo.inOut" },
        "split",
      )
      .to(
        ".right-door-panel",
        { xPercent: 100, duration: 1.5, ease: "expo.inOut" },
        "split",
      );
  });

  const renderLetters = (text) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className="animate-letter inline-block cursor-pointer transition-none"
        onMouseEnter={(e) =>
          gsap.to(e.target, { y: -40, color: "#00ccff", duration: 0.3 })
        }
        onMouseLeave={(e) =>
          gsap.to(e.target, { y: 0, color: "white", duration: 0.5 })
        }
        style={{
          whiteSpace: char === " " ? "pre" : "normal",
          display: "inline-block",
        }}
      >
        {char}
      </span>
    ));
  };

  return (
    <div
      ref={container}
      className="relative w-full min-h-screen bg-black overflow-x-hidden"
    >
      {/* কাস্টম কার্সার সবসময় উপরে */}
      <div className="fixed inset-0 z-[100000] pointer-events-none">
        <CutomSmockCarsor />
        <SmokeyCursor />
        <CutomSmockCarsor />
      </div>

      {/* ডোর লেয়ার */}
      {!isOpened && (
        <div className="door-wrapper-overlay fixed inset-0 z-[50] flex flex-col items-center bg-[#050505] overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#155DFC_1px,transparent_1px)] bg-[size:30px_30px]" />
          <div className="relative w-full h-full flex">
            <div className="left-door-panel w-1/2 h-full bg-[#080808] border-r border-cyan-500/20 z-20 shadow-[inset_-50px_0_100px_rgba(0,0,0,0.9)]" />
            <div className="right-door-panel w-1/2 h-full bg-[#080808] border-l border-cyan-500/20 z-20 shadow-[inset_50px_0_100px_rgba(0,0,0,0.9)]" />

            <div className="absolute inset-0 z-[30] flex flex-col items-center pointer-events-none">
              <div className="robot-assembly relative mt-20 mb-12 pointer-events-auto">
                <div className="robot-outer-ring relative w-32 h-32 rounded-full border-b-2 border-t-2 border-cyan-500/40 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full border border-cyan-500/20 bg-black/50 backdrop-blur-sm flex items-center justify-center">
                    <div className="robot-pupil w-8 h-8 bg-cyan-500 rounded-full shadow-[0_0_20px_#00ccff] relative">
                      <div className="absolute top-1 left-1 w-2 h-2 bg-white/60 rounded-full" />
                    </div>
                  </div>
                </div>
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[2px] h-20 bg-gradient-to-b from-cyan-500 to-transparent" />
              </div>

              <div className="intro-content text-center pointer-events-auto mt-32">
                <h1 className="text-white font-black text-5xl md:text-8xl tracking-tighter flex justify-center mb-6">
                  {renderLetters("ASIF HOSEN'S")}
                </h1>
                <div className="space-y-10">
                  <p className="text-cyan-500/40 font-mono tracking-[0.8em] text-xs uppercase animate-pulse">
                    Welcome To My Profile
                  </p>
                  <button
                    onClick={openDoors}
                    className="open-btn opacity-0 translate-y-10 z-30 px-10 py-3 bg-transparent border border-cyan-500/50 text-cyan-500 font-bold tracking-[0.3em] hover:bg-cyan-600 hover:text-black transition-all duration-500 text-xs rounded-sm shadow-[0_0_15px_rgba(0,204,255,0.1)]"
                  >
                    Explore Me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* মেইন সাইট কন্টেন্ট */}
      <main
        className={`relative w-full min-h-screen bg-black transition-all duration-700 ${isOpened ? "opacity-100" : "opacity-0"}`}
      >
        <div className="absolute right-[60px] md:right-[115px] top-[100px] md:top-[280px] z-[60]">
          <SocialMedia />
        </div>

        <NavBar />

        {/* Hero Section with Particles Fix */}
        <section
          id="hero"
          className="relative w-full min-h-[900px] flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <Particles
              particleColors={["#155DFC"]}
              particleCount={500}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover
              alphaParticles={false}
              disableRotation={false}
              pixelRatio={1}
            />
          </div>
          <div className="relative z-10 w-full h-full">
            <Hero />
          </div>
        </section>

        <StatsSection />
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="feedback">
          <TestimonialSlider />
        </section>
        <section id="faq">
          <FAQSection />
        </section>
        <Footer />
      </main>
    </div>
  );
}
