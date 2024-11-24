"use client";
import galleryAnimation from "@/components/Hooks/GallerySection";
import Button from "@/components/shared/Button/Button";
import { motion } from "framer-motion";

import React from "react";

const AddsBanner: React.FC = () => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1500"
      className="mt-10  mb-20 bg-custom flex flex-col md:flex-row items-center    justify-between       p-6 md:p-12 gap-6 md:gap-12 mx-4 md:mx-10 rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl"
    >
      <div className="mx-auto md:mx-40 flex-2 text-center md:text-left">
        <h1 className="font-poppins font-extrabold italic   text-[#6441C2E5] text-3xl ">
          {" "}
          𝕭𝖎𝖌 𝕯𝖊𝖆𝖑
        </h1>
        <p className="text-xl md:text-2xl leading-8 md:leading-10 font-semibold text-gray-700 mb-6">
          <span className="text-[#6441C2E5] text-3xl md:text-5xl font-extrabold">
            30%{" "}
          </span>
          Off for New Customers
        </p>
        <Button></Button>
      </div>

      <div className="flex justify-end">
        <div className="relative w-60 h-48 md:w-80 md:h-72 transform hover:scale-105 transition-all duration-500">
          <motion.img
            variants={galleryAnimation}
            initial="hidden"
            animate="visible"
            loading="lazy"
            src="https://static.vecteezy.com/system/resources/previews/047/656/906/non_2x/a-couple-in-business-attire-standing-together-free-png.png"
            alt="Promotional Offer"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AddsBanner;
