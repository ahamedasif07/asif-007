"use client";

import React, { useEffect, useState } from "react";
import { FaBook, FaBriefcase, FaLaptopCode } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
// motion এবং Variants টাইপ ইমপোর্ট করা হয়েছে
import { motion, AnimatePresence, Variants } from "framer-motion";
import SectionTitle from "./sectionTitle/SectionTitle";
import ImageComparisonSlider from "./ImageComparisonSlider";

// ১. ডাটা ইন্টারফেস
interface Education {
  id: number;
  schoolName: string;
  examinationName: string;
  gpa: string;
  startDate: string;
  endDate: string;
}

interface Experience {
  id: number;
  work: string;
  position: string;
  duration: string;
}

// ২. ফ্রেমার মোশন ভেরিয়েন্ট টাইপ ডিক্লারেশন
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.15, // আইটেমগুলো একে একে আসার গ্যাপ
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    x: -30,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 120, damping: 12 },
  },
};

const About: React.FC = () => {
  const [activeSection, setActiveSection] = useState<
    "education" | "experience"
  >("education");

  const educationData: Education[] = [
    {
      id: 1,
      schoolName: "Mymensingh Polytechnic Institute",
      examinationName: "Diploma Engineer - CST",
      gpa: "3.80",
      startDate: "Jan 2021",
      endDate: "Jan 2024",
    },
    {
      id: 2,
      schoolName: "Batajore BM High School",
      examinationName: "SSC - Computer Technology",
      gpa: "A+",
      startDate: "Jan 2018",
      endDate: "Jan 2020",
    },
    {
      id: 3,
      schoolName: "Batajore BM High School",
      examinationName: "JSC - General",
      gpa: "4.50",
      startDate: "Jan 2021",
      endDate: "Jan 2024",
    },
  ];

  const workExperience: Experience[] = [
    {
      id: 1,
      work: "Spark Tech Agency",
      position: "Front-End Developer",
      duration: "Dec 2025 - Present",
    },
    {
      id: 2,
      work: "Desh IT BD",
      position: "Front-End Developer",
      duration: "Sep 2025 - Nov 2025",
    },
    {
      id: 3,
      work: "Freelance IT",
      position: "Front-End Developer",
      duration: "May 2024 - Jun 2024",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 800, offset: 100, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div
      id="About"
      className="max-w-[1400px] px-4 mx-auto overflow-hidden  text-white py-20"
    >
      <div className="mx-auto">
        <div className="flex justify-center mb-[60px]">
          <SectionTitle title="ABOUT ME" />
        </div>

        <div className="flex lg:flex-row flex-col md:justify-between justify-center items-start gap-[80px] w-full">
          {/* Left Side: Slider */}
          <div data-aos="fade-right" className="lg:w-1/2 w-full">
            <div className="flex-shrink-0 mx-auto md:mx-0 flex justify-center items-center">
              <ImageComparisonSlider />
            </div>
          </div>

          {/* Right Side: Animated Content */}
          <div className="lg:w-1/2 w-full">
            {/* Tab Buttons */}
            <div className="flex flex-col gap-4 md:flex-row mb-8">
              {(["education", "experience"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveSection(tab)}
                  className={`px-8 py-3 w-full rounded-lg border font-semibold capitalize transition-all duration-300 ${
                    activeSection === tab
                      ? "bg-blue-600 border-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                      : "bg-transparent border-blue-600/30 hover:border-blue-500"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="min-h-[450px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <p className="text-[15px] text-gray-300 mb-8 leading-relaxed italic border-l-4 border-blue-600 pl-4">
                    {activeSection === "education"
                      ? "I am a CSE student with 3+ years of web development experience, dedicated to mastering modern tech stacks."
                      : "Professional journey as a Front-End Developer, focusing on creating responsive and user-centric web applications."}
                  </p>

                  <div className="space-y-4">
                    {(activeSection === "education"
                      ? educationData
                      : workExperience
                    ).map((item) => (
                      <motion.div
                        key={item.id}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, x: 10 }}
                        className="group flex gap-5 items-center border border-blue-600/20 p-5 rounded-xl bg-gradient-to-r from-blue-900/10 to-transparent hover:border-blue-600/60 transition-all shadow-sm"
                      >
                        <div className="text-2xl p-4 rounded-lg bg-black border border-blue-600/50 text-blue-500 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300">
                          {activeSection === "education" ? (
                            <FaBook />
                          ) : (
                            <FaLaptopCode />
                          )}
                        </div>

                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-100">
                            {"schoolName" in item ? item.schoolName : item.work}
                          </h3>
                          <p className="text-blue-400 font-medium text-sm">
                            {"examinationName" in item
                              ? `${item.examinationName} (${item.gpa})`
                              : item.position}
                          </p>
                          <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                            {"startDate" in item
                              ? `${item.startDate} - ${item.endDate}`
                              : item.duration}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
