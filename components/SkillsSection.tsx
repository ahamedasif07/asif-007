"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "./sectionTitle/SectionTitle";

// Technical Icons
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiGithub,
  SiFigma,
  SiPhp,
} from "react-icons/si";

// Soft Skills Icons
import {
  Lightbulb,
  Users,
  Clock,
  MessageSquare,
  Target,
  Rocket,
  Search,
  Brain,
  ShieldCheck,
  Zap,
} from "lucide-react";

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  color: string;
}

const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"technical" | "soft">("technical");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const technicalSkills: Skill[] = [
    { name: "HTML5", level: 95, icon: <SiHtml5 />, color: "text-[#E34F26]" }, // HTML Orange
    { name: "CSS3", level: 90, icon: <SiCss3 />, color: "text-[#1572B6]" }, // CSS Blue
    {
      name: "Tailwind",
      level: 92,
      icon: <SiTailwindcss />,
      color: "text-[#06B6D4]",
    }, // Tailwind Cyan
    {
      name: "JavaScript",
      level: 85,
      icon: <SiJavascript />,
      color: "text-[#F7DF1E]",
    }, // JS Yellow
    {
      name: "TypeScript",
      level: 80,
      icon: <SiTypescript />,
      color: "text-[#3178C6]",
    }, // TS Blue
    { name: "React.js", level: 88, icon: <SiReact />, color: "text-[#61DAFB]" }, // React Sky Blue
    {
      name: "Next.js",
      level: 82,
      icon: <SiNextdotjs />,
      color: "text-[#FFFFFF]",
    }, // Next.js White
    { name: "PHP", level: 75, icon: <SiPhp />, color: "text-[#777BB4]" }, // PHP Purple/Blue
    { name: "GitHub", level: 85, icon: <SiGithub />, color: "text-[#fafafa]" }, // GitHub White/Gray
    { name: "Figma", level: 90, icon: <SiFigma />, color: "text-[#F24E1E]" }, // Figma Red/Orange
  ];

  const softSkills: Skill[] = [
    {
      name: "Problem Solving",
      level: 90,
      icon: <Lightbulb size={40} />,
      color: "text-[#FACC15]",
    },
    {
      name: "Teamwork",
      level: 95,
      icon: <Users size={40} />,
      color: "text-[#60A5FA]",
    },
    {
      name: "Time Management",
      level: 85,
      icon: <Clock size={40} />,
      color: "text-[#F87171]",
    },
    {
      name: "Communication",
      level: 88,
      icon: <MessageSquare size={40} />,
      color: "text-[#34D399]",
    },
    {
      name: "Adaptability",
      level: 92,
      icon: <Zap size={40} />,
      color: "text-[#A78BFA]",
    },
    {
      name: "Critical Thinking",
      level: 85,
      icon: <Brain size={40} />,
      color: "text-[#EC4899]",
    },
    {
      name: "Project Management",
      level: 80,
      icon: <Target size={40} />,
      color: "text-[#FB923C]",
    },
    {
      name: "Quick Learner",
      level: 95,
      icon: <Rocket size={40} />,
      color: "text-[#22D3EE]",
    },
    {
      name: "Attention to Detail",
      level: 88,
      icon: <Search size={40} />,
      color: "text-[#818CF8]",
    },
    {
      name: "Responsibility",
      level: 98,
      icon: <ShieldCheck size={40} />,
      color: "text-[#4ADE80]",
    },
  ];

  const currentSkills =
    activeTab === "technical" ? technicalSkills : softSkills;

  return (
    <section className="max-w-[1400px] mx-auto text-white py-20 px-4 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-[-5%] left-[-5%] w-[35%] h-[35%] bg-blue-600/5 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-[-5%] right-[-5%] w-[35%] h-[35%] bg-cyan-600/5 blur-[100px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title Section */}
        <div className="flex justify-center mb-12">
          <SectionTitle title="MY SKILLS" />
        </div>

        <div className="text-center mb-16">
          {/* Tabs Control */}
          <div className="flex justify-center mt-6 space-x-3 md:space-x-4 bg-slate-900/50 w-fit mx-auto p-1.5 rounded-full border border-slate-800">
            <button
              onClick={() => setActiveTab("technical")}
              className={`px-6 py-2.5 md:px-8 md:py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 ${
                activeTab === "technical"
                  ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                  : "text-slate-400 hover:text-blue-400"
              }`}
            >
              Technical Skills
            </button>
            <button
              onClick={() => setActiveTab("soft")}
              className={`px-6 py-2.5 md:px-8 md:py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 ${
                activeTab === "soft"
                  ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                  : "text-slate-400 hover:text-blue-400"
              }`}
            >
              Soft Skills
            </button>
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6"
        >
          <AnimatePresence mode="wait">
            {currentSkills.map((skill, index) => (
              <motion.div
                key={`${activeTab}-${skill.name}`}
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -15 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative bg-[#0f172a]/40 backdrop-blur-md border border-slate-800 p-6 rounded-[2rem] flex flex-col items-center text-center hover:border-blue-500/30 hover:bg-slate-800/40 transition-all duration-300 shadow-xl"
              >
                {/* Brand Real Color Icon */}
                <div
                  className={`text-5xl mb-4 transition-all duration-500 group-hover:scale-110 drop-shadow-md ${skill.color}`}
                >
                  {skill.icon}
                </div>

                <h4 className="text-sm md:text-base font-bold text-slate-200 group-hover:text-white mb-3">
                  {skill.name}
                </h4>

                {/* Progress Bar Container */}
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-blue-600 to-cyan-400"
                  />
                </div>

                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                  {skill.level}% expertise
                </span>

                {/* Subtle blue bottom glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-1 blur-md rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 bg-blue-500"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
