"use client"; // অ্যানিমেশনের জন্য এটি প্রয়োজনীয়

import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Linkedin,
  Instagram,
  Github,
  MessageCircle,
} from "lucide-react";

const SocialMedia: React.FC = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook size={24} />,
      href: "https://www.facebook.com/share/19sqccZkUf/",
      color: "hover:text-blue-500",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      href: "https://www.linkedin.com/in/asif-hosen-87269832b",
      color: "hover:text-blue-400",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle size={24} />,
      href: "https://wa.me/8801729149634",
      color: "hover:text-green-500",
    },
    {
      name: "Instagram",
      icon: <Instagram size={24} />,
      href: "https://www.instagram.com/ahamed_asif_07/",
      color: "hover:text-pink-500",
    },
    {
      name: "GitHub",
      icon: <Github size={24} />,
      href: "https://github.com/ahamedasif07",
      color: "hover:text-gray-400",
    },
  ];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-4 p-3 border border-blue-700 rounded-2xl bg-black/20 backdrop-blur-xl shadow-[0_0_20px_rgba(0,0,0,0.3)]"
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className={`text-blue-700 transition-colors duration-300 ${link.color}`}
          >
            {link.icon}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default SocialMedia;
