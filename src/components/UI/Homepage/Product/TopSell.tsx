"use client";

import { productDatas } from "@/components/ProductData/ProductData";
import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import Link from "next/link";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

// Motion imports for animations
import { motion } from "framer-motion";
import galleryAnimation from "@/components/Hooks/GallerySection";

const TopSell: React.FC = () => {
  // Filter products with "Top Sell" status
  const topSellingProducts = React.useMemo(
    () => productDatas.filter((product) => product.status === "Top Sell"),
    []
  );

  return (
    <div className="p-8">
      {/* Section Title */}
      <h2 className="text-xl font-xs text-[#6441C2E5]">TOP SELL</h2>
      <h2 className="text-2xl font-semibold mb-8 text-gray-800">
        Most Popular Products
      </h2>

      {topSellingProducts.length === 0 ? (
        <p className="text-red-500 text-center">
          No top-selling products available at the moment.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {topSellingProducts.map((product) => (
            <div
              key={product.id}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Status Badge */}
              <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                {product.status}
              </div>

              {/* Reviews */}
              <div className="absolute top-4 right-4 text-white bg-[#6441C2E5] rounded-full px-3 py-1 text-xs font-semibold shadow-md z-10">
                {product.reviews ?? 0}
              </div>

              {/* Product Image (Circular) */}
              <div className="flex justify-center items-center mt-6">
                <motion.img
                  variants={galleryAnimation}
                  initial="hidden"
                  animate="visible"
                  src={
                    product.images?.[0] ||
                    "https://static.vecteezy.com/system/resources/previews/025/262/295/non_2x/original-products-logo-design-and-original-icon-vector.jpg"
                  }
                  alt={product.title}
                  className="w-32 h-32 object-cover rounded-full border-4 border-gray-200"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300 rounded-lg">
                <Rating
                  style={{ maxWidth: 120 }}
                  value={product.reviews ?? 0} // Ensure reviews is a number
                  readOnly
                  className="mb-4"
                />
                <p className="text-white text-lg font-semibold mb-4">
                  ${product.price.toFixed(2)}
                </p>
                <Link href={`/products/${product.id}`}>
                  <button
                    className="flex items-center bg-white text-black px-4 py-2 rounded-full shadow-md hover:bg-gray-200"
                    aria-label={`View details for ${product.title}`}
                  >
                    <FaInfoCircle className="mr-2 text-xl" />
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopSell;
