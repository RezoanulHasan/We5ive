"use client";

import React from "react";
import Button from "@/components/shared/Button/Button";
import mainBanner from "../../../assets/mainBanner.jpg";
import Features from "./Features";
const Banner: React.FC = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center text-center py-10 w-full md:min-h-[650px] bg-no-repeat bg-center bg-cover mt-20"
      style={{
        backgroundImage: `url(${mainBanner.src})`,
        backgroundSize: "cover",
      }}
    >
      <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0"></div>

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="font-manrope font-extrabold text-[36px] md:text-[64px] leading-[1.2] text-white mb-4">
          Elevate Your Everyday Style
        </h1>

        <p className="font-manrope text-[16px] md:text-[20px] text-white opacity-90 mb-4 max-w-[600px]">
          𝓓𝓲𝓼𝓬𝓸𝓿𝓮𝓻 𝓽𝓱𝓮 𝓛𝓪𝓽𝓮𝓼𝓽 𝓣𝓻𝓮𝓷𝓭𝓼 𝓲𝓷 𝓢𝓾𝓼𝓽𝓪𝓲𝓷𝓪𝓫𝓵𝓮 𝓕𝓪𝓼𝓱𝓲𝓸𝓷
        </p>

        <div className="text-white max-w-[800px] space-y-4 text-sm md:mb-10  mb-5">
          <p>
            <span className="font-semibold text-xl text-[#dad1efe5]">
              𝓐𝓽 𝓦𝓮5𝓲𝓿𝓮
            </span>
            , we believe in creating a seamless blend of comfort and
            sophistication. Our curated collection of sustainable fashion
            ensures you look great while making a positive impact on the planet.
          </p>
        </div>

        <Button />

        <Features></Features>
      </div>
    </div>
  );
};

export default Banner;
