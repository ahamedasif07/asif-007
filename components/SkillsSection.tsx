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
    { name: "HTML5", level: 95, icon: <SiHtml5 />, color: "text-blue-400" },
    { name: "CSS3", level: 90, icon: <SiCss3 />, color: "text-blue-500" },
    {
      name: "Tailwind",
      level: 92,
      icon: <SiTailwindcss />,
      color: "text-cyan-400",
    },
    {
      name: "JavaScript",
      level: 85,
      icon: <SiJavascript />,
      color: "text-blue-300",
    },
    {
      name: "TypeScript",
      level: 80,
      icon: <SiTypescript />,
      color: "text-blue-600",
    },
    { name: "React.js", level: 88, icon: <SiReact />, color: "text-cyan-500" },
    {
      name: "Next.js",
      level: 82,
      icon: <SiNextdotjs />,
      color: "text-slate-200",
    },
    { name: "PHP", level: 75, icon: <SiPhp />, color: "text-blue-400" },
    {
      name: "GitHub/Git",
      level: 85,
      icon: <SiGithub />,
      color: "text-slate-400",
    },
    { name: "Figma", level: 90, icon: <SiFigma />, color: "text-blue-200" },
  ];

  const softSkills: Skill[] = [
    {
      name: "Problem Solving",
      level: 90,
      icon: <Lightbulb size={40} />,
      color: "text-blue-400",
    },
    {
      name: "Teamwork",
      level: 95,
      icon: <Users size={40} />,
      color: "text-cyan-400",
    },
    {
      name: "Time Management",
      level: 85,
      icon: <Clock size={40} />,
      color: "text-indigo-400",
    },
    {
      name: "Communication",
      level: 88,
      icon: <MessageSquare size={40} />,
      color: "text-blue-300",
    },
    {
      name: "Adaptability",
      level: 92,
      icon: <Zap size={40} />,
      color: "text-sky-400",
    },
    {
      name: "Critical Thinking",
      level: 85,
      icon: <Brain size={40} />,
      color: "text-blue-500",
    },
    {
      name: "Project Management",
      level: 80,
      icon: <Target size={40} />,
      color: "text-cyan-500",
    },
    {
      name: "Quick Learner",
      level: 95,
      icon: <Rocket size={40} />,
      color: "text-blue-400",
    },
    {
      name: "Attention to Detail",
      level: 88,
      icon: <Search size={40} />,
      color: "text-indigo-300",
    },
    {
      name: "Responsibility",
      level: 98,
      icon: <ShieldCheck size={40} />,
      color: "text-blue-200",
    },
  ];

  const currentSkills =
    activeTab === "technical" ? technicalSkills : softSkills;

  return (
    <section className="max-w-[1400px] mx-auto text-white py-20 px-4 relative overflow-hidden">
      {/* Soft Background Glows (Blue focused) */}
      <div className="absolute top-[-5%] left-[-5%] w-[35%] h-[35%] bg-blue-600/5 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-[-5%] right-[-5%] w-[35%] h-[35%] bg-cyan-600/5 blur-[100px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title Section */}
        <div className="flex justify-center mb-12">
          <SectionTitle title="MY SKILLS" />
        </div>

        <div className="text-center mb-16">
          {/* Tabs Control - Blue Theme */}
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
                {/* Icon with subtle Blue Glow */}
                <div
                  className={`text-5xl mb-4 transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] ${skill.color}`}
                >
                  {skill.icon}
                </div>

                <h4 className="text-sm md:text-base font-bold text-slate-200 group-hover:text-blue-300 mb-3">
                  {skill.name}
                </h4>

                {/* Progress Bar Container - Blue Gradient */}
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
