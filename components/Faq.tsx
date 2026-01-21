"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react"; // lucide-react ব্যবহার করা হয়েছে আইকনের জন্য
import SectionTitle from "./sectionTitle/SectionTitle";

// TypeScript Type Declaration
interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in React, Tailwind CSS, Material UI, and Vite for building modern, responsive web applications.",
  },
  {
    question: "How much experience do you have in frontend development?",
    answer:
      "I have 2.5 years of experience as a frontend web developer, working on various projects including e-commerce and restaurant websites.",
  },
  {
    question: "Do you have experience with UI/UX design?",
    answer:
      "Yes, I have experience working with Figma and CodePen to design and prototype user-friendly interfaces.",
  },
  {
    question: "What projects have you worked on?",
    answer:
      "I have developed a responsive e-commerce website and a restaurant website with animations and dynamic components.",
  },
  {
    question: "What are your core strengths as a frontend developer?",
    answer:
      "My strengths include responsive design, animation effects, state management, and API integration using React.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-[1400px]  px-4 mx-auto mt-[50px] pb-[40px]">
      <section className="rounded-2xl">
        <div className="py-10 mx-auto">
          <div className="flex justify-center pb-[25px]">
            <SectionTitle title="FAQ" />
          </div>

          <div className="mt-12 space-y-4 max-w-5xl mx-auto">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`border-2 rounded-xl overflow-hidden transition-colors duration-300 ${
                    isOpen
                      ? "border-blue-500 bg-blue-500/5"
                      : "border-gray-800 bg-transparent"
                  }`}
                >
                  <button
                    className="flex items-center justify-between w-full p-5 md:p-6 text-left focus:outline-none"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="font-semibold text-white text-sm md:text-lg">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        isOpen
                          ? "bg-blue-600 text-white"
                          : "bg-gray-800 text-gray-400"
                      }`}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: "auto", marginBottom: 0 },
                          collapsed: { opacity: 0, height: 0, marginBottom: 0 },
                        }}
                        transition={{
                          duration: 0.4,
                          ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                      >
                        <div className="px-5 md:px-6 pb-6 text-gray-400 text-sm md:text-base leading-relaxed border-t border-gray-800/50 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQSection;
