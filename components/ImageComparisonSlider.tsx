"use client";

import Image from "next/image";
import React, {
  useRef,
  useState,
  MouseEvent as ReactMouseEvent,
  TouchEvent as ReactTouchEvent,
} from "react";
import beforeImage from "../public/assets/asif12_image-.png";
import afterImage from "../public/assets/asif-work.jpg";

const ImageComparisonSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  const calculatePosition = (clientX: number) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const rect = slider.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const newPosition = (offsetX / rect.width) * 100;

    if (newPosition >= 0 && newPosition <= 100) {
      setSliderPosition(newPosition);
    }
  };

  const handleMouseMove = (event: ReactMouseEvent<HTMLDivElement>) => {
    // মাউস ক্লিক করা অবস্থায় বা শুধু হোভার অবস্থায় কাজ করানোর জন্য
    calculatePosition(event.clientX);
  };

  const handleTouchMove = (event: ReactTouchEvent<HTMLDivElement>) => {
    if (event.touches.length > 0) {
      calculatePosition(event.touches[0].clientX);
    }
  };

  return (
    <div className="mx-auto h-[450px] w-full max-w-[500px] select-none">
      <div
        ref={sliderRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative border-2 border-blue-600 w-full h-full overflow-hidden group rounded-lg bg-gray-900"
      >
        {/* Before Image (Base Layer) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={beforeImage}
            alt="Before"
            fill
            className="object-cover" // object-contain এর বদলে cover ব্যবহার করলে স্লাইডার ভালো কাজ করে
            priority
          />
        </div>

        {/* After Image (Top Layer - Clipped) */}
        <div
          className="absolute inset-0 w-full h-full z-10 overflow-hidden"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`, // স্লাইডারের জন্য clipPath সবচেয়ে ভালো পদ্ধতি
          }}
        >
          <Image src={afterImage} alt="After" fill className="object-cover" />
        </div>

        {/* Divider Line & Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-blue-500 z-20"
          style={{
            left: `${sliderPosition}%`,
            cursor: "col-resize",
          }}
        >
          {/* Handle Button */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-[16px] flex items-center justify-center w-8 h-8 bg-blue-600 border-2 border-white rounded-full shadow-xl">
            <div className="flex gap-1">
              <div className="w-0.5 h-3 bg-white/80"></div>
              <div className="w-0.5 h-3 bg-white/80"></div>
            </div>
          </div>

          {/* Label (Optional) */}
          <span className="absolute bottom-4 right-4 bg-black/50 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Slide
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageComparisonSlider;
