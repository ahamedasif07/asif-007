"use client";

import Image from "next/image";
import React from "react";
import { FiExternalLink, FiArrowRight } from "react-icons/fi";

interface ProjectProps {
  project: {
    id?: number;
    projectName: string;
    projectDescription: string;
    image: string;
    LiveLink: string;
    isLive?: boolean;
    isWorking?: boolean;
  };
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  const { projectName, projectDescription, image, LiveLink, isWorking } =
    project;

  return (
    <div className="group relative w-full bg-[#0f172a] rounded-2xl p-[2px] overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]">
      {/* ১. Infinite Border Effect (Always Rotating with Blue Shades) */}
      <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1e40af_0%,#2563eb_25%,transparent_50%,#60a5fa_75%,#1e40af_100%)]" />

      {/* ২. Card Body */}
      <div className="relative z-10 w-full h-full bg-[#020617] rounded-[14px] overflow-hidden">
        {/* Image Section */}
        <div className="relative h-[240px] w-full overflow-hidden">
          <Image
            src={image}
            alt={projectName}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
          />

          {/* Blue Glassmorphism Status Badge */}
          <div className="absolute top-4 left-4 z-20 backdrop-blur-md bg-blue-900/30 border border-blue-500/30 px-3 py-1 rounded-full shadow-lg">
            <p className="text-[10px] font-bold text-blue-100 tracking-widest uppercase flex items-center gap-2">
              <span
                className={`w-1.5 h-1.5 rounded-full ${isWorking ? "bg-amber-400 animate-pulse" : "bg-blue-400"}`}
              />
              {isWorking ? "In Progress" : "Live Project"}
            </p>
          </div>

          {/* Strong Blue Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-blue-900/10 opacity-80" />
        </div>

        {/* Content Section */}
        <div className="p-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors duration-300">
              {projectName}
            </h3>
            <a
              href={LiveLink}
              target="_blank"
              className="p-2 rounded-lg bg-blue-900/20 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              <FiExternalLink size={16} />
            </a>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
            {projectDescription}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-blue-900/30">
            <div className="flex items-center gap-2">
              {/* Tech stack accent */}
              <div className="flex -space-x-1">
                <div className="w-2 h-2 rounded-full bg-blue-600" />
                <div className="w-2 h-2 rounded-full bg-blue-400 opacity-60" />
              </div>
              <span className="text-[10px] text-blue-300/60 font-mono tracking-tighter uppercase">
                Next.js • Tailwind • TS
              </span>
            </div>

            <a
              href={LiveLink}
              target="_blank"
              className="flex items-center gap-2 text-xs font-bold text-blue-400 group/link transition-all hover:text-blue-200"
            >
              EXPLORE
              <FiArrowRight className="text-blue-500 group-hover/link:translate-x-1.5 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
