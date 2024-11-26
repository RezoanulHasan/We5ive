"use client";
import { images, manImages } from "@/components/ProductData/ProductData";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React from "react";
import TopSell from "./Product/TopSell";

const Gallery = () => {
  const router = useRouter();

  return (
    <>
      <section className="py-10 px-4 bg-gray-100">
        <h2 className="text-center text-3xl sm:text-5xl mb-8 font-bold">
          Step into Elegance with <br />
          <span className="text-[#6441C2E5]  text-2xl ">
            WeMen Fashion Gallery
          </span>
        </h2>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow hover:shadow-lg"
            >
              {/* Image */}
              <motion.img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-auto transform transition-transform duration-500 hover:scale-105"
              />
              {/* Hover Button */}
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <button
                  className="bg-white text-gray-900 font-medium px-4 py-2 rounded shadow-lg transform hover:scale-105"
                  onClick={() => router.push("/weMenProduct")}
                >
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <TopSell></TopSell>
      <section className="py-10 px-4">
        <h2 className="text-center text-3xl sm:text-5xl mb-8 font-bold">
          Discover the Coolest Styles in <br />
          <span className="text-[#6441C2E5]">Boy Fashion Gallery</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {manImages?.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md"
            >
              <motion.img
                src={image}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <button
                  className="bg-white text-gray-800 font-semibold px-4 py-2 rounded-lg shadow hover:shadow-md transform hover:scale-105 transition-transform duration-300"
                  onClick={() => router.push("/menProduct")}
                >
                  Shopping Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
