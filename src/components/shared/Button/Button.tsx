"use client";

import Link from "next/link";
import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";

const Button: React.FC = () => {
  return (
    <>
      <Link href="/allProduct">
        <div className="flex">
          {/* Shop Now Button */}
          <button className="bg-[#8f71e1] text-white flex items-center justify-center px-4 py-2 rounded-full font-medium hover:bg-[#7e63d6] transition duration-300 ease-in-out text-sm sm:text-base md:px-6 md:py-3">
            Shop Now
          </button>

          {/* Icon Button */}
          <button className="bg-[#8f71e1] text-white flex items-center justify-center px-4 py-2 rounded-full hover:bg-[#7e63d6] transition duration-300 ease-in-out">
            <FaArrowTrendUp className="w-5 h-5" />
          </button>
        </div>
      </Link>
    </>
  );
};

export default Button;
