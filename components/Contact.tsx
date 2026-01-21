"use client";

import React from "react";
// Variants টাইপ ইম্পোর্ট করুন
import { motion, Variants } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";
import SectionTitle from "./sectionTitle/SectionTitle";
import { BasicMap } from "./BasicMap";

const Contact: React.FC = () => {
  // Variants টাইপ ডিফাইন করে দিলে এরর চলে যাবে
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section
      className="max-w-[1400px] mx-auto text-white py-24 px-4 relative overflow-hidden"
      id="contact"
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-[10%] right-[-5%] w-[30%] h-[30%]  blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[30%] blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-center mb-18">
          <SectionTitle title="GET IN TOUCH" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* লেফট সাইড: কন্টাক্ট ইনফরমেশন */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                Let's discuss your project
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                I'm always open to discussing product design work or partnership
                opportunities.
              </p>
            </motion.div>

            <div className="grid gap-6">
              {[
                {
                  icon: <Mail className="text-blue-500" />,
                  label: "Email Me",
                  value: "ahamedasif01729@gmail.com",
                  link: "mailto:ahamedasif01729@gmail.com",
                },
                {
                  icon: <Phone className="text-cyan-500" />,
                  label: "Call Me",
                  value: "+880 127149634",
                  link: "tel:+880 1729149634",
                },
                {
                  icon: <MapPin className="text-blue-400" />,
                  label: "Location",
                  value: "Dhaka, Bangladesh",
                  link: "#",
                },
              ].map((info, i) => (
                <motion.a
                  key={i}
                  href={info.link}
                  custom={i} // এখানে custom prop পাঠানো হচ্ছে
                  initial="hidden"
                  whileInView="visible"
                  variants={cardVariants}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-5 p-5 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-slate-800 group-hover:bg-blue-600 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">
                      {info.label}
                    </p>
                    <p className="text-lg font-semibold text-slate-200">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* সোশ্যাল মিডিয়া লিঙ্কস */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Follow My Work</h3>
              <div className="flex gap-4">
                {[
                  {
                    icon: <Github size={24} />,
                    link: "#",
                    color: "hover:bg-gray-800",
                  },
                  {
                    icon: <Linkedin size={24} />,
                    link: "#",
                    color: "hover:bg-blue-700",
                  },
                  {
                    icon: <Twitter size={24} />,
                    link: "#",
                    color: "hover:bg-sky-500",
                  },
                  {
                    icon: <Facebook size={24} />,
                    link: "#",
                    color: "hover:bg-blue-600",
                  },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    whileHover={{ y: -5, scale: 1.1 }}
                    className={`w-12 h-12 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 transition-all ${social.color}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* রাইট সাইড: কন্টাক্ট ফর্ম */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-[#0f172a]/40 backdrop-blur-xl border border-slate-800 p-8 md:p-10 rounded-[2.5rem] shadow-2xl"
          >
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Ahamed Asif"
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="ahamedasif01729@gmail.com"
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2 mt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full md:w-max px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-600/20"
                >
                  Send Message
                  <Send size={20} />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* ম্যাপ অংশ */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 w-full h-[350px] rounded-[2.5rem] overflow-hidden border border-slate-800 grayscale hover:grayscale-0 transition-all duration-700"
        >
          <BasicMap />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
