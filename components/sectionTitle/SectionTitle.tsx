"use client";

import React, { useEffect } from "react";
import styles from "./sectionTitle.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

// টাইপস্ক্রিপ্ট ইন্টারফেস ডিফাইন করা হয়েছে
interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div
      data-aos="zoom-in"
      className={`${styles.main} md:text-[60px] sm:text-[40px] text-[30px] px-4`}
    >
      <h2 className={styles.first}>{title}</h2>
      <h2 className={styles.second}>{title}</h2>
    </div>
  );
};

export default SectionTitle;
