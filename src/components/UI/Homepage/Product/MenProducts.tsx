/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { FaInfoCircle, FaHeart } from "react-icons/fa";
import Link from "next/link";
import { productDatas, Products } from "@/components/ProductData/ProductData";
import { motion } from "framer-motion";
import galleryAnimation from "@/components/Hooks/GallerySection";
import useTitle from "@/components/Hooks/useTitle";

const MenProducts: React.FC = () => {
  useTitle("Men Product");

  const [showAll, setShowAll] = useState(false);

  const menProducts = React.useMemo(
    () => productDatas.filter((product) => product.gender === "Men"),
    []
  );

  const displayedProducts = showAll ? menProducts : menProducts.slice(0, 8); // Display 8 products initially

  return (
    <div className="p-8 mt-20">
      <h2 className="text-xl font-xs text-[#6441C2E5]">FEATURE PRODUCT</h2>
      <h2 className="text-2xl font-semibold mb-8 text-gray-800">
        Men's Collection
      </h2>

      {menProducts.length === 0 ? (
        <p className="text-gray-500 text-center">
          No products available for men at the moment.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      <div className="mt-8 text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-8 py-3 font-semibold button-custom"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

// ProductCard Component
const ProductCard: React.FC<{ product: Products }> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [mainImage, setMainImage] = useState<string>(product.images[0]);

  return (
    <div className="mt-5 bg-white border border-gray-300 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl relative">
      {/* Price at top-right corner */}
      <div className="absolute top-4 right-4 bg-[#6441C2] text-white text-sm font-bold p-2 rounded-full">
        ${product.price}
      </div>

      <div className="absolute top-3 left-6 -mt-4 -mr-4 w-20 h-20 rounded-b-full bg-[#6441C2E5] flex items-center justify-center text-white text-sm font-bold">
        {product.stock} <br /> in stock
      </div>

      <motion.img
        variants={galleryAnimation}
        initial="hidden"
        animate="visible"
        src={
          mainImage ||
          "https://static.vecteezy.com/system/resources/previews/025/262/295/non_2x/original-products-logo-design-and-original-icon-vector.jpg"
        }
        alt={product.title}
        loading="lazy"
        className="object-cover w-full h-96"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          𝓢𝓮𝓵𝓮𝓬𝓽 𝓒𝓸𝓵𝓸𝓻
        </h3>
        <div className="flex gap-2 justify-center mb-4">
          {product.colors?.map((color: string, index: number) => (
            <button
              key={color}
              className={`w-8 h-8 rounded-full border-2 ${
                selectedColor === color
                  ? "border-[#6441C2E5]"
                  : "border-gray-300"
              }`}
              style={{ backgroundColor: color }}
              title={`Select ${color}`}
              aria-label={`Select ${color}`}
              onClick={() => {
                setSelectedColor(color);
                setMainImage(product.images[index]);
              }}
            />
          ))}
        </div>

        <div className="flex justify-between items-center mb-2">
          <h3 className="text-base font-medium text-gray-800">
            {product.title}
          </h3>

          {/* Likes Badge */}
          <div className="flex items-center text-red-500 gap-1 text-sm font-semibold">
            <FaHeart />
            {product.likes}
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Link href={`/products/${product.id}`}>
            <button
              className="flex items-center button-custom p-2"
              aria-label={`View details for ${product.title}`}
            >
              <FaInfoCircle className="mr-2 text-xl" />
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenProducts;
