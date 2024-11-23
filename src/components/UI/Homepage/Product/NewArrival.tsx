/* eslint-disable @next/next/no-img-element */
"use client";

import { productDatas } from "@/components/ProductData/ProductData";
import React, { useState } from "react";
import { FaCartPlus, FaInfoCircle } from "react-icons/fa";
import Link from "next/link";

const NewArrival: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  // Memoize filtered products for better performance
  const newArrivals = React.useMemo(
    () => productDatas.filter((product) => product.status === "New Arrival"),
    []
  );

  const displayedProducts = showAll ? newArrivals : newArrivals.slice(0, 4);

  return (
    <div className="p-8">
      <h2 className="text-xl font-xs  text-[#6441C2E5]  text">
        FEATURE PRODUCT
      </h2>
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
            <div
              key={product.id}
              className="bg-white border border-gray-300 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={product.images[0] || "/fallback-image.jpg"}
                alt={product.title}
                className="w-full h-64 object-cover mb-6 rounded-t-xl"
              />
              <div className="px-4 pb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-base font-semibold text-gray-800 ">
                    {product.title}
                  </h3>
                  <p className="text-base font-semibold text-gray-600 text ">
                    ${product.price}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <button
                    className="flex items-center button-custom p-2 "
                    aria-label={`Add ${product.title} to cart`}
                  >
                    <FaCartPlus className="mr-2 text-xl" />
                    Add to Cart
                  </button>
                  <Link href={`/products/${product.id}`}>
                    <button
                      className="flex items-center  button-custom p-2 "
                      aria-label={`View details for ${product.title}`}
                    >
                      <FaInfoCircle className="mr-2 text-xl" />
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-8 py-3 font-semibold button-custom "
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default NewArrival;
