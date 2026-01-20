"use client";
import React, { useState, useEffect } from "react";

const TypingTitle = () => {
  const text = "Front-End Developer"; // your text
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, 120); // typing speed (ms)
      return () => clearTimeout(timeout);
    } else {
      // optional: restart after delay
      const resetTimeout = setTimeout(() => {
        setDisplayText("");
        setIndex(0);
      }, 2000);
      return () => clearTimeout(resetTimeout);
    }
  }, [index, text]);

  return (
    <h1 className=" pt-4  lg:text-4xl md:text-3xl text-2xl font-bold text-gray-800">
      <span className="text-blue-600  ">{displayText}</span>
      <span className="animate-pulse">|</span>
    </h1>
  );
};

export default TypingTitle;
