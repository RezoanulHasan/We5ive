/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import Link from "next/link";
import CartButton from "@/components/shared/Button/CartButton/CartButton";
import { productDatas, Products } from "@/components/ProductData/ProductData";
import { motion } from "framer-motion";
import galleryAnimation from "@/components/Hooks/GallerySection";

const NewArrival: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  // Filter new arrival products
  const newArrivals = React.useMemo(
    () => productDatas.filter((product) => product.status === "New Arrival"),
    []
  );

  const displayedProducts = showAll ? newArrivals : newArrivals.slice(0, 4);

  return (
    <div className="p-8">
      <h2 className="text-xl font-xs text-[#6441C2E5]">FEATURE PRODUCT</h2>
      <h2 className="text-2xl font-semibold mb-8 text-gray-800">
        New Arrivals
      </h2>

      {newArrivals.length === 0 ? (
        <p className="text-gray-500 text-center">
          No new arrivals available at the moment.
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
    <div className="bg-white border border-gray-300 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <motion.img
        variants={galleryAnimation}
        initial="hidden"
        animate="visible"
        src={
          mainImage ||
          "https://static.vecteezy.com/system/resources/previews/025/262/295/non_2x/original-products-logo-design-and-original-icon-vector.jpg"
        } // Fallback image
        alt={product.title}
        loading="lazy"
        className="object-cover  w-full h-96 "
      />

      <div className="mb-3 px-2">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          𝓢𝓮𝓵𝓮𝓬𝓽 𝓒𝓸𝓵𝓸𝓻
        </h3>
        <div className="flex gap-2 justify-center">
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
      </div>

      <div className="px-4 pb-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-base font-medium text-gray-800">
            {product.title}
          </h3>
          <p className="text-base font-semibold text-gray-600">
            ${product.price}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <CartButton product={product} />
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

export default NewArrival;
