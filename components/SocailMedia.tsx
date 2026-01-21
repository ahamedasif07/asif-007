"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  Facebook,
  Linkedin,
  Instagram,
  Github,
  MessageCircle,
} from "lucide-react";

const SocialMedia: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ১. ইনট্রো অ্যানিমেশন (ডান থেকে বামে আসবে)
      gsap.from(containerRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // ২. ফ্লোটিং অ্যানিমেশন (সারাক্ষণ উপরে-নিচে ভাসবে)
      gsap.to(containerRef.current, {
        y: "-=12", // ১২ পিক্সেল উপরে-নিচে হবে
        duration: 2,
        ease: "sine.inOut",
        repeat: -1, // ইনফিনিট লুপ
        yoyo: true, // উপরে গিয়ে আবার নিচে ফিরবে
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
      <div
        ref={containerRef}
        className="flex flex-col gap-5 p-4 border border-blue-500/30 rounded-2xl bg-black/30 backdrop-blur-xl shadow-[0_0_25px_rgba(30,58,138,0.2)]"
      >
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-blue-500 transition-all duration-300 transform hover:scale-125 hover:rotate-12 ${link.color}`}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
