"use client";

import Image from "next/image";
import React from "react";
// লোড করার সময় লোগো ফাইলের পাথ আপনার প্রজেক্ট স্ট্রাকচার অনুযায়ী চেক করে নেবেন
import logo from "../public/assets/alogo.svg";

const Footer: React.FC = () => {
  // বর্তমান বছর অটোমেটিক দেখানোর জন্য (ঐচ্ছিক কিন্তু প্রফেশনাল)
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-black">
      <div className=" py-[30px] mx-auto flex flex-col justify-center items-center">
        {/* লোগো সেকশন */}
        <div className="mb-4 transition-transform duration-300 hover:scale-110">
          <Image
            height={120}
            width={120}
            src={logo}
            alt="Ahamed Asif Logo"
            className="cursor-pointer"
          />
        </div>

        {/* কপিরাইট টেক্সট */}
        <p className="mt-2 text-[13px] text-gray-500 tracking-wide text-center">
          © {currentYear}{" "}
          <span className="text-blue-500 font-medium">Ahamed Asif</span>. All
          rights reserved.
        </p>

        {/* সোশ্যাল লিঙ্ক বা ছোট মেসেজ চাইলে এখানে যোগ করতে পারেন */}
        <div className="mt-4 flex gap-4 text-gray-600 text-[12px]">
          <span className="hover:text-blue-400 cursor-pointer transition-colors">
            Privacy Policy
          </span>
          <span className="hover:text-blue-400 cursor-pointer transition-colors">
            Terms of Service
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
