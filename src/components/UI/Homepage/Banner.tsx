"use client";

import React from "react";
import Button from "@/components/shared/Button/Button";
import mainBanner from "../../../assets/mainBanner.webp";

const Banner: React.FC = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center text-center py-10 px-4 w-full min-h-[850px] bg-no-repeat bg-center bg-cover mt-20"
      style={{
        backgroundImage: `url(${mainBanner.src})`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Headline with animation */}
        <h1 className="font-manrope font-extrabold text-[48px] md:text-[64px] leading-[1.2] text-white mb-4 animate-bounceIn">
          Elevate Your Everyday Style
        </h1>
        {/* Subtitle with animation */}
        <p className="font-manrope text-[18px] md:text-[20px] text-white opacity-90 mb-6 max-w-[600px] animate-fadeInOut delay-2000">
          Discover the Latest Trends in Sustainable Fashion
        </p>

        <Button />
      </div>
    </div>
  );
};

export default Banner;
