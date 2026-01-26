"use client";

import { useRef, useState } from "react";
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

// ১. ইন্টারেক্টিভ রোবট কম্পোনেন্ট
const WalkingRobot = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-[500px] z-[10] pointer-events-auto cursor-pointer group">
      <iframe
        src="https://my.spline.design/walkingrobot-74892c908f757f49377402633857e4e1/"
        frameBorder="0"
        width="100%"
        height="100%"
        className="transition-transform duration-500 group-hover:scale-110"
        title="Walking Robot"
      ></iframe>
    </div>
  );
};

export default function Home() {
  const container = useRef(null);
  const [isOpened, setIsOpened] = useState(false);

  const { contextSafe } = useGSAP({ scope: container });

  // ডোর ওপেনিং লজিক
  const openDoors = contextSafe(() => {
    if (isOpened) return;
    const tl = gsap.timeline({
      onComplete: () => {
        setIsOpened(true);
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
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <div
      ref={container}
      className="relative w-full min-h-screen bg-black overflow-x-hidden"
    >
      {/* ১. কাস্টম কার্সার - এটি ব্যাকগ্রাউন্ডের উপরে কিন্তু কন্টেন্টের নিচে থাকবে (z-[5]) */}
      <div className="fixed inset-0 z-[5] pointer-events-none">
        <CutomSmockCarsor />
        <SmokeyCursor />
        <CutomSmockCarsor />
      </div>

      {/* ২. এন্ট্রেন্স ডোর লেয়ার - সবার উপরে থাকবে (z-[100]) */}
      {!isOpened && (
        <div className="door-wrapper-overlay fixed inset-0 z-[100] flex flex-col items-center bg-[#050505] overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#155DFC_1px,transparent_1px)] bg-[size:30px_30px]" />
          <div className="relative w-full h-full flex">
            <div className="left-door-panel w-1/2 h-full bg-[#080808] border-r border-cyan-500/20 z-20 shadow-[inset_-50px_0_100px_rgba(0,0,0,0.9)]" />
            <div className="right-door-panel w-1/2 h-full bg-[#080808] border-l border-cyan-500/20 z-20 shadow-[inset_50px_0_100px_rgba(0,0,0,0.9)]" />

            <div className="absolute inset-0 z-[30] flex flex-col items-center pointer-events-none">
              <div className="robot-assembly relative mt-20 mb-12 pointer-events-auto">
                <div className="robot-outer-ring relative w-32 h-32 rounded-full border-b-2 border-t-2 border-cyan-500/40 flex items-center justify-center">
                  <div className="robot-pupil w-8 h-8 bg-cyan-500 rounded-full shadow-[0_0_20px_#00ccff]" />
                </div>
              </div>

              <div className="intro-content text-center pointer-events-auto mt-32">
                <h1 className="text-white font-black text-5xl md:text-8xl tracking-tighter flex justify-center mb-6">
                  {renderLetters("ASIF HOSEN'S")}
                </h1>
                <button
                  onClick={openDoors}
                  className="open-btn px-10 py-3 bg-transparent border border-cyan-500/50 text-cyan-500 font-bold tracking-[0.3em] hover:bg-cyan-600 hover:text-black transition-all duration-500 rounded-sm"
                >
                  Explore Me
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ৩. মেইন সাইট কন্টেন্ট - এটি z-[10] হওয়াতে কার্সারের উপরে থাকবে */}
      <main
        className={`relative w-full z-[10] transition-opacity duration-700 ${
          isOpened ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute right-[60px] md:right-[115px] top-[100px] md:top-[280px] z-[60]">
          <SocialMedia />
        </div>

        <NavBar />

        {/* Hero Section */}
        <section
          id="hero"
          className="relative w-full min-h-[900px] flex items-center justify-center overflow-hidden"
        >
          {/* ব্যাকগ্রাউন্ড পার্টিকেলস - সবার নিচে z-[0] */}
          <div className="absolute inset-0 z-[0]">
            <Particles
              particleColors={["#155DFC"]}
              particleCount={300}
              speed={0.1}
            />
          </div>

          {/* হাঁটা রোবট মডেল */}
          <WalkingRobot />

          {/* Hero Content - কার্সারের উপরে z-[20] */}
          <div className="relative z-[20] w-full h-full pointer-events-none">
            <Hero />
          </div>
        </section>

        {/* নিচের সব সেকশনকে একটি র‍্যাপারে নিয়ে আসা হয়েছে যাতে কন্টেন্ট কার্সারের উপরে থাকে */}
        <div className="relative z-[20] bg-transparent">
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
        </div>
      </main>
    </div>
  );
}
