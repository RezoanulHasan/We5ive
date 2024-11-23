"use client";

import Button from "@/components/shared/Button/Button";
import React from "react";

const Banner: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center py-16 px-4 mt-20">
        {/* Headline */}
        <h1
          className="font-manrope font-bold text-[48px] leading-[62.4px] text-left black mb-4"
          style={{
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Elevate Your Everyday Style
        </h1>
        {/* Title */}
        <p
          className="font-manrope font-normal text-[19px] leading-[24.7px] text-center mb-6"
          style={{
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Discover the Latest Trends in Sustainable Fashion
        </p>
        {/* Button */}
        <Button></Button>
      </div>
    </>
  );
};

export default Banner;
