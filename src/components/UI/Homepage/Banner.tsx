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
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Headline with animation */}
        <h1 className="font-manrope font-extrabold text-[48px] md:text-[64px] leading-[1.2] text-white mb-4 animate-bounceIn">
          Elevate Your Everyday Style
        </h1>

        {/* Subtitle with animation */}
        <p className="font-manrope text-[18px] md:text-[20px] text-white opacity-90 mb-2 max-w-[600px] ">
          𝓓𝓲𝓼𝓬𝓸𝓿𝓮𝓻 𝓽𝓱𝓮 𝓛𝓪𝓽𝓮𝓼𝓽 𝓣𝓻𝓮𝓷𝓭𝓼 𝓲𝓷 𝓢𝓾𝓼𝓽𝓪𝓲𝓷𝓪𝓫𝓵𝓮 𝓕𝓪𝓼𝓱𝓲𝓸𝓷
        </p>

        {/* Additional Text Sections */}
        <div className="text-white max-w-[800px] space-y-4 text-sm mb-5">
          {/* Overview */}
          <p>
            <span className="font-semibold text-xl text-[#dad1efe5]">
              {" "}
              𝓐𝓽 𝓦𝓮5𝓲𝓿𝓮
            </span>
            , we believe in creating a seamless blend of comfort and
            sophistication. Our curated collection of sustainable fashion
            ensures you look great while making a positive impact on the planet.
          </p>
        </div>

        {/* Button */}
        <Button />
      </div>
    </div>
  );
};

export default Banner;
