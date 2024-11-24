"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Parallax, Pagination, Navigation } from "swiper/modules";

import { sliderData } from "./sliderData";
import { motion } from "framer-motion";
import galleryAnimation from "@/components/Hooks/GallerySection";

const Slider: React.FC = () => {
  return (
    <Swiper
      className="mySwiper"
      speed={600}
      parallax={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Parallax, Pagination, Navigation]}
    >
      <div
        slot="container-start"
        className="parallax-bg   bg-custom  "
        data-swiper-parallax="-23%"
      ></div>

      {sliderData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="flex items-center justify-between p-6  rounded-lg ">
            <div className="w-1/2 ">
              <motion.img
                variants={galleryAnimation}
                initial="hidden"
                animate="visible"
                src={
                  typeof item.image === "string"
                    ? item.image
                    : "https://static.vecteezy.com/system/resources/previews/025/262/295/non_2x/original-products-logo-design-and-original-icon-vector.jpg"
                }
                alt={item.title}
                loading="lazy"
                className="object-cover w-full h-96"
              />
            </div>

            <div className="w-1/2 pl-6">
              <h2
                className="text-3xl    text-[#6441C2E5]  font-bold"
                data-swiper-parallax="-300"
              >
                {item.title}
              </h2>
              <h3
                className="text-xl    text-[#8261dce5]  mt-2"
                data-swiper-parallax="-200"
              >
                {item.subtitle}
              </h3>
              <p
                className="text-sm text-gray-500 mt-4"
                data-swiper-parallax="-100"
              >
                {item.subSubtitle}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
