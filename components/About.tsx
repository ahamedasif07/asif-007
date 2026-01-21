"use client";

import React, { useEffect, useState } from "react";

import { FaBook } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "./sectionTitle/SectionTitle";
import ImageComparisonSlider from "./ImageComparisonSlider";

// ১. টাইপ ইন্টারফেস ডিফাইন করা
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

const About: React.FC = () => {
  // ২. স্টেটের জন্য টাইপ ডিফাইন করা
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
      work: "Gorur Ghash",
      position: "Front-End - Developer",
      duration: "May 2024 - July 2024",
    },
    {
      id: 2,
      work: "Sultan Dine",
      position: "Front-End - Developer",
      duration: "Mar 2024 - April 2024",
    },
    {
      id: 3,
      work: "Diagram",
      position: "Front-End - Developer",
      duration: "Jan 2024 - Feb 2024",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div id="About" className="max-w-[1400px] px-4 mx-auto overflow-hidden">
      <div className="mx-auto overflow-hidden">
        <div className="flex justify-center mt-[120px] mb-[60px]">
          <SectionTitle title="ABOUT ME" />
        </div>

        <div className="flex lg:flex-row flex-col md:justify-between justify-center items-start gap-[80px] w-full">
          {/* Left Side: Slider */}
          <div data-aos="fade-right" className="lg:w-1/2 w-full">
            <div className="flex-shrink-0 mx-auto md:mx-0 flex justify-center items-center">
              <ImageComparisonSlider />
            </div>
          </div>

          {/* Right Side: Details */}
          <div data-aos="fade-left" className="lg:w-1/2 w-full py-4">
            <div className="flex flex-shrink-0 flex-col gap-4 md:flex-row">
              <button
                onClick={() => setActiveSection("education")}
                className={`px-6 py-3 w-full rounded-lg border transition duration-300 shadow-md ${
                  activeSection === "education"
                    ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/50"
                    : "bg-black border-blue-600/50 text-white hover:border-blue-500"
                }`}
              >
                Education
              </button>

              <button
                onClick={() => setActiveSection("experience")}
                className={`px-6 py-3 w-full rounded-lg border transition duration-300 ${
                  activeSection === "experience"
                    ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/50"
                    : "bg-black border-blue-600/50 text-white hover:border-blue-500"
                }`}
              >
                Experience
              </button>
            </div>

            <div className="mt-4 rounded-md">
              {activeSection === "education" ? (
                <div>
                  <p className="text-[14px] text-gray-200">
                    I&apos;m a CSE student with over three years + of web
                    development experience. As a creative person and project
                    leader, I&apos;ve been dedicated to learning various
                    programming languages and modern technologies.
                  </p>
                  <div className="mt-4 overflow-hidden">
                    {educationData.map((education, index) => {
                      const aosEffects = ["fade-right", "fade-up", "fade-left"];
                      return (
                        <div
                          className="border flex gap-5 items-center border-blue-600 p-2 mb-2"
                          key={education.id}
                        >
                          <div className="text-3xl p-[10px] hover:text-gray-200 transition-all duration-300 ease-in-out hover:border-blue-600 border border-gray-300 text-blue-600">
                            <FaBook />
                          </div>
                          <div data-aos={aosEffects[index % aosEffects.length]}>
                            <h3 className="text-[15px] font-semibold text-gray-200">
                              {education.schoolName}
                            </h3>
                            <p className="text-[12px] my-[3px] text-blue-600">
                              {education.examinationName} ({education.gpa})
                            </p>
                            <p className="text-[12px] text-gray-300">
                              ({education.startDate}-{education.endDate})
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div>
                  <p className="text-[14px] text-gray-200">
                    I&apos;m a CST student with a 4-year Diploma in Computer
                    Science and Technology. As class CR, I lead with creativity
                    and innovation, focusing on pursuing a BSC in Software
                    Engineering and modern technologies.
                  </p>
                  <div className="mt-4 overflow-hidden">
                    {workExperience.map((experience, index) => {
                      const aosEffects = ["fade-right", "fade-up", "fade-left"];
                      return (
                        <div
                          className="border flex gap-5 items-center border-blue-600 p-2 mb-2"
                          key={experience.id}
                        >
                          <div className="text-3xl p-[10px] hover:text-gray-200 transition-all duration-300 ease-in-out hover:border-blue-600 border border-gray-300 text-blue-600">
                            <FaBook />
                          </div>
                          <div data-aos={aosEffects[index % aosEffects.length]}>
                            <h3 className="text-[15px] font-semibold text-gray-200">
                              {experience.work}
                            </h3>
                            <p className="text-[12px] my-[3px] text-blue-600">
                              {experience.position}
                            </p>
                            <p className="text-[12px] text-gray-300">
                              ({experience.duration})
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
