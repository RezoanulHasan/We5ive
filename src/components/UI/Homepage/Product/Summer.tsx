/* eslint-disable @next/next/no-img-element */

import { productDatas } from "@/components/ProductData/ProductData";
import React, { useState } from "react";
import { FaCartPlus, FaInfoCircle } from "react-icons/fa";
import Link from "next/link";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Summer: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  // Memoize filtered products for better performance
  const Summers = React.useMemo(
    () => productDatas.filter((product) => product.season === "Summer"),
    []
  );

  const displayedProducts = showAll ? Summers : Summers.slice(0, 8);

  return (
    <div className="p-8">
      <h2 className="text-xl font-xs text-[#6441C2E5]">SUMMER</h2>
      <h2 className="text-2xl font-semibold mb-8 text-gray-800">Big Deal</h2>

      {Summers.length === 0 ? (
        <p className="text-gray-500 text-center">
          No new arrivals available at the moment.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="relative bg-white border border-gray-300 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl p-4 min-h-[450px]"
            >
              {/* U-shaped Design */}
              <div className="absolute top-3 right-10 -mt-4 -mr-4 w-20 h-20 rounded-b-full bg-[#6441C2E5] flex items-center justify-center text-white text-sm font-bold">
                Up <br />
                to <br />
                40%
              </div>

              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-64 object-cover mb-6 rounded-t-xl"
                loading="lazy"
              />
              <div className="px-4 pb-4">
                <div className="flex justify-between items-center mb-4">
                  <Rating
                    style={{ maxWidth: 120 }}
                    value={product.reviews ?? 0} // Ensure reviews is a number
                    readOnly
                  />
                  <p className="text-gray-600 text-sm">
                    {product.reviews ?? 0} Stars
                  </p>
                </div>
                <div className="flex justify-between">
                  <h3 className="text-sm font-medium text-gray-800">
                    {product.title}
                  </h3>
                  <p className="text-base font-semibold text-gray-600">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <button
                  className="flex items-center button-custom p-2"
                  aria-label={`Add ${product.title} to cart`}
                >
                  <FaCartPlus className="mr-2 text-xl" />
                  Add to Cart
                </button>
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

export default Summer;
