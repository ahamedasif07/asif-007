"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import SectionTitle from "./sectionTitle/SectionTitle";
import ProjectCard from "./ProjectCard";

interface Project {
  id: number;
  image: string;
  projectName: string;
  projectDescription: string;
  LiveLink: string;
  isLive: boolean;
  isWorking: boolean;
}

const Projects = () => {
  const [filter, setFilter] = useState<"all" | "live" | "working">("all");

  const projects: Project[] = [
    {
      id: 1,
      image:
        "https://i.ibb.co.com/20sRZcg7/459318469-510183361732201-973057694240494391-n.jpg",
      projectName: "Gorur Ghash",
      projectDescription:
        "A modern e-commerce platform built with React.js and Tailwind CSS.",
      LiveLink: "https://project-gorur-ghash-d7b9.vercel.app/",
      isLive: false,
      isWorking: false,
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/fV87XKLh/Screenshot-33.png",
      projectName: "Sailor",
      projectDescription:
        "Sailor — A fully functional fashion e-commerce website.",
      LiveLink: "https://seilor-project-cu2a.vercel.app/",
      isLive: false,
      isWorking: true,
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/qYcSsnQj/Screenshot-31.png",
      projectName: "Sharif Bering",
      projectDescription: "An e-commerce website for mechanical products.",
      LiveLink: "https://sbmbd.net/",
      isLive: true,
      isWorking: false,
    },
    {
      id: 4,
      image: "https://i.ibb.co/bMbKVHSG/Screenshot-45.png",
      projectName: "Frish Gosory",
      projectDescription: "A modern e-commerce shop template.",
      LiveLink: "https://project-fresh-grocery.vercel.app/",
      isLive: false,
      isWorking: false,
    },
    {
      id: 5,
      image: "https://i.ibb.co.com/gbPXf1T5/Screenshot-20.png",
      projectName: "Scapesync",
      projectDescription:
        "Fully responsive Next.js application converted from Figma.",
      LiveLink: "https://scapesync-mauve.vercel.app/",
      isLive: false,
      isWorking: false,
    },
    {
      id: 6,
      image: "https://i.ibb.co/Df6FMcvQ/image-resize.jpg",
      projectName: "Sultan Dine",
      projectDescription:
        "A visually appealing restaurant website created with React.js.",
      LiveLink: "https://ak-asif-sultan-dine.surge.sh/",
      isLive: false,
      isWorking: false,
    },
    {
      id: 7,
      image:
        "https://i.ibb.co.com/gLFCzqmL/324268690-3333959940256153-6463376740799483701-n.jpg",
      projectName: "Diagram",
      projectDescription:
        "Online store using React.js with integrated payment gateway.",
      LiveLink: "http://ak-asif-diagram.surge.sh",
      isLive: false,
      isWorking: false,
    },
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "live") return p.isLive;
    if (filter === "working") return p.isWorking;
    return true;
  });

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div
      id="Projects"
      className="max-w-[1400px] px-4 mx-auto overflow-hidden py-20"
    >
      <div className="py-[60px] mx-auto">
        <div className="flex justify-center mt-[80px] mb-[20px]">
          <SectionTitle title="MY PROJECTS" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-10 mb-12">
          {(["all", "live", "working"] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-8 py-2.5 rounded-full border-2 font-medium capitalize transition-all duration-300 ${
                filter === type
                  ? "bg-blue-600 border-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)] scale-105"
                  : "bg-transparent border-blue-600/30 text-gray-400 hover:border-blue-500 hover:text-white"
              }`}
            >
              {type === "all"
                ? "All Projects"
                : type === "live"
                  ? "Live Projects"
                  : "Ongoing Projects"}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid place-items-center items-stretch lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 px-4 md:px-0">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                className="w-full h-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-gray-500 italic">
            No projects found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
