"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Parallax, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { sliderData } from "./sliderData";

export default function Slider() {
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
              <Image
                width={500}
                height={300}
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover  rounded-lg"
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
}
